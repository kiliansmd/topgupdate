"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShieldCheck, Clock, Zap } from "lucide-react"

export default function FeatureHighlight() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: "Qualitätsgarantie",
      description: "Wir garantieren die Qualität unserer Vermittlungen mit einer umfassenden Nachbesetzungsgarantie.",
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Schnelle Vermittlung",
      description: "Unsere effizienten Prozesse ermöglichen eine schnelle Besetzung Ihrer offenen Positionen.",
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Maßgeschneiderte Lösungen",
      description: "Wir entwickeln individuelle Recruiting-Strategien, die perfekt zu Ihren Anforderungen passen.",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-[#0d0d14] relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6246ea]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#6246ea]/10 text-[#6246ea] border-[#6246ea]/20">Unsere Stärken</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Was uns <span className="text-[#6246ea]">auszeichnet</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Entdecken Sie, warum führende Unternehmen auf unsere Premium-Recruiting-Lösungen vertrauen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-[#12121c] border border-white/10 hover:border-[#6246ea]/30 rounded-lg p-6 transition-all duration-300 h-full group-hover:translate-y-[-3px] group-hover:shadow-lg">
                <div className="bg-[#6246ea] rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-white/70 mb-4 group-hover:text-white/90 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="flex items-center text-[#6246ea] group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-medium">Mehr erfahren</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
