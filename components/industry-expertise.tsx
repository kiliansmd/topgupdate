"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Briefcase,
  Award,
  Code,
  LineChart,
  Stethoscope,
  Building,
  ShoppingBag,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

// Branchen-Daten
const industries = [
  {
    id: "tech",
    name: "IT & Technologie",
    icon: <Code className="h-6 w-6" />,
    description: "Spezialisierte Vermittlung von IT-Fachkräften und Entwicklern für Tech-Unternehmen aller Größen.",
    expertise: [
      "Software-Entwickler (Frontend, Backend, Full-Stack)",
      "DevOps & Cloud-Spezialisten",
      "IT-Projektmanager & Scrum Master",
      "Data Scientists & KI-Experten",
    ],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "finance",
    name: "Finance & Banking",
    icon: <LineChart className="h-6 w-6" />,
    description: "Vermittlung von Finanzexperten für Banken, FinTechs und Finanzabteilungen.",
    expertise: [
      "CFOs & Finance Directors",
      "Controller & Buchhalter",
      "Financial Analysts",
      "Compliance & Risk Manager",
    ],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-emerald-500 to-green-400",
  },
  {
    id: "healthcare",
    name: "Healthcare & Pharma",
    icon: <Stethoscope className="h-6 w-6" />,
    description: "Rekrutierung von medizinischen Fachkräften und Spezialisten für den Gesundheitssektor.",
    expertise: [
      "Ärzte & medizinisches Fachpersonal",
      "Pharmareferenten",
      "Regulatory Affairs Manager",
      "Medizintechniker",
    ],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-red-500 to-pink-400",
  },
  {
    id: "manufacturing",
    name: "Produktion & Industrie",
    icon: <Building className="h-6 w-6" />,
    description: "Vermittlung von Ingenieuren und Fachkräften für produzierende Unternehmen.",
    expertise: [
      "Ingenieure (Maschinenbau, Elektrotechnik)",
      "Produktionsleiter",
      "Qualitätsmanager",
      "Supply Chain Manager",
    ],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-amber-500 to-yellow-400",
  },
  {
    id: "retail",
    name: "Handel & E-Commerce",
    icon: <ShoppingBag className="h-6 w-6" />,
    description: "Recruiting für den modernen Handel und E-Commerce-Unternehmen.",
    expertise: [
      "E-Commerce Manager",
      "Category Manager",
      "Online Marketing Spezialisten",
      "Logistik & Fulfillment Experten",
    ],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-purple-500 to-violet-400",
  },
  {
    id: "creative",
    name: "Kreativ & Marketing",
    icon: <Lightbulb className="h-6 w-6" />,
    description: "Vermittlung von kreativen Köpfen und Marketing-Experten.",
    expertise: ["Marketing Manager & CMOs", "UX/UI Designer", "Content Creator & Texter", "Brand Manager"],
    image: "/placeholder.svg?height=400&width=600",
    color: "from-orange-500 to-red-400",
  },
]

export default function IndustryExpertise() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0])
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null)

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Branchen-Expertise</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Spezialisierte Recruiting-Lösungen für{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
            jede Branche
          </span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Unsere Recruiter sind Experten in ihren jeweiligen Fachbereichen und verstehen die spezifischen Anforderungen
          und Herausforderungen verschiedener Branchen
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Linke Spalte: Branchen-Navigation */}
        <div className="space-y-3">
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              className={`p-4 rounded-lg cursor-pointer transition-all ${
                activeIndustry.id === industry.id
                  ? "bg-gradient-to-r from-indigo-500/20 to-violet-600/20 border border-primary/30"
                  : "bg-card/50 border border-white/10 hover:border-primary/20 hover:bg-primary/5"
              }`}
              onClick={() => setActiveIndustry(industry)}
              onMouseEnter={() => setHoveredIndustry(industry.id)}
              onMouseLeave={() => setHoveredIndustry(null)}
              whileHover={{ x: 5 }}
              animate={hoveredIndustry === industry.id && activeIndustry.id !== industry.id ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    activeIndustry.id === industry.id
                      ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {industry.icon}
                </div>
                <div>
                  <h3 className={`font-medium ${activeIndustry.id === industry.id ? "text-white" : "text-white/80"}`}>
                    {industry.name}
                  </h3>
                </div>
                {activeIndustry.id === industry.id && <ArrowRight className="ml-auto h-4 w-4 text-primary" />}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rechte Spalte: Branchen-Details */}
        <div className="lg:col-span-2">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-6 h-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Linke Seite: Informationen */}
              <div>
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${activeIndustry.color} flex items-center justify-center mr-4`}
                  >
                    {activeIndustry.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{activeIndustry.name}</h3>
                </div>

                <p className="text-white/70 mb-6">{activeIndustry.description}</p>

                <div className="mb-6">
                  <h4 className="font-medium mb-3">Unsere Expertise:</h4>
                  <ul className="space-y-2">
                    {activeIndustry.expertise.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center bg-white/5 rounded-full px-3 py-1">
                    <Users className="h-4 w-4 text-primary mr-2" />
                    <span className="text-xs text-white/70">Spezialisierte Recruiter</span>
                  </div>
                  <div className="flex items-center bg-white/5 rounded-full px-3 py-1">
                    <Briefcase className="h-4 w-4 text-primary mr-2" />
                    <span className="text-xs text-white/70">Branchenspezifische Netzwerke</span>
                  </div>
                  <div className="flex items-center bg-white/5 rounded-full px-3 py-1">
                    <Award className="h-4 w-4 text-primary mr-2" />
                    <span className="text-xs text-white/70">Erfolgsbasierte Vergütung</span>
                  </div>
                </div>

                <Link href={`/branchen/${activeIndustry.id}`}>
                  <Button className="bg-primary hover:bg-primary/90">
                    Mehr über {activeIndustry.name} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Rechte Seite: Bild */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-violet-600/30 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative overflow-hidden rounded-lg border border-white/10">
                  <Image
                    src={activeIndustry.image || "/placeholder.svg"}
                    alt={activeIndustry.name}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium">
                      Erfahren Sie mehr über unsere Expertise im Bereich {activeIndustry.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
