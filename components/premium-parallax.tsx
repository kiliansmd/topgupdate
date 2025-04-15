"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"

interface ParallaxProps {
  children: ReactNode
  baseVelocity?: number
  direction?: "up" | "down"
  className?: string
  offset?: [string, string]
}

export default function PremiumParallax({
  children,
  baseVelocity = 0.2,
  direction = "up",
  className = "",
  offset = ["start end", "end start"],
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  const yMultiplier = direction === "down" ? 1 : -1
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * baseVelocity * yMultiplier])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="relative z-10">
        {children}
      </motion.div>
    </div>
  )
}

export function useParallaxTransform(
  scrollYProgress: MotionValue<number>,
  inputRange: number[],
  outputRange: number[],
  direction: "x" | "y" = "y",
) {
  return useTransform(scrollYProgress, inputRange, outputRange)
}
