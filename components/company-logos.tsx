"use client"

import { useRef, useState } from "react"
import Image from "next/image"

export default function CompanyLogos() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-12 bg-[#0d0d14] border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-center text-lg font-medium mb-8 text-white/80">Vertrauen von führenden Unternehmen</h3>

        <div
          ref={containerRef}
          className="relative overflow-hidden mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex items-center space-x-16 py-4"
            style={{
              animation: isHovered ? "none" : "scroll 30s linear infinite",
              width: "max-content",
            }}
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 transition-all duration-300 filter grayscale hover:grayscale-0 opacity-50 hover:opacity-80"
              >
                <div className="w-24 h-12 bg-white/5 rounded flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=40&width=120&text=Logo${index + 1}`}
                    alt={`Unternehmenslogo ${index + 1}`}
                    width={120}
                    height={40}
                    className="h-6 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS für die Animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 2rem));
          }
        }
      `}</style>
    </section>
  )
}
