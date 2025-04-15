"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, CheckCircle, Award, Lock, FileCheck } from "lucide-react"

interface TrustIndicatorsProps {
  className?: string
  variant?: "compact" | "detailed" | "footer"
}

export default function TrustIndicators({ className = "", variant = "detailed" }: TrustIndicatorsProps) {
  const [activeTab, setActiveTab] = useState<string>("datenschutz")

  const trustElements = [
    {
      id: "datenschutz",
      title: "DSGVO-konform",
      icon: <Shield className="h-5 w-5" />,
      description:
        "Alle unsere Prozesse entsprechen den strengen Anforderungen der DSGVO. Ihre Daten sind bei uns sicher und werden vertraulich behandelt.",
    },
    {
      id: "iso",
      title: "ISO 27001",
      icon: <CheckCircle className="h-5 w-5" />,
      description:
        "Wir sind nach ISO 27001 für Informationssicherheit zertifiziert und garantieren höchste Standards im Umgang mit sensiblen Daten.",
    },
    {
      id: "auszeichnung",
      title: "Top Recruiter 2024",
      icon: <Award className="h-5 w-5" />,
      description:
        "Ausgezeichnet als einer der führenden Recruiting-Dienstleister in Deutschland mit besonderer Expertise in der IT-Branche.",
    },
    {
      id: "sicherheit",
      title: "Sichere Prozesse",
      icon: <Lock className="h-5 w-5" />,
      description:
        "Verschlüsselte Kommunikation und sichere Datenübertragung bei allen Recruiting-Prozessen für maximalen Schutz Ihrer Informationen.",
    },
    {
      id: "qualitaet",
      title: "TÜV-geprüft",
      icon: <FileCheck className="h-5 w-5" />,
      description:
        "Unsere Recruiting-Prozesse sind TÜV-geprüft und erfüllen höchste Qualitätsstandards für professionelle Personalvermittlung.",
    },
  ]

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
        {trustElements.map((element) => (
          <motion.div
            key={element.id}
            whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(103, 76, 255, 0.2)" }}
            className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 transition-all duration-300 hover:border-primary/30"
          >
            <span className="text-primary">{element.icon}</span>
            <span className="text-sm font-medium">{element.title}</span>
          </motion.div>
        ))}
      </div>
    )
  }

  if (variant === "footer") {
    return (
      <div className={`py-3 border-t border-border/20 bg-card/30 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {trustElements.map((element) => (
              <div key={element.id} className="flex items-center text-xs text-white/60">
                <span className="text-primary mr-1">{element.icon}</span>
                <span>{element.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`container mx-auto px-4 md:px-6 py-12 ${className}`}>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {trustElements.map((element) => (
          <motion.button
            key={element.id}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
              activeTab === element.id
                ? "bg-gradient-to-r from-indigo-500/20 to-violet-600/20 border border-primary/30 text-white"
                : "bg-black/20 text-white/70 border border-white/10 hover:bg-black/30 hover:border-white/20"
            }`}
            onClick={() => setActiveTab(element.id)}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            <span className={activeTab === element.id ? "text-primary" : "text-white/60"}>{element.icon}</span>
            <span className="text-sm font-medium">{element.title}</span>
          </motion.button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-600/5 pointer-events-none" />

        <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl p-8 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {trustElements.map(
            (element) =>
              element.id === activeTab && (
                <div key={element.id} className="flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-gradient-to-r from-indigo-500/10 to-violet-600/10 rounded-full p-6 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center text-white">
                      {element.icon}
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-3">{element.title}</h3>
                    <p className="text-white/70">{element.description}</p>
                  </div>
                </div>
              ),
          )}

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center text-xs text-white/50">
            <Shield className="h-3 w-3 mr-1 text-primary/70" />
            <span>Alle Zertifizierungen und Auszeichnungen werden regelmäßig überprüft und erneuert</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
