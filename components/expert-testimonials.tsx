"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react"

export default function ExpertTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Markus Schneider",
      position: "Senior Frontend Developer",
      company: "TechVision GmbH",
      image: "/placeholder.svg?height=120&width=120&text=MS",
      quote:
        "Durch GetExperts habe ich meinen Traumjob gefunden. Der gesamte Prozess war transparent und persönlich. Julian hat genau verstanden, wonach ich suche und mich perfekt beraten. Nach nur drei Wochen hatte ich mehrere passende Angebote zur Auswahl.",
      rating: 5,
      placed: "Vermittelt in 3 Wochen",
    },
    {
      id: 2,
      name: "Sarah Weber",
      position: "Product Manager",
      company: "InnovateTech AG",
      image: "/placeholder.svg?height=120&width=120&text=SW",
      quote:
        "Was GetExperts von anderen Recruitern unterscheidet, ist das tiefe Verständnis für meine Karriereziele. Keine standardisierten Angebote, sondern echte Beratung auf Augenhöhe. Meine Beraterin hat mich durch den gesamten Prozess begleitet und stand mir jederzeit für Fragen zur Verfügung.",
      rating: 5,
      placed: "Vermittelt in 4 Wochen",
    },
    {
      id: 3,
      name: "Daniel Hoffmann",
      position: "DevOps Engineer",
      company: "CloudSolutions GmbH",
      image: "/placeholder.svg?height=120&width=120&text=DH",
      quote:
        "Nach mehreren enttäuschenden Erfahrungen mit Recruitern war GetExperts eine positive Überraschung. Ehrliche Kommunikation und ein Recruiter, der wirklich zuhört. Besonders beeindruckt hat mich die Geschwindigkeit – innerhalb von zwei Wochen hatte ich ein perfektes Angebot auf dem Tisch.",
      rating: 5,
      placed: "Vermittelt in 2 Wochen",
    },
  ]

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextTestimonial()
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [isHovered, activeIndex])

  const nextTestimonial = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div
      className="relative"
      ref={testimonialsRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-white to-violet-50/40 z-0"></div>

          <div className="relative z-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3"
              >
                {/* Left column - Image and info */}
                <div className="bg-gradient-to-br from-indigo-500 to-violet-600 p-10 flex flex-col justify-center items-center text-white relative overflow-hidden">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/10 to-transparent"></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: "radial-gradient(circle at 25px 25px, white 2%, transparent 0%)",
                        backgroundSize: "50px 50px",
                      }}
                    ></div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-white/20 p-1.5 mb-6 shadow-xl">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={testimonials[activeIndex].image || "/placeholder.svg"}
                          alt={testimonials[activeIndex].name}
                          width={128}
                          height={128}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-1">{testimonials[activeIndex].name}</h3>
                    <p className="text-white/90 text-center mb-2 font-medium">{testimonials[activeIndex].position}</p>
                    <p className="text-white/80 text-sm text-center">{testimonials[activeIndex].company}</p>

                    <div className="mt-8 pt-8 border-t border-white/20 w-full">
                      <p className="text-white/90 text-sm text-center font-medium">
                        {testimonials[activeIndex].placed}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right column - Testimonial */}
                <div className="md:col-span-2 p-10 md:p-16 flex flex-col justify-center relative">
                  {/* Subtle quote marks */}
                  <Quote className="absolute top-6 left-6 h-20 w-20 text-indigo-100/50 -z-0" />

                  <div className="relative z-10">
                    <div className="flex mb-6">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                      <p>{testimonials[activeIndex].quote}</p>
                    </blockquote>

                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-gray-500 text-sm">
                        {activeIndex + 1} von {testimonials.length}
                      </p>

                      <div className="flex space-x-4">
                        <button
                          onClick={prevTestimonial}
                          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:border-indigo-600 transition-colors"
                          aria-label="Vorheriges Testimonial"
                        >
                          <ArrowLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={nextTestimonial}
                          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:border-indigo-600 transition-colors"
                          aria-label="Nächstes Testimonial"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -z-10 top-1/3 -left-20 w-80 h-80 bg-indigo-100/50 rounded-full opacity-60 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute -z-10 bottom-1/3 -right-20 w-80 h-80 bg-violet-100/50 rounded-full opacity-60 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          delay: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}
