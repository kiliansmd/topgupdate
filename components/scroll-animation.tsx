"use client"

import { type ReactNode, useRef } from "react"
import { useInView } from "framer-motion"
import type { JSX } from "react/jsx-runtime"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  once?: boolean
  threshold?: number
  asElement?: keyof JSX.IntrinsicElements
}

/**
 * A minimal, elegant component that reveals content when it enters the viewport.
 * Designed for professional, subtle transitions in enterprise applications.
 */
export default function ScrollReveal({
  children,
  className = "",
  once = true,
  threshold = 0.2,
  asElement: Element = "div",
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  // Apply a CSS class when the element is in view
  const visibilityClass = isInView ? "scroll-visible" : "scroll-hidden"

  return (
    <Element ref={ref} className={`${className} ${visibilityClass}`}>
      {children}
    </Element>
  )
}
