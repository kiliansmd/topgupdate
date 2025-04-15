"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ClientLogoBanner() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Premium-Kundenlogos (Platzhalter)
  const clientLogos = [
    { name: "Microsoft", logo: "/placeholder.svg?height=40&width=120&text=Microsoft" },
    { name: "Google", logo: "/placeholder.svg?height=40&width=120&text=Google" },
    { name: "Amazon", logo: "/placeholder.svg?height=40&width=120&text=Amazon" },
    { name: "Apple", logo: "/placeholder.svg?height=40&width=120&text=Apple" },
    { name: "Tesla", logo: "/placeholder.svg?height=40&width=120&text=Tesla" },
    { name: "Meta", logo: "/placeholder.svg?height=40&width=120&text=Meta" },
    { name: "IBM", logo: "/placeholder.svg?height=40&width=120&text=IBM" },
    { name: "SAP", logo: "/placeholder.svg?height=40&width=120&text=SAP" },
    { name: "Siemens", logo: "/placeholder.svg?height=40&width=120&text=Siemens" },
    { name: "Bosch", logo: "/placeholder.svg?height=40&width=120&text=Bosch" },
    { name: "Allianz", logo: "/placeholder.svg?height=40&width=120&text=Allianz" },
    { name: "Deutsche Bank", logo: "/placeholder.svg?height=40&width=120&text=Deutsche Bank" },
  ]

  // Dupliziere Logos für nahtlosen Loop-Effekt
  const allLogos = [...clientLogos, ...clientLogos]

  return (
    <div className="relative py-12 overflow-hidden bg-gradient-to-b from-background to-background/95 border-y border-white/5">
      {/* Subtiler Hintergrund-Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-violet-900/5 to-indigo-900/5 pointer-events-none"></div>

      {/* Subtile Linien für eleganten Look */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center mb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white/60 text-sm font-light"
          >
            Vertrauen von führenden Unternehmen
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-px w-24 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 mt-2"
          />
        </div>

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
            {allLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.5 }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "grayscale(0)",
                  transition: { duration: 0.2 },
                }}
                className="flex-shrink-0 transition-all duration-300 filter grayscale hover:grayscale-0"
              >
                <Image
                  src={logo.logo || "/placeholder.svg"}
                  alt={`${logo.name} Logo`}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </motion.div>
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
    </div>
  )
}
