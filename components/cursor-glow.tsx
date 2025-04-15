"use client"

import { useEffect, useState, useCallback } from "react"

// Vereinfachte Cursor-Glow-Komponente ohne ClientOnly
export default function CursorGlow({ children }: { children: React.ReactNode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Throttle-Funktion für Performance-Optimierung
  const throttle = useCallback((callback: Function, limit: number) => {
    let waiting = false
    return function (...args: any[]) {
      if (!waiting) {
        callback(...args)
        waiting = true
        setTimeout(() => {
          waiting = false
        }, limit)
      }
    }
  }, [])

  useEffect(() => {
    setIsMounted(true)
    
    // Frühe Rückkehr, wenn wir nicht im Browser sind
    if (typeof window === 'undefined') return

    // Throttled update für bessere Performance
    const updatePosition = throttle((e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
        if (!isVisible) setIsVisible(true)
      })
    }, 10) // 10ms throttle für flüssigere Bewegung

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updatePosition as any)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition as any)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible, throttle])

  return (
    <>
      {children}
      {isMounted && (
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
          style={{
            opacity: isVisible ? 1 : 0,
            background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.07), transparent 80%)`,
          }}
        />
      )}
    </>
  )
}
