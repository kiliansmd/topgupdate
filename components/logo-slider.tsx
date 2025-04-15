"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"

interface LogoSliderProps {
  className?: string
}

const logos = [
  { name: "Microsoft", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Google", logo: "/placeholder.svg?height=40&width=100" },
  { name: "Amazon", logo: "/placeholder.svg?height=40&width=110" },
  { name: "Apple", logo: "/placeholder.svg?height=40&width=90" },
  { name: "Tesla", logo: "/placeholder.svg?height=40&width=100" },
  { name: "Meta", logo: "/placeholder.svg?height=40&width=90" },
  { name: "IBM", logo: "/placeholder.svg?height=40&width=80" },
  { name: "SAP", logo: "/placeholder.svg?height=40&width=90" },
  { name: "Siemens", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Bosch", logo: "/placeholder.svg?height=40&width=110" },
]

export default function LogoSlider({ className = "" }: LogoSliderProps) {
  // Duplicate logos to create seamless loop
  const allLogos = [...logos, ...logos]
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden bg-[#0d0d14] py-12 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto py-8 px-4 text-center">
        <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-white mb-4">
          Vertrauen von führenden Unternehmen
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Unsere Partner</h3>
        <p className="text-sm text-white/70 mb-8 max-w-xl mx-auto">
          Über 150 Unternehmen vertrauen auf unsere Expertise bei der Suche nach qualifizierten Fachkräften
        </p>

        <div className="relative w-full overflow-hidden">
          <div
            className={`flex items-center space-x-16 ${isVisible && !isHovered ? "animate-marquee" : ""}`}
            style={{ animationPlayState: isHovered ? "paused" : "running" }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
              >
                <Image
                  src={logo.logo || "/placeholder.svg"}
                  alt={`${logo.name} Logo`}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-xs text-white/40 flex justify-center items-center">
          <span>Hover über die Logos für mehr Details</span>
        </div>
      </div>
    </div>
  )
}
