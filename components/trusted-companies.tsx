"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Beispiel-Unternehmenslogos
const companyLogos = [
  { id: 1, name: "Microsoft", logo: "/placeholder.svg?height=40&width=120" },
  { id: 2, name: "Google", logo: "/placeholder.svg?height=40&width=120" },
  { id: 3, name: "Amazon", logo: "/placeholder.svg?height=40&width=120" },
  { id: 4, name: "Apple", logo: "/placeholder.svg?height=40&width=120" },
  { id: 5, name: "Tesla", logo: "/placeholder.svg?height=40&width=120" },
  { id: 6, name: "Meta", logo: "/placeholder.svg?height=40&width=120" },
  { id: 7, name: "IBM", logo: "/placeholder.svg?height=40&width=120" },
  { id: 8, name: "SAP", logo: "/placeholder.svg?height=40&width=120" },
  { id: 9, name: "Siemens", logo: "/placeholder.svg?height=40&width=120" },
  { id: 10, name: "Bosch", logo: "/placeholder.svg?height=40&width=120" },
  { id: 11, name: "Allianz", logo: "/placeholder.svg?height=40&width=120" },
  { id: 12, name: "Deutsche Bank", logo: "/placeholder.svg?height=40&width=120" },
  { id: 13, name: "Volkswagen", logo: "/placeholder.svg?height=40&width=120" },
  { id: 14, name: "BMW", logo: "/placeholder.svg?height=40&width=120" },
  { id: 15, name: "Adidas", logo: "/placeholder.svg?height=40&width=120" },
  { id: 16, name: "Lufthansa", logo: "/placeholder.svg?height=40&width=120" },
  { id: 17, name: "Deutsche Telekom", logo: "/placeholder.svg?height=40&width=120" },
  { id: 18, name: "Bayer", logo: "/placeholder.svg?height=40&width=120" },
]

export default function TrustedCompanies() {
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null)

  return (
    <section className="py-16 bg-[#0d0d14] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <Button variant="outline" className="mb-4 border-primary/20 text-white">
            Vertrauen von führenden Unternehmen
          </Button>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Über 150 Unternehmen vertrauen auf unsere Expertise</h2>
          <p className="text-white/70 max-w-2xl mx-auto">bei der Suche nach qualifizierten Fachkräften</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-8">
          {companyLogos.slice(0, 18).map((company) => (
            <motion.div
              key={company.id}
              className="flex items-center justify-center p-4 bg-white/5 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.05 }}
              onMouseEnter={() => setHoveredLogo(company.id)}
              onMouseLeave={() => setHoveredLogo(null)}
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white/40 text-sm mb-2">Hover über die Logos für mehr Details</p>
        </div>
      </div>
    </section>
  )
}
