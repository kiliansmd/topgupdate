"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const animationRef = useRef<number | null>(null)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Setze Canvas-Größe auf Fenstergröße
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Erstelle Partikel - nur einmal beim ersten Rendern
    if (particlesRef.current.length === 0) {
      const colors = ["rgba(103, 76, 255, 0.3)", "rgba(138, 43, 226, 0.2)", "rgba(75, 0, 130, 0.2)"]

      // Reduziere die Anzahl der Partikel für bessere Performance
      const particleCount = window.innerWidth < 768 ? 20 : 40

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1, // Kleinere Partikel für bessere Performance
          speedX: Math.random() * 0.3 - 0.15, // Langsamere Bewegung für bessere Performance
          speedY: Math.random() * 0.3 - 0.15,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    // Intersection Observer für Performance-Optimierung
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(canvas)

    // Animation
    const animate = () => {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Bewege Partikel
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Prüfe Grenzen
        if (particle.x > canvas.width) particle.x = 0
        else if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        else if (particle.y < 0) particle.y = canvas.height

        // Zeichne Partikel
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
      observer.disconnect()
    }
  }, [isVisible])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
