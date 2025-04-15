"use client"

import { useState, useCallback, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Linkedin, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Optimiere die Komponente mit memo für bessere Render-Performance
export default memo(function LeadershipSpotlight() {
  // State für das aktive Team-Mitglied im Modal
  const [activeLeader, setActiveLeader] = useState<number | null>(null)

  // Optimierter Callback für bessere Performance
  const handleOpenModal = useCallback((id: number) => {
    setActiveLeader(id)
  }, [])

  const handleCloseModal = useCallback(() => {
    setActiveLeader(null)
  }, [])

  // Daten für die Führungskräfte
  const leaders = [
    {
      id: 1,
      name: "Dr. Markus Weber",
      position: "CEO & Gründer",
      initials: "MW",
      color: "from-indigo-600 to-violet-700",
      description: "15+ Jahre Erfahrung im Executive Search mit Fokus auf Tech-Führungskräfte",
      quote:
        "Unser Ziel ist es, die Personalgewinnung zu revolutionieren und Unternehmen mit den besten Talenten zu verbinden. Wir setzen auf Qualität statt Quantität und bauen langfristige Beziehungen auf.",
      linkedin: "https://linkedin.com",
      verified: true,
    },
    {
      id: 2,
      name: "Julia Schmidt",
      position: "CTO",
      initials: "JS",
      color: "from-violet-600 to-purple-700",
      description: "Expertin für KI-gestützte Matching-Algorithmen und Recruiting-Technologie",
      quote:
        "Technologie ist der Schlüssel zu effizientem Recruiting. Wir kombinieren KI-gestützte Matching-Algorithmen mit menschlicher Expertise, um die perfekte Balance zu schaffen.",
      linkedin: "https://linkedin.com",
      verified: true,
    },
    {
      id: 3,
      name: "Thomas Müller",
      position: "Head of Recruiting",
      initials: "TM",
      color: "from-blue-600 to-indigo-700",
      description: "Spezialist für Active Sourcing und datengestützte Kandidatenauswahl",
      quote:
        "Erfolgreiche Vermittlung basiert auf tiefem Verständnis der Anforderungen und einer präzisen Kandidatenauswahl. Wir finden nicht nur Fachkräfte, sondern die richtigen Persönlichkeiten.",
      linkedin: "https://linkedin.com",
      verified: true,
    },
    {
      id: 4,
      name: "Sarah Becker",
      position: "Finance Director",
      initials: "SB",
      color: "from-emerald-600 to-teal-700",
      description: "Verantwortlich für Finanzen und strategische Unternehmensplanung",
      quote:
        "Nachhaltiges Wachstum erfordert solide finanzielle Planung und strategische Weitsicht. Wir investieren in Qualität und langfristige Kundenbeziehungen.",
      linkedin: "https://linkedin.com",
      verified: true,
    },
    {
      id: 5,
      name: "Michael Schneider",
      position: "Head of Marketing",
      initials: "MS",
      color: "from-amber-600 to-orange-700",
      description: "Experte für Employer Branding und digitale Marketingstrategien",
      quote:
        "Starke Marken ziehen starke Talente an. Wir helfen Unternehmen, ihre Arbeitgebermarke zu schärfen und sich als attraktiver Arbeitgeber zu positionieren.",
      linkedin: "https://linkedin.com",
      verified: true,
    },
    {
      id: 6,
      name: "Laura Wagner",
      position: "Head of Operations",
      initials: "LW",
      color: "from-pink-600 to-rose-700",
      description: "Verantwortlich für reibungslose Prozesse und Qualitätsmanagement",
      quote:
        "Exzellente Ergebnisse erfordern exzellente Prozesse. Wir optimieren kontinuierlich unsere Abläufe, um maximale Effizienz und Qualität zu gewährleisten.",
      linkedin: "https://linkedin.com",
      verified: true,
    },
  ]

  // Optimierte Animation-Varianten für bessere Performance
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { y: -5, transition: { duration: 0.3, ease: "easeOut" } },
  }

  const visionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1, transition: { duration: 0.6, delay: 0.3 } },
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Hintergrund - Optimiert für bessere Performance */}
      <div className="absolute inset-0 bg-[#0a0a12]"></div>
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl will-change-transform"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-violet-600/5 blur-3xl will-change-transform"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 mb-4 rounded-full bg-[#1e1a3a] border border-white/10 text-white text-sm font-medium">
            Unsere Vision
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Die Köpfe hinter <span className="text-primary">GetExperts</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Lernen Sie unsere Führungskräfte kennen, die GetExperts zu einem der führenden Recruiting-Unternehmen
            gemacht haben
          </p>
        </div>

        {/* Team Grid - Optimiert für bessere Performance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              className={cn(
                "relative bg-[#12121c]/80 backdrop-blur-sm border border-white/10 rounded-xl p-6",
                "transition-colors duration-300 cursor-pointer shadow-lg shadow-black/20",
                "hover:border-primary/30 group",
              )}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px 0px" }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleOpenModal(leader.id)}
              // Optimierte Attribute für bessere Performance
              style={{ willChange: "transform, opacity" }}
            >
              {/* Subtiler Hintergrundeffekt - Optimiert */}
              <div
                className={cn(
                  "absolute -inset-0.5 bg-gradient-to-r opacity-0 blur-sm rounded-xl",
                  "group-hover:opacity-10 transition-opacity duration-300",
                  leader.color,
                )}
                aria-hidden="true"
              ></div>

              <div className="flex items-center mb-5">
                <div
                  className={cn(
                    "w-16 h-16 rounded-full bg-gradient-to-r flex items-center justify-center mr-4 shadow-lg",
                    "group-hover:shadow-xl transition-shadow duration-300",
                    leader.color,
                  )}
                >
                  <span className="text-xl font-bold text-white">{leader.initials}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-primary/80">{leader.position}</p>
                </div>
              </div>

              <p className="text-white/70 text-sm mb-5 leading-relaxed">{leader.description}</p>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                <Link
                  href={leader.linkedin}
                  onClick={(e) => e.stopPropagation()}
                  className={cn(
                    "text-primary text-sm flex items-center bg-primary/5 px-3 py-1 rounded-full",
                    "hover:bg-primary/10 transition-colors duration-200",
                  )}
                  aria-label={`LinkedIn Profil von ${leader.name}`}
                >
                  <Linkedin className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                  <span>LinkedIn</span>
                </Link>

                <span className="text-white/40 text-sm flex items-center group-hover:text-primary/80 transition-colors duration-200">
                  Details{" "}
                  <ArrowRight
                    className="h-3 w-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </span>
              </div>

              {leader.verified && (
                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-primary text-xs px-2.5 py-1 rounded-full border border-primary/20 flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-1.5" aria-hidden="true"></span>
                  <span>Verified Leader</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Modal für detaillierte Ansicht - Optimiert mit AnimatePresence */}
        <AnimatePresence>
          {activeLeader && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleCloseModal}
            >
              <motion.div
                className="bg-[#12121c] border border-white/10 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                style={{ willChange: "transform, opacity" }}
              >
                {leaders
                  .filter((l) => l.id === activeLeader)
                  .map((leader) => (
                    <div key={leader.id} className="grid grid-cols-1 md:grid-cols-2">
                      {/* Linke Seite - Bild/Gradient */}
                      <div
                        className={cn(
                          "bg-gradient-to-br p-8 flex flex-col justify-center items-center text-center text-white min-h-[300px]",
                          leader.color,
                        )}
                      >
                        <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border-2 border-white/20">
                          <span className="text-4xl font-bold">{leader.initials}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                        <p className="text-white/80 mb-4">{leader.position}</p>

                        <Link
                          href={leader.linkedin}
                          className="bg-white/20 hover:bg-white/30 transition-colors duration-200 px-4 py-2 rounded-full flex items-center text-sm"
                          aria-label={`LinkedIn Profil von ${leader.name}`}
                        >
                          <Linkedin className="h-4 w-4 mr-2" aria-hidden="true" />
                          <span>LinkedIn Profil</span>
                        </Link>
                      </div>

                      {/* Rechte Seite - Informationen */}
                      <div className="p-8">
                        <div className="mb-6 relative">
                          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" aria-hidden="true" />
                          <p className="text-white/90 italic pl-6 text-lg leading-relaxed">{leader.quote}</p>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/10">
                          <h4 className="text-lg font-bold mb-3 text-white">Expertise & Verantwortung</h4>
                          <p className="text-white/70 leading-relaxed">{leader.description}</p>
                        </div>

                        <button
                          onClick={handleCloseModal}
                          className="mt-8 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                        >
                          Zurück zur Übersicht
                        </button>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gemeinsame Vision - Optimiert für bessere Performance */}
        <motion.div
          variants={visionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px 0px" }}
          className="mt-32 mb-32 max-w-4xl mx-auto text-center relative"
          style={{ willChange: "opacity" }}
        >
          {/* Subtiler Hintergrundeffekt - Optimiert */}
          <div
            className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full filter blur-[100px] will-change-transform"
            aria-hidden="true"
          ></div>
          <div
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-violet-600/5 rounded-full filter blur-[100px] will-change-transform"
            aria-hidden="true"
          ></div>

          {/* Dekorative Elemente */}
          <div className="mb-8 relative">
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/10 rounded-full filter blur-xl will-change-transform"
              aria-hidden="true"
            ></div>
            <Quote className="h-14 w-14 text-primary/30 mx-auto relative" aria-hidden="true" />
          </div>

          <motion.h3
            variants={textVariants}
            className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent tracking-tight"
          >
            Unsere gemeinsame Vision
          </motion.h3>

          <motion.p
            variants={textVariants}
            className="text-white/90 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto"
          >
            Bei GetExperts verbinden wir technologische Innovation mit menschlicher Expertise. Wir glauben daran, dass
            erfolgreiche Personalvermittlung auf Vertrauen, Transparenz und tiefem Verständnis für die Bedürfnisse
            unserer Kunden und Kandidaten basiert. Unser Ziel ist es, die Zukunft des Recruitings zu gestalten und neue
            Maßstäbe zu setzen.
          </motion.p>

          {/* Dekorative Linie mit Animation - Optimiert */}
          <motion.div
            variants={lineVariants}
            className="mt-10 h-px w-32 bg-gradient-to-r from-indigo-500/30 via-primary/50 to-violet-500/30 mx-auto"
            style={{ willChange: "transform, opacity" }}
            aria-hidden="true"
          ></motion.div>
        </motion.div>
      </div>

      {/* Übergang zum FAQ-Bereich - Optimiert */}
      <div className="relative mt-16 pt-16">
        <div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary/5 rounded-full filter blur-xl will-change-transform"
          aria-hidden="true"
        ></div>
      </div>
    </section>
  )
})
