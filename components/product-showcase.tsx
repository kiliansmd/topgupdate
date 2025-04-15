"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Briefcase, Users, Zap, TrendingUp, CheckCircle, Shield, Lock, FileCheck } from "lucide-react"

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("permanent")

  return (
    <section className="py-20 relative overflow-hidden bg-[#0d0d14]">
      {/* Hintergrund-Elemente für mehr visuelle Tiefe */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-900/20 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-600/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-6 py-2 mb-6 rounded-full bg-[#1e1a3a] border border-white/10 text-white text-sm font-medium"
          >
            <div className="flex items-center space-x-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span>100% Erfolgsbasiert</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center"
          >
            Premium{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
              Recruiting
            </span>{" "}
            neu definiert
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-white/80 max-w-3xl text-center leading-relaxed"
          >
            Unser innovatives Erfolgsmodell garantiert Ihnen maximale Effizienz und Qualität. Zahlen Sie nur bei
            erfolgreicher Vermittlung und profitieren Sie von unserem Expertennetzwerk und maßgeschneiderten Lösungen
            für Ihr Unternehmen.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation - Moderneres Design */}
          <div className="flex justify-center mb-12">
            <div className="p-1 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("permanent")}
                  className={`relative px-8 py-4 rounded-lg transition-all duration-300 ${
                    activeTab === "permanent" ? "text-white" : "text-white/60 hover:text-white/80"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Briefcase
                      className={`h-5 w-5 mr-2 ${activeTab === "permanent" ? "text-white" : "text-white/60"}`}
                    />
                    Festanstellung
                  </span>
                  {activeTab === "permanent" && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("freelance")}
                  className={`relative px-8 py-4 rounded-lg transition-all duration-300 ${
                    activeTab === "freelance" ? "text-white" : "text-white/60 hover:text-white/80"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Zap
                      className={`h-5 w-5 mr-2 ${activeTab === "freelance" ? "text-yellow-400" : "text-yellow-400/60"}`}
                    />
                    Freelancer
                  </span>
                  {activeTab === "freelance" && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Permanent Employment Content */}
          {activeTab === "permanent" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-4">Festanstellung ohne Risiko</h3>
                <p className="text-white/70 mb-6">
                  Unser erfolgsbasiertes Modell für Festanstellungen bietet Ihnen maximale Sicherheit. Sie zahlen nur,
                  wenn wir den perfekten Kandidaten für Sie gefunden haben.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Zahlung nur bei erfolgreicher Vermittlung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Umfassende Kandidatenprüfung und -qualifizierung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Garantierte Nachbesetzung bei vorzeitigem Ausscheiden</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Transparente Preisgestaltung ohne versteckte Kosten</span>
                  </li>
                </ul>

                <Button className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white px-6 py-2">
                  Unverbindlich anfragen
                </Button>

                {/* Trust indicators */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-green-400 mr-1.5" />
                      <span className="text-xs text-white/60">Sichere Vermittlung</span>
                    </div>
                    <div className="flex items-center">
                      <FileCheck className="h-4 w-4 text-green-400 mr-1.5" />
                      <span className="text-xs text-white/60">Geprüfte Kandidaten</span>
                    </div>
                    <div className="flex items-center">
                      <Lock className="h-4 w-4 text-green-400 mr-1.5" />
                      <span className="text-xs text-white/60">Vertrauliche Daten</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-[#0f0f1a] border border-primary/10 rounded-lg p-6 overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                    Premium
                  </div>

                  <h4 className="text-xl font-bold mb-8 mt-6">Unser Erfolgsmodell</h4>

                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Passende Kandidaten</h5>
                        <p className="text-sm text-white/70">
                          Wir finden die besten Talente, die perfekt zu Ihren Anforderungen passen.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center mr-4">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Schnelle Vermittlung</h5>
                        <p className="text-sm text-white/70">
                          Unsere effizienten Prozesse verkürzen die Zeit bis zur Besetzung erheblich.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center mr-4">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Langfristiger Erfolg</h5>
                        <p className="text-sm text-white/70">
                          Wir stellen sicher, dass die Kandidaten langfristig in Ihrem Unternehmen bleiben.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Freelancer Content */}
          {activeTab === "freelance" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-4">Flexible Freelancer-Vermittlung</h3>
                <p className="text-white/70 mb-6">
                  Finden Sie hochqualifizierte Freelancer für Ihre Projekte – schnell, unkompliziert und mit unserem
                  erfolgsbasierten Vergütungsmodell.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Zugang zu einem Netzwerk von Top-Freelancern</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Schnelle Verfügbarkeit für zeitkritische Projekte</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Flexible Vertragslaufzeiten nach Ihren Bedürfnissen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Qualitätssicherung durch regelmäßiges Feedback</span>
                  </li>
                </ul>

                <Button className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white px-6 py-2">
                  Freelancer finden
                </Button>

                {/* Trust indicators */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-green-400 mr-1.5" />
                      <span className="text-xs text-white/60">Sichere Zahlungsabwicklung</span>
                    </div>
                    <div className="flex items-center">
                      <FileCheck className="h-4 w-4 text-green-400 mr-1.5" />
                      <span className="text-xs text-white/60">Verifizierte Freelancer</span>
                    </div>
                    <div className="flex items-center">
                      <Lock className="h-4 w-4 text-green-400 mr-1.5" />
                      <span className="text-xs text-white/60">NDA-geschützt</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-[#0f0f1a] border border-primary/10 rounded-lg p-6 overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                    Flexibel
                  </div>

                  <h4 className="text-xl font-bold mb-8 mt-6">Freelancer-Vorteile</h4>

                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Spezialisierte Expertise</h5>
                        <p className="text-sm text-white/70">
                          Zugang zu hochspezialisierten Fachkräften für Ihre spezifischen Projektanforderungen.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center mr-4">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Zeitliche Flexibilität</h5>
                        <p className="text-sm text-white/70">
                          Skalieren Sie Ihr Team nach Bedarf hoch oder runter, je nach Projektphase.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center mr-4">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1">Kosteneffizienz</h5>
                        <p className="text-sm text-white/70">
                          Reduzieren Sie Fixkosten und zahlen Sie nur für die tatsächlich benötigte Arbeitszeit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
