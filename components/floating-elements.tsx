"use client"

import { useRef, useMemo, useState, useEffect } from "react"
import { motion } from "framer-motion"

interface FloatingElementProps {
  count?: number
  minSize?: number
  maxSize?: number
  colors?: string[]
  className?: string
  speed?: number
  blur?: number
  opacity?: number
  parallaxIntensity?: number
  shapes?: ("circle" | "square" | "triangle")[]
}

// Create a seeded random function to ensure consistent values between server and client
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export default function FloatingElements({
  count = 10,
  minSize = 50,
  maxSize = 300,
  colors = [
    "from-indigo-500/10 to-violet-500/10",
    "from-violet-500/10 to-purple-500/10",
    "from-blue-500/10 to-indigo-500/10",
  ],
  className = "",
  speed = 1,
  blur = 60,
  opacity = 0.3,
  parallaxIntensity = 0.1,
  shapes = ["circle"],
}: FloatingElementProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate deterministic elements with seeded random numbers
  const elements = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Use a seed based on the index to ensure consistent values
      const seedBase = i * 1000;
      
      const size = minSize + seededRandom(seedBase + 1) * (maxSize - minSize)
      const colorIndex = Math.floor(seededRandom(seedBase + 2) * colors.length)
      const colorClass = colors[colorIndex]
      const shapeIndex = Math.floor(seededRandom(seedBase + 3) * shapes.length)
      const shape = shapes[shapeIndex]
      
      const xOffset = seededRandom(seedBase + 4) * 20 - 10
      const yOffset = seededRandom(seedBase + 5) * 20 - 10
      const delay = seededRandom(seedBase + 6) * 2
      const duration = (seededRandom(seedBase + 7) * 10 + 20) / speed
      const parallaxFactor = seededRandom(seedBase + 8) * 2 - 1 // Value between -1 and 1
      const rotation = seededRandom(seedBase + 9) * 360
      const scale = 0.8 + seededRandom(seedBase + 10) * 0.4
      
      return {
        id: i,
        size,
        x: seededRandom(seedBase + 11) * 100,
        y: seededRandom(seedBase + 12) * 100,
        delay,
        duration,
        colorClass,
        xOffset,
        yOffset,
        parallaxFactor,
        shape,
        rotation,
        scale,
      }
    })
  }, [count, maxSize, minSize, colors, speed, shapes])

  const getShapeClass = (shape: string) => {
    switch (shape) {
      case "square":
        return "rounded-lg"
      case "triangle":
        return "clip-path-triangle"
      case "circle":
      default:
        return "rounded-full"
    }
  }
  
  // Don't render on server for precise client-side animation
  if (!mounted) return null

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute bg-gradient-to-br ${element.colorClass} ${getShapeClass(element.shape)}`}
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
            filter: `blur(${blur}px)`,
            opacity: opacity,
          }}
          initial={{
            x: 0,
            y: 0,
            rotate: element.rotation,
            scale: element.scale,
          }}
          animate={{
            x: [element.xOffset, -element.xOffset, element.xOffset],
            y: [element.yOffset, -element.yOffset, element.yOffset],
            rotate: [element.rotation, element.rotation + 10, element.rotation],
            scale: [element.scale, element.scale * 1.1, element.scale],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: element.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
