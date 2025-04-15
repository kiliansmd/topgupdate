"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

export default function CandidateTestimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Testimonial-Daten von Kandidaten
  const testimonials = [
    {
      name: "Markus Schneider",
      position: "Senior Frontend Developer",
      company: "TechVision GmbH",
      image: "/placeholder.svg?height=80&width=80&text=MS",
      quote:
        "Durch GetExperts habe ich meinen Traumjob gefunden. Der gesamte Prozess war transparent und persönlich. Julian hat genau verstanden, wonach ich suche und mich perfekt beraten.",
      rating: 5,
      placed: "Vermittelt in 3 Wochen",
    },
    {
      name: "Sarah Weber",
      position: "Product Manager",
      company: "InnovateTech AG",
      image: "/placeholder.svg?height=80&width=80&text=SW",
      quote:
        "Was GetExperts von anderen Recruitern unterscheidet, ist das tiefe Verständnis für meine Karriereziele. Keine standardisierten Angebote, sondern echte Beratung auf Augenhöhe.",
      rating: 5,
      placed: "Vermittelt in 4 Wochen",
    },
    {
      name: "Daniel Hoffmann",
      position: "DevOps Engineer",
      company: "CloudSolutions GmbH",
      image: "/placeholder.svg?height=80&width=80&text=DH",
      quote:
        "Nach mehreren enttäuschenden Erfahrungen mit Recruitern war GetExperts eine positive Überraschung. Ehrliche Kommunikation und ein Recruiter, der wirklich zuhört.",
      rating: 5,
      placed: "Vermittelt in 2 Wochen",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Subtiler Hintergrund */}
      <div className="absolute inset-0 bg-[#0d0d14]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/0"></div>

      {/* Dezente Linien für visuellen Rahmen */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center px-6 py-2 mb-4 rounded-full bg-[#1e1a3a] border border-white/10 text-white text-sm font-medium">
              Kandidatenstimmen
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Was unsere <span className="text-primary">Kandidaten</span> sagen
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Erfahren Sie, wie wir Fachkräften und Experten zu ihrer idealen Position verholfen haben
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative"
            >
              {/* Subtile Akzente */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

              <div className="absolute -top-3 -left-3 text-primary/10">
                <Quote size={40} />
              </div>

              <div className="flex items-center mb-4">
                <div className="relative mr-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.position}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-white/80 text-sm italic mb-4">"{testimonial.quote}"</p>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                <span className="text-xs text-primary/80">{testimonial.placed}</span>
                <span className="text-xs text-white/60">bei {testimonial.company}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 text-sm">
            Basierend auf über <span className="text-white font-medium">250+ Bewertungen</span> unserer vermittelten
            Kandidaten
          </p>
        </motion.div>
      </div>
    </section>
  )
}
