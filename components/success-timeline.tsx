"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

// Beispiel-Erfolgsgeschichten
const successStories = [
  {
    id: 1,
    company: "TechVision GmbH",
    logo: "/placeholder.svg?height=60&width=120",
    title: "Skalierung des Entwicklungsteams in Rekordzeit",
    description:
      "TechVision benötigte nach einer Finanzierungsrunde schnell hochqualifizierte Entwickler. Wir konnten innerhalb von nur 3 Monaten 12 Entwickler vermitteln und so die Skalierung des Unternehmens ermöglichen.",
    results: [
      "12 Entwickler in 3 Monaten vermittelt",
      "Time-to-Hire um 40% reduziert",
      "Alle Kandidaten sind nach 12 Monaten noch im Unternehmen",
    ],
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
    industry: "Software & KI",
  },
  {
    id: 2,
    company: "MedTech AG",
    logo: "/placeholder.svg?height=60&width=120",
    title: "Besetzung von Schlüsselpositionen im regulierten Umfeld",
    description:
      "Die MedTech AG stand vor der Herausforderung, hochspezialisierte Positionen im regulierten Medizintechnik-Umfeld zu besetzen. Durch unsere Branchenexpertise konnten wir alle Positionen erfolgreich besetzen.",
    results: [
      "5 Spezialisten-Positionen besetzt",
      "Regulatorische Expertise sichergestellt",
      "Erfolgreiche FDA-Zulassung des Produkts",
    ],
    image: "/placeholder.svg?height=400&width=600",
    year: "2022",
    industry: "Medizintechnik",
  },
  {
    id: 3,
    company: "FinancePartners GmbH",
    logo: "/placeholder.svg?height=60&width=120",
    title: "Aufbau eines internationalen Finance-Teams",
    description:
      "FinancePartners benötigte für die Expansion nach Europa ein internationales Finance-Team. Wir haben in 6 Monaten ein komplettes Team mit Mitarbeitern aus 5 verschiedenen Ländern aufgebaut.",
    results: [
      "8 Finance-Experten aus 5 Ländern vermittelt",
      "Mehrsprachige Kandidaten mit internationaler Erfahrung",
      "Erfolgreiche Expansion in 3 europäische Märkte",
    ],
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
    industry: "Finanzdienstleistungen",
  },
]

export default function SuccessTimeline() {
  const timelineRef = useRef(null)
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.2 })

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Erfolgsgeschichten</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Wie wir Unternehmen zum{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">Erfolg</span>{" "}
          verhelfen
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Entdecken Sie, wie wir Unternehmen verschiedener Größen und Branchen bei ihren Recruiting-Herausforderungen
          unterstützt haben
        </p>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative">
        {/* Vertikale Linie */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 to-violet-600 transform md:translate-x-[-0.5px]"></div>

        {successStories.map((story, index) => (
          <div key={story.id} className="mb-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Zeitpunkt-Marker */}
              <div className="absolute left-0 md:left-1/2 top-0 transform translate-x-[-50%] md:translate-y-[3rem]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-background"></div>
                </div>
              </div>

              {/* Jahr-Badge (nur auf Desktop) */}
              <div
                className={`hidden md:block absolute top-[3rem] ${
                  index % 2 === 0 ? "md:right-[calc(50%+2rem)]" : "md:left-[calc(50%+2rem)]"
                }`}
              >
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {story.year}
                </Badge>
              </div>

              {/* Inhalt */}
              <div
                className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"} pl-10 md:pl-0 relative`}
              >
                {/* Jahr-Badge (nur auf Mobile) */}
                <Badge variant="outline" className="mb-4 md:hidden bg-primary/10 text-primary border-primary/20">
                  {story.year}
                </Badge>

                <div className="flex items-center mb-4 gap-3 justify-start md:justify-end">
                  <Image
                    src={story.logo || "/placeholder.svg"}
                    alt={story.company}
                    width={120}
                    height={60}
                    className="h-8 w-auto object-contain"
                  />
                  <span className="text-white/70">{story.company}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3">{story.title}</h3>
                <p className="text-white/70 mb-4">{story.description}</p>

                <div className={`flex flex-col gap-2 mb-6 ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                  {story.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-white/80">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="bg-white/5">
                    {story.industry}
                  </Badge>
                </div>

                <Link href={`/case-studies/${story.id}`}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                  >
                    Case Study lesen <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Bild */}
              <div className={`md:w-1/2 mt-6 md:mt-0 pl-10 md:pl-0 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-violet-600/30 rounded-xl blur-sm"></div>
                  <div className="relative overflow-hidden rounded-lg border border-white/10">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span className="text-xs text-white/80">Team-Skalierung</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-xs text-white/80">Schnelle Umsetzung</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-primary" />
                            <span className="text-xs text-white/80">Nachhaltiger Erfolg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-white/70 mb-6">
          Entdecken Sie weitere Erfolgsgeschichten und erfahren Sie, wie wir auch Ihrem Unternehmen helfen können
        </p>
        <Button className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white">
          Alle Case Studies ansehen <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
