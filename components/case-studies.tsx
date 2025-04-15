"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Tech-Startup skaliert Team in 3 Monaten",
      description: "Wie wir einem wachsenden Startup halfen, 12 Entwickler in nur 3 Monaten einzustellen.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Tech", "Skalierung", "Entwickler"],
    },
    {
      title: "Mittelständler findet spezialisierte Fachkräfte",
      description: "Erfolgreiche Besetzung von 5 schwer zu findenden Spezialisten-Positionen.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Mittelstand", "Spezialisten", "Engineering"],
    },
    {
      title: "Konzern optimiert Recruiting-Prozesse",
      description: "Reduzierung der Time-to-Hire um 40% durch optimierte Prozesse und Kandidatenauswahl.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Konzern", "Prozessoptimierung", "Effizienz"],
    },
  ]

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="success-badge mb-4">Erfolgsgeschichten</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Case Studies</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Erfahren Sie, wie wir Unternehmen verschiedener Größen und Branchen bei ihren Recruiting-Herausforderungen
            unterstützt haben
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="glass-card overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-white/70 text-sm mb-4">{study.description}</p>
                <Button variant="link" className="text-primary p-0 h-auto flex items-center">
                  Case Study lesen <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-white">Alle Case Studies ansehen</Button>
        </div>
      </div>
    </section>
  )
}
