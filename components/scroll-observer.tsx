"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollObserverProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  onIntersect?: () => void
}

export default function ScrollObserver({
  children,
  className = "",
  threshold = 0.2,
  rootMargin = "0px",
  onIntersect,
}: ScrollObserverProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
            if (onIntersect) onIntersect()
            // Optional: Unobserve after first intersection
            // observer.unobserve(entry.target)
          } else {
            // Optional: Remove class when out of view for re-animation
            // entry.target.classList.remove("in-view")
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, onIntersect])

  return (
    <div ref={ref} className={`reveal-section ${className}`}>
      {children}
    </div>
  )
}

export function StaggerContainer({
  children,
  className = "",
  staggerItems = true,
}: { children: ReactNode; className?: string; staggerItems?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          } else {
            // Optional: Remove class when out of view for re-animation
            // entry.target.classList.remove("in-view")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={`stagger-container ${className}`}>
      {staggerItems
        ? Array.isArray(children)
          ? children.map((child, index) => (
              <div key={index} className="stagger-item">
                {child}
              </div>
            ))
          : children
        : children}
    </div>
  )
}
