"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, Clock, Quote, CheckCircle, Building, Code } from "lucide-react"
import Link from "next/link"

export default function SuccessStory() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Hintergrund */}
      <div className="absolute inset-0 bg-[#0d0d14]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center px-6 py-2 mb-4 rounded-full bg-[#1e1a3a] border border-white/10 text-white text-sm font-medium">
              Erfolgsgeschichte
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wie wir <span className="text-primary">CloudTech Solutions</span> zum Erfolg verhalfen
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Eine Case Study über erfolgreiche Teamexpansion in einer kritischen Wachstumsphase
            </p>
          </motion.div>
        </div>

        {/* Hauptinhalt - Neu strukturiert */}
        <div className="max-w-5xl mx-auto">
          {/* Oberer Bereich mit Bild und Unternehmensinformationen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 relative"
          >
            <div className="rounded-xl overflow-hidden border border-white/10">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/placeholder.svg?height=600&width=1200&text=CloudTech"
                  alt="CloudTech Solutions Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Unternehmensinformationen */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-2 mr-3">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">CloudTech Solutions GmbH</h3>
                          <p className="text-sm text-white/70">Software & Cloud Services</p>
                        </div>
                      </div>
                      <p className="text-white/80 max-w-xl">
                        CloudTech Solutions befand sich in einer kritischen Wachstumsphase und musste innerhalb kurzer
                        Zeit ein komplettes Entwicklungsteam aufbauen.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        <Code className="h-3.5 w-3.5 mr-1" /> Tech-Recruiting
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Herausforderung und Lösung */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mr-3">
                  <TrendingUp className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-xl font-bold">Die Herausforderung</h3>
              </div>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500/70 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Kritische Wachstumsphase mit engem Zeitplan für Produktlaunch</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500/70 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Bedarf an hochqualifizierten Entwicklern in einem umkämpften Markt</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500/70 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Bisherige Recruiting-Prozesse zu langsam und ineffizient</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Unsere Lösung</h3>
              </div>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary/70 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Maßgeschneiderte Recruiting-Strategie mit Active Sourcing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary/70 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Spezialisiertes Screening-Verfahren für Tech-Positionen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary/70 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Beschleunigte Interview-Phase mit optimiertem Feedback-Prozess</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Ergebnisse - Neu gestaltet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-indigo-900/10 to-violet-900/10 rounded-xl border border-primary/20 overflow-hidden">
              <div className="p-1">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-6 text-center">Messbare Ergebnisse</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-black/30 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-primary mb-2">12</div>
                      <div className="text-white/80 text-sm">Entwickler in nur 8 Wochen eingestellt</div>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-primary mb-2">40%</div>
                      <div className="text-white/80 text-sm">Reduzierung der Time-to-Hire</div>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-primary mb-2">95%</div>
                      <div className="text-white/80 text-sm">Verbleibrate nach 12 Monaten</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-center">
                    <div className="flex items-center bg-black/30 rounded-full px-4 py-1.5">
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm text-white/70">Projektdauer: 8 Wochen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial - Neu gestaltet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 relative">
              <div className="absolute -top-3 -left-3 text-primary/10">
                <Quote size={40} />
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/4 flex justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20">
                      <Image
                        src="/placeholder.svg?height=80&width=80&text=MB"
                        alt="Dr. Michael Berger"
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="md:w-3/4">
                  <p className="text-white/80 italic mb-4">
                    "GetExperts hat uns in einer kritischen Phase unseres Unternehmens entscheidend unterstützt. Die
                    Qualität der Kandidaten und die Geschwindigkeit der Vermittlung haben alle unsere Erwartungen
                    übertroffen. Besonders beeindruckt hat uns das tiefe Verständnis für unsere technischen
                    Anforderungen und Unternehmenskultur."
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-white">Dr. Michael Berger</p>
                      <p className="text-sm text-white/60">CTO, CloudTech Solutions GmbH</p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="h-4 w-4 text-yellow-400 fill-yellow-400"
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
                      <span className="text-xs text-white/60">Verifiziertes Feedback</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA - Neu gestaltet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center"
          >
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Auch Ihr Unternehmen kann von unserer Expertise profitieren</h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Erfahren Sie, wie wir auch Ihnen helfen können, die richtigen Talente für Ihr Wachstum zu finden.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/kontakt">
                  <Button className="bg-primary hover:bg-primary/90">
                    Beratungsgespräch vereinbaren <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button variant="outline" className="border-white/20 hover:bg-white/5">
                    Weitere Erfolgsgeschichten
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
