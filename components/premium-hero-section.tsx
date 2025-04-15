"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle, Star, Shield, Users, Briefcase, Clock, Building } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import FloatingElements from "@/components/floating-elements"

export default function PremiumHeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y = useTransform(scrollY, [0, 300], [0, 100])

  useEffect(() => {
    setIsVisible(true)
    setIsMounted(true)
  }, [])

  // Services data
  const services = [
    {
      id: "contracting",
      title: "Contracting",
      description: "Flexible Personalvermittlung für zeitlich begrenzte Projekte und spezielle Anforderungen",
      icon: <Clock className="h-6 w-6 text-primary" />,
      link: "/services/contracting",
    },
    {
      id: "permanent",
      title: "Festanstellung",
      description: "Langfristige Personalvermittlung von Fach- und Führungskräften für Ihr Unternehmen",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      link: "/services/permanent",
    },
    {
      id: "enterprise",
      title: "Enterprise Teams",
      description: "Maßgeschneiderte Teams mit definierten Fähigkeiten für komplexe Unternehmensanforderungen",
      icon: <Building className="h-6 w-6 text-primary" />,
      link: "/services/enterprise",
    },
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-32 overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-background opacity-90" />

        {/* Subtle animated particles - Only render on client side */}
        {isMounted && (
          <FloatingElements 
            count={20}
            minSize={50}
            maxSize={250}
            blur={40}
            opacity={0.15}
            speed={0.5}
          />
        )}

        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-background to-transparent" />

        {/* Subtle mesh pattern for texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzZjNmNmEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          style={{ opacity, y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Premium badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block mb-6"
          >
            <Badge
              variant="gradient"
              className="px-6 py-2 text-sm font-medium shadow-lg shadow-primary/20 border border-white/10 backdrop-blur-sm"
            >
              Premium Recruiting-Lösungen
            </Badge>
          </motion.div>

          {/* Main headline with gradient text */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ihr Partner für{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent animate-text-gradient-shift">
              exzellentes Recruiting
            </span>
          </motion.h1>

          {/* Subheadline with premium styling */}
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Wir verbinden Unternehmen mit den besten Talenten und Experten. Maßgeschneiderte Lösungen für Ihren Erfolg.
          </motion.p>

          {/* CTA buttons with premium styling */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/kontakt">
              <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-6 text-lg shadow-lg shadow-primary/20 group">
                Beratungsgespräch vereinbaren
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/ueber-uns">
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white px-8 py-6 text-lg">
                Mehr erfahren
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <CheckCircle className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-white/80">100% Erfolgsbasiert</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <Shield className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-white/80">Nachbesetzungsgarantie</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <Users className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm text-white/80">500+ erfolgreiche Vermittlungen</span>
            </div>
          </motion.div>

          {/* Client testimonial for trust building */}
          <motion.div
            className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 max-w-2xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-violet-600/10 rounded-full blur-xl"></div>

            <div className="flex items-center mb-4 justify-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-sm text-white/60">4.9/5 basierend auf 127 Bewertungen</span>
            </div>

            <p className="text-white/80 italic mb-4 text-center">
              "GetExperts hat uns geholfen, innerhalb kürzester Zeit die perfekten Kandidaten zu finden. Die Expertise
              und der professionelle Ansatz haben uns überzeugt."
            </p>

            <div className="flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold mr-3">
                TM
              </div>
              <div>
                <p className="text-sm font-medium text-white">Thomas M.</p>
                <p className="text-xs text-white/60">CTO bei TechVision GmbH</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Section - Minimalistic and Stylish */}
        <motion.div
          className="mt-24 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Subtle background glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/0 to-violet-500/0 rounded-xl opacity-0 group-hover:opacity-100 group-hover:from-indigo-500/10 group-hover:to-violet-500/10 transition-all duration-300 blur-sm"></div>

                {/* Service content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-black/50 border border-primary/20 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-white/70 text-sm mb-6 h-16">{service.description}</p>

                  <Link href={service.link} className="inline-flex items-center text-primary text-sm group/link">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
      >
        <span className="text-white/60 text-sm font-light mb-3 tracking-wide">Mehr entdecken</span>
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
