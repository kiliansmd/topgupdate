"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Code, LineChart, Briefcase, Lightbulb, Building, ShoppingBag, X, ArrowRight, CheckCircle } from "lucide-react"

export default function SpecializationGrid() {
  const [activeSpecialization, setActiveSpecialization] = useState<number | null>(null)

  // Daten für die Spezialisierungen
  const specializations = [
    {
      id: 1,
      title: "IT & Technologie",
      icon: <Code className="h-8 w-8 text-primary" />,
      shortDesc: "Spezialisierte Vermittlung von IT-Fachkräften und Entwicklern",
      fullDesc:
        "Unsere IT-Recruiting-Experten verstehen die technischen Anforderungen und die Kultur von Tech-Unternehmen. Wir vermitteln Entwickler, DevOps-Spezialisten, IT-Projektmanager und Data Scientists mit den passenden Skills und Soft Skills.",
      positions: [
        "Frontend-Entwickler",
        "Backend-Entwickler",
        "DevOps-Ingenieure",
        "Data Scientists",
        "IT-Projektmanager",
      ],
      color: "from-blue-500/20 to-cyan-400/20",
      borderColor: "border-blue-500/30",
      gradient: "bg-gradient-to-br from-blue-700 via-indigo-800 to-violet-900",
      pattern: "radial"
    },
    {
      id: 2,
      title: "Finance & Banking",
      icon: <LineChart className="h-8 w-8 text-primary" />,
      shortDesc: "Vermittlung von Finanzexperten für Banken und FinTechs",
      fullDesc:
        "Unser Finance-Team hat umfangreiche Erfahrung in der Vermittlung von Finanzexperten für traditionelle Banken, FinTechs und Finanzabteilungen. Wir kennen die regulatorischen Anforderungen und finden die passenden Kandidaten.",
      positions: ["CFOs & Finance Directors", "Controller", "Financial Analysts", "Compliance & Risk Manager"],
      color: "from-emerald-500/20 to-green-400/20",
      borderColor: "border-emerald-500/30",
      gradient: "bg-gradient-to-br from-indigo-700 via-violet-800 to-purple-900",
      pattern: "linear"
    },
    {
      id: 3,
      title: "Marketing & Sales",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      shortDesc: "Kreative Köpfe und Vertriebstalente für Ihren Erfolg",
      fullDesc:
        "Unser Marketing- und Sales-Team findet die Talente, die Ihr Unternehmen voranbringen. Von digitalen Marketing-Experten bis hin zu erfahrenen Vertriebsleitern - wir verstehen die Anforderungen moderner Marketing- und Vertriebsabteilungen.",
      positions: ["Marketing Manager", "SEO-Spezialisten", "Content Manager", "Sales Manager", "Account Manager"],
      color: "from-orange-500/20 to-red-400/20",
      borderColor: "border-orange-500/30",
      gradient: "bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900",
      pattern: "dots"
    },
    {
      id: 4,
      title: "Produktion & Industrie",
      icon: <Building className="h-8 w-8 text-primary" />,
      shortDesc: "Ingenieure und Fachkräfte für produzierende Unternehmen",
      fullDesc:
        "Für produzierende Unternehmen und die Industrie vermitteln wir qualifizierte Ingenieure und Fachkräfte. Wir verstehen die technischen Anforderungen und finden Kandidaten mit der richtigen Kombination aus Fachwissen und Praxiserfahrung.",
      positions: [
        "Ingenieure (Maschinenbau, Elektrotechnik)",
        "Produktionsleiter",
        "Qualitätsmanager",
        "Supply Chain Manager",
      ],
      color: "from-amber-500/20 to-yellow-400/20",
      borderColor: "border-amber-500/30",
      gradient: "bg-gradient-to-br from-blue-800 via-indigo-900 to-violet-800",
      pattern: "grid"
    },
    {
      id: 5,
      title: "Healthcare & Pharma",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      shortDesc: "Medizinische Fachkräfte und Spezialisten für den Gesundheitssektor",
      fullDesc:
        "Unser Healthcare-Team hat umfangreiche Erfahrung in der Vermittlung von medizinischen Fachkräften und Spezialisten für Krankenhäuser, Pharmaunternehmen und Gesundheitsdienstleister. Wir kennen die besonderen Anforderungen dieser Branche.",
      positions: [
        "Ärzte & medizinisches Fachpersonal",
        "Pharmareferenten",
        "Regulatory Affairs Manager",
        "Medizintechniker",
      ],
      color: "from-red-500/20 to-pink-400/20",
      borderColor: "border-red-500/30",
      gradient: "bg-gradient-to-br from-indigo-800 via-blue-900 to-violet-900",
      pattern: "diagonal"
    },
    {
      id: 6,
      title: "E-Commerce & Retail",
      icon: <ShoppingBag className="h-8 w-8 text-primary" />,
      shortDesc: "Experten für den modernen Handel und E-Commerce",
      fullDesc:
        "Für den modernen Handel und E-Commerce-Unternehmen vermitteln wir Spezialisten, die die digitale Transformation vorantreiben. Von E-Commerce-Managern bis hin zu Category-Managern - wir finden die richtigen Kandidaten für Ihren Erfolg.",
      positions: [
        "E-Commerce Manager",
        "Category Manager",
        "Online Marketing Spezialisten",
        "Logistik & Fulfillment Experten",
      ],
      color: "from-purple-500/20 to-violet-400/20",
      borderColor: "border-purple-500/30",
      gradient: "bg-gradient-to-br from-violet-800 via-indigo-900 to-blue-900",
      pattern: "waves"
    },
  ]

  // CSS für Schatten und Muster
  const styles = `
    .text-shadow {
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    }
    
    .pattern-dots {
      background-image: radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px);
      background-size: 20px 20px;
    }
    
    .pattern-grid {
      background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
      background-size: 20px 20px;
    }
    
    .pattern-diagonal {
      background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 7px, transparent 7px, transparent 14px);
    }
    
    .pattern-waves {
      background-image: 
        repeating-radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 5px, transparent 100px);
    }
    
    .pattern-radial {
      background-image: 
        radial-gradient(circle at 100% 100%, rgba(255, 255, 255, 0.15) 10%, transparent 50%),
        radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.1) 20%, transparent 50%);
    }
    
    .pattern-linear {
      background-image:
        linear-gradient(to right, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.05) 100%);
    }
  `;

  return (
    <section className="py-24 relative overflow-hidden bg-[#0d0d14]">
      {/* Style tag for custom CSS */}
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      {/* Subtiler Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 mb-4 rounded-full bg-[#1e1a3a] border border-white/10 text-white text-sm font-medium">
            Unsere Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Spezialisierte Recruiting-Lösungen für <span className="text-primary">jede Branche</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Unsere Recruiter sind Experten in ihren jeweiligen Fachbereichen und verstehen die spezifischen
            Anforderungen und Herausforderungen verschiedener Branchen
          </p>
        </div>

        {/* Grid mit Spezialisierungen - Minimalistischer Ansatz */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {specializations.map((spec) => (
            <div
              key={spec.id}
              className="bg-black/30 border border-white/10 hover:border-primary/30 rounded-xl overflow-hidden transition-all duration-300"
            >
              <div 
                className="p-6 h-full flex flex-col cursor-pointer"
                onClick={() => setActiveSpecialization(spec.id === activeSpecialization ? null : spec.id)}
              >
                {/* Icon und Titel */}
                <div className="mb-4 flex items-center">
                  <div className="bg-black/40 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                    {spec.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white">{spec.title}</h3>
                </div>
                
                {/* Beschreibung */}
                <p className="text-white/80 text-sm mb-5">{spec.shortDesc}</p>
                
                {/* Positionen Liste - nur die ersten 3 */}
                <div className="mt-auto">
                  <h4 className="text-xs uppercase text-white/60 mb-2">Top Positionen</h4>
                  <ul className="space-y-1">
                    {spec.positions.slice(0, 3).map((position, idx) => (
                      <li key={idx} className="text-xs text-white/80">
                        {position}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 text-primary text-sm flex items-center">
                    Mehr erfahren
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailansicht */}
        <AnimatePresence>
          {activeSpecialization !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-black/40 border border-white/10 rounded-xl p-6 relative mb-12 text-white"
            >
              <button
                onClick={() => setActiveSpecialization(null)}
                className="absolute top-4 right-4 bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors"
                aria-label="Schließen"
              >
                <X className="h-5 w-5 text-white/70" />
              </button>

              {specializations
                .filter((spec) => spec.id === activeSpecialization)
                .map((spec) => (
                  <div key={spec.id} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-black/40 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                          {spec.icon}
                        </div>
                        <h3 className="text-xl font-medium text-white">{spec.title}</h3>
                      </div>

                      <p className="text-white/80 mb-6">{spec.fullDesc}</p>

                      <div>
                        <h4 className="text-sm uppercase text-white/60 mb-3">Unsere Expertise umfasst</h4>
                        <ul className="space-y-2">
                          {spec.positions.map((position, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-white/90 text-sm">{position}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-black/30 border border-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-medium text-white mb-4">Unsere Expertise im Bereich {spec.title}</h4>

                      <div className="space-y-4">
                        <div className="bg-black/20 rounded-lg p-4">
                          <h5 className="font-medium mb-2 text-primary">Branchenkenntnis</h5>
                          <p className="text-sm text-white/80">
                            Unsere Recruiter haben selbst Erfahrung in der Branche und verstehen die fachlichen
                            Anforderungen im Detail.
                          </p>
                        </div>

                        <div className="bg-black/20 rounded-lg p-4">
                          <h5 className="font-medium mb-2 text-primary">Spezialisiertes Netzwerk</h5>
                          <p className="text-sm text-white/80">
                            Wir verfügen über ein umfangreiches Netzwerk an Spezialisten und passive Kandidaten in
                            diesem Bereich.
                          </p>
                        </div>

                        <div className="bg-black/20 rounded-lg p-4">
                          <h5 className="font-medium mb-2 text-primary">Maßgeschneiderte Prozesse</h5>
                          <p className="text-sm text-white/80">
                            Unsere Recruiting-Prozesse sind auf die Besonderheiten dieser Branche zugeschnitten.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call-to-Action */}
        <div className="text-center">
          <p className="text-white mb-6">
            Entdecken Sie, wie wir Ihnen bei der Besetzung von Positionen in Ihrer Branche helfen können
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Alle Branchen entdecken <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
