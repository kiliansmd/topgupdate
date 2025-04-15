"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Calendar, Shield, Users, Award } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function FinalCTA() {
  const [hovered, setHovered] = useState(false)

  return (
    <section className="py-24 relative bg-gradient-to-b from-[#0a0a14] to-[#12121e]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="bg-[#12121c] border border-white/10 rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Linke Spalte: Hauptinhalt */}
            <div className="p-8 md:p-12 lg:p-16">
              <div className="inline-flex items-center bg-[#6246ea]/10 text-[#6246ea] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Unverbindlich & kostenlos
              </div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                initial={{ opacity: 0.9 }}
                animate={{ opacity: hovered ? 1 : 0.9 }}
                transition={{ duration: 0.3 }}
              >
                Ihr kostenfreies <span className="text-[#6246ea]">Strategiegespräch</span>
              </motion.h2>

              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Lassen Sie uns in einem persönlichen Gespräch Ihre Recruiting-Herausforderungen analysieren und
                maßgeschneiderte Lösungsansätze entwickeln – ohne Verpflichtung und Kosten.
              </p>

              {/* Vertrauenselemente */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#6246ea]/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-[#6246ea]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Individuelle Bedarfsanalyse</h4>
                    <p className="text-white/70">Wir analysieren Ihre spezifischen Recruiting-Anforderungen</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#6246ea]/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-[#6246ea]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Konkrete Handlungsempfehlungen</h4>
                    <p className="text-white/70">Sie erhalten sofort umsetzbare Lösungsansätze</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#6246ea]/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-[#6246ea]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Keine versteckten Kosten</h4>
                    <p className="text-white/70">Das Gespräch ist vollständig kostenfrei und unverbindlich</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/kontakt">
                  <Button className="bg-[#6246ea] hover:bg-[#5438d5] text-white px-8 py-6 text-base font-medium rounded-md shadow-md transition-all w-full sm:w-auto">
                    Termin vereinbaren <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/ueber-uns">
                  <Button variant="outline" className="border-white/20 hover:bg-white/5 px-8 py-6 text-base">
                    Mehr über uns
                  </Button>
                </Link>
              </div>

              {/* Vertrauensindikatoren */}
              <div className="flex flex-wrap gap-6 items-center pt-6 border-t border-white/10">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-[#6246ea] mr-2" />
                  <span className="text-sm text-white/70">
                    <span className="font-medium text-white">500+</span> erfolgreiche Vermittlungen
                  </span>
                </div>

                <div className="flex items-center">
                  <Award className="h-5 w-5 text-[#6246ea] mr-2" />
                  <span className="text-sm text-white/70">
                    <span className="font-medium text-white">Top Recruiter</span> 2024
                  </span>
                </div>

                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-[#6246ea] mr-2" />
                  <span className="text-sm text-white/70">
                    <span className="font-medium text-white">100%</span> Zufriedenheitsgarantie
                  </span>
                </div>
              </div>
            </div>

            {/* Rechte Spalte: Formular und Testimonial */}
            <div
              className="bg-[#0f0f1a] p-8 md:p-12 lg:p-16 relative"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-600"></div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Ihr persönlicher Ansprechpartner</h3>

                <div className="flex items-center mb-6">
                  <div className="relative mr-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#6246ea]/30">
                      <Image
                        src="/placeholder.svg?height=80&width=80&text=Expert"
                        alt="Recruiting Expert"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0f0f1a]"></div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white">Daniela Sentesch</h4>
                    <p className="text-white/70">Senior Recruiting Consultant</p>
                  </div>
                </div>

                <p className="text-white/80 mb-6">
                  "Ich freue mich darauf, Ihre Recruiting-Herausforderungen kennenzulernen und gemeinsam mit Ihnen
                  maßgeschneiderte Lösungen zu entwickeln."
                </p>
              </div>

              <div className="bg-[#161625] border border-white/10 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 text-[#6246ea] mr-2" />
                  So funktioniert es
                </h4>

                <ol className="space-y-4">
                  <li className="flex">
                    <span className="bg-[#6246ea]/10 text-[#6246ea] w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </span>
                    <p className="text-white/80">Termin vereinbaren (30 Min.)</p>
                  </li>
                  <li className="flex">
                    <span className="bg-[#6246ea]/10 text-[#6246ea] w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </span>
                    <p className="text-white/80">Bedarfsanalyse & Lösungsansätze</p>
                  </li>
                  <li className="flex">
                    <span className="bg-[#6246ea]/10 text-[#6246ea] w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </span>
                    <p className="text-white/80">Konkrete Handlungsempfehlungen</p>
                  </li>
                </ol>
              </div>

              {/* Testimonial */}
              <div className="bg-[#161625] border border-white/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-4 w-4 text-[#fbbf24] fill-[#fbbf24]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                          fill="currentColor"
                        />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-white/80 italic mb-4">
                  "Das Strategiegespräch hat uns wertvolle Einblicke gegeben. Die Expertise und der professionelle
                  Ansatz haben uns überzeugt, mit GetExperts zusammenzuarbeiten."
                </p>

                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#6246ea]/20 flex items-center justify-center text-[#6246ea] font-bold mr-3">
                    TM
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Thomas M.</p>
                    <p className="text-xs text-white/60">CTO bei TechVision GmbH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
