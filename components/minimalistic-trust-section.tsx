"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Award, CheckCircle, Lock } from "lucide-react"
import Image from "next/image"

export default function MinimalisticTrustSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Trust-Elemente mit Icons und kurzen Beschreibungen
  const trustElements = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "DSGVO-konform",
      description: "Höchste Datenschutzstandards für Ihre Sicherheit",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Top Recruiter 2024",
      description: "Ausgezeichnet für exzellente Recruiting-Qualität",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "ISO 27001",
      description: "Zertifizierte Informationssicherheit",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Sichere Prozesse",
      description: "Verschlüsselte Kommunikation & Datenübertragung",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Subtiler Hintergrund */}
      <div className="absolute inset-0 bg-[#0d0d14]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-transparent"></div>

      {/* Dezente Linien für visuellen Rahmen */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Minimalistischer Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center px-6 py-2 mb-4 rounded-full bg-[#1e1a3a] border border-white/10 text-white text-sm font-medium"
            >
              Vertrauen & Sicherheit
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold mb-4"
            >
              Ihr Vertrauen ist unser <span className="text-primary">Fundament</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-px w-24 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 mx-auto mt-4 mb-6"
            />
          </div>

          {/* Trust-Elemente in einer eleganten Grid-Anordnung */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {trustElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 flex items-center justify-center mb-4">
                  <div className="text-primary">{element.icon}</div>
                </div>
                <h3 className="text-lg font-medium mb-2">{element.title}</h3>
                <p className="text-white/60 text-sm">{element.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Testimonial - minimalistisch und elegant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-black/20 border border-white/10 rounded-lg p-8 mb-16 relative overflow-hidden"
          >
            {/* Subtile Akzente */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="absolute -top-20 right-20 w-40 h-40 bg-primary/5 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 left-20 w-40 h-40 bg-violet-600/5 rounded-full filter blur-3xl"></div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-full blur-sm"></div>
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/10">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=CEO"
                      alt="CEO Testimonial"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-3/4 text-center md:text-left">
                <p className="text-lg text-white/80 italic mb-4">
                  "GetExperts hat uns nicht nur bei der Besetzung kritischer Positionen unterstützt, sondern ist zu
                  einem strategischen Partner für unser Wachstum geworden."
                </p>
                <p className="text-sm text-white/60">
                  <span className="font-medium text-white">Dr. Michael Berger</span> — CTO, TechVision GmbH
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hier wurden die Zertifizierungslogos entfernt */}
        </div>
      </div>
    </section>
  )
}
