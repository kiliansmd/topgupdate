"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  baseVelocity?: number
}

export default function ParallaxSection({ children, className = "", baseVelocity = 0.2 }: ParallaxSectionProps) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * baseVelocity])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1, rootMargin: "100px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {isVisible && (
        <motion.div style={{ y }} className="relative z-10">
          {children}
        </motion.div>
      )}
      {!isVisible && <div className="relative z-10">{children}</div>}
    </div>
  )
}
