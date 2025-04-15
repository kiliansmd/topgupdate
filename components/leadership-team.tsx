"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Link from "next/link"
import { Linkedin, ArrowRight, Quote, X, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ConnectionGraphic from "./connection-graphic"

interface TeamMember {
  id: number
  name: string
  position: string
  initials: string
  image?: string
  color: string
  description: string
  longDescription?: string
  expertise: string[]
  quote?: string
  linkedin?: string
  twitter?: string
  email?: string
  verified: boolean
}

export default function LeadershipTeam({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null)
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Daten für das Führungsteam
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Markus Weber",
      position: "CEO & Gründer",
      initials: "MW",
      color: "from-indigo-600 to-violet-700",
      description: "15+ Jahre Erfahrung im Executive Search mit Fokus auf Tech-Führungskräfte",
      longDescription:
        "Dr. Markus Weber bringt über 15 Jahre Erfahrung im Executive Search und in der Personalberatung mit. Nach seiner Promotion in Wirtschaftswissenschaften und mehreren Jahren bei internationalen Personalberatungen gründete er GetExperts mit der Vision, Recruiting menschlicher und effektiver zu gestalten. Seine Expertise liegt besonders in der Vermittlung von Führungskräften in der IT- und Technologiebranche.",
      expertise: ["Executive Search", "Tech Leadership", "Strategieberatung", "Unternehmensentwicklung"],
      quote:
        "Unser Ziel ist es, die Personalgewinnung zu revolutionieren und Unternehmen mit den besten Talenten zu verbinden. Wir setzen auf Qualität statt Quantität und bauen langfristige Beziehungen auf.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "markus.weber@getexperts.de",
      verified: true,
    },
    {
      id: 2,
      name: "Julia Schmidt",
      position: "CTO",
      initials: "JS",
      color: "from-violet-600 to-purple-700",
      description: "Expertin für KI-gestützte Matching-Algorithmen und Recruiting-Technologie",
      longDescription:
        "Julia Schmidt leitet als CTO die technologische Entwicklung bei GetExperts. Mit ihrem Hintergrund in Informatik und Machine Learning hat sie unsere proprietären Matching-Algorithmen entwickelt, die Kandidatenprofile präzise mit Unternehmensanforderungen abgleichen. Vor GetExperts war sie in leitenden Positionen bei Tech-Unternehmen tätig und hat mehrere erfolgreiche KI-Projekte implementiert.",
      expertise: ["KI & Machine Learning", "Recruiting-Technologie", "Softwareentwicklung", "Datenanalyse"],
      quote:
        "Technologie ist der Schlüssel zu effizientem Recruiting. Wir kombinieren KI-gestützte Matching-Algorithmen mit menschlicher Expertise, um die perfekte Balance zu schaffen.",
      linkedin: "https://linkedin.com",
      email: "julia.schmidt@getexperts.de",
      verified: true,
    },
    {
      id: 3,
      name: "Thomas Müller",
      position: "Head of Recruiting",
      initials: "TM",
      color: "from-blue-600 to-indigo-700",
      description: "Spezialist für Active Sourcing und datengestützte Kandidatenauswahl",
      longDescription:
        "Thomas Müller verantwortet als Head of Recruiting alle operativen Recruiting-Prozesse bei GetExperts. Mit über 10 Jahren Erfahrung im Talent Acquisition hat er innovative Sourcing-Strategien entwickelt, die es uns ermöglichen, auch passive Kandidaten erfolgreich anzusprechen. Seine datengestützte Herangehensweise an die Kandidatenauswahl sorgt für präzise Matches und hohe Zufriedenheit bei Kunden und Kandidaten.",
      expertise: ["Active Sourcing", "Talent Acquisition", "Recruiting-Prozesse", "Kandidateninterviews"],
      quote:
        "Erfolgreiche Vermittlung basiert auf tiefem Verständnis der Anforderungen und einer präzisen Kandidatenauswahl. Wir finden nicht nur Fachkräfte, sondern die richtigen Persönlichkeiten.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "thomas.mueller@getexperts.de",
      verified: true,
    },
    {
      id: 4,
      name: "Sarah Becker",
      position: "Finance Director",
      initials: "SB",
      color: "from-emerald-600 to-teal-700",
      description: "Verantwortlich für Finanzen und strategische Unternehmensplanung",
      longDescription:
        "Sarah Becker leitet als Finance Director alle finanziellen Aspekte von GetExperts und ist maßgeblich an der strategischen Unternehmensplanung beteiligt. Mit ihrem Hintergrund im Finanzwesen und ihrer Erfahrung in schnell wachsenden Unternehmen sorgt sie für solide finanzielle Strukturen und nachhaltiges Wachstum. Ihre analytische Herangehensweise trägt wesentlich zur erfolgreichen Entwicklung des Unternehmens bei.",
      expertise: ["Finanzplanung", "Controlling", "Strategische Planung", "Risikomanagement"],
      quote:
        "Nachhaltiges Wachstum erfordert solide finanzielle Planung und strategische Weitsicht. Wir investieren in Qualität und langfristige Kundenbeziehungen.",
      linkedin: "https://linkedin.com",
      email: "sarah.becker@getexperts.de",
      verified: true,
    },
    {
      id: 5,
      name: "Michael Schneider",
      position: "Head of Marketing",
      initials: "MS",
      color: "from-amber-600 to-orange-700",
      description: "Experte für Employer Branding und digitale Marketingstrategien",
      longDescription:
        "Michael Schneider verantwortet als Head of Marketing alle Marketingaktivitäten von GetExperts. Seine Expertise liegt besonders im Bereich Employer Branding und digitale Marketingstrategien. Mit seiner langjährigen Erfahrung im B2B-Marketing hat er erfolgreich die Marke GetExperts aufgebaut und positioniert. Sein datengetriebener Ansatz sorgt für effiziente Marketingkampagnen und kontinuierliches Wachstum.",
      expertise: ["Employer Branding", "Digitales Marketing", "Content-Strategie", "Markenentwicklung"],
      quote:
        "Starke Marken ziehen starke Talente an. Wir helfen Unternehmen, ihre Arbeitgebermarke zu schärfen und sich als attraktiver Arbeitgeber zu positionieren.",
      linkedin: "https://linkedin.com",
      email: "michael.schneider@getexperts.de",
      verified: true,
    },
    {
      id: 6,
      name: "Laura Wagner",
      position: "Head of Operations",
      initials: "LW",
      color: "from-pink-600 to-rose-700",
      description: "Verantwortlich für reibungslose Prozesse und Qualitätsmanagement",
      longDescription:
        "Laura Wagner leitet als Head of Operations alle internen Prozesse bei GetExperts und ist für das Qualitätsmanagement verantwortlich. Mit ihrer Erfahrung im Prozessmanagement und ihrer strukturierten Arbeitsweise sorgt sie für reibungslose Abläufe und kontinuierliche Verbesserungen. Ihr Fokus auf Qualität und Effizienz trägt maßgeblich zur hohen Kundenzufriedenheit bei.",
      expertise: ["Prozessoptimierung", "Qualitätsmanagement", "Projektmanagement", "Change Management"],
      quote:
        "Exzellente Ergebnisse erfordern exzellente Prozesse. Wir optimieren kontinuierlich unsere Abläufe, um maximale Effizienz und Qualität zu gewährleisten.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "laura.wagner@getexperts.de",
      verified: true,
    },
  ]

  const bgClass = variant === "light" ? "bg-gray-50" : "bg-[#0a0a12]"
  const textClass = variant === "light" ? "text-gray-900" : "text-white"
  const subtextClass = variant === "light" ? "text-gray-600" : "text-white/70"
  const cardBgClass = variant === "light" ? "bg-white" : "bg-[#12121c]/80"
  const cardBorderClass = variant === "light" ? "border-gray-200" : "border-white/10"
  const badgeBgClass = variant === "light" ? "bg-indigo-50 text-indigo-700" : "bg-[#1e1a3a] text-white"

  return (
    <section ref={sectionRef} className={`py-24 relative overflow-hidden ${bgClass}`}>
      {/* Hintergrund-Elemente */}
      {variant === "dark" && (
        <>
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-violet-600/5 blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
        </>
      )}
      {variant === "light" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:20px_20px] opacity-30"></div>
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-violet-100/40 blur-3xl"></div>
        </>
      )}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className={`inline-block px-6 py-2 text-sm font-medium rounded-full mb-4 ${badgeBgClass}`}>
              Unsere Vision
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${textClass}`}
          >
            Die Köpfe hinter{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              GetExperts
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`max-w-2xl mx-auto ${subtextClass}`}
          >
            Lernen Sie unsere Führungskräfte kennen, die GetExperts zu einem der führenden Recruiting-Unternehmen
            gemacht haben
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className={`${cardBgClass} backdrop-blur-sm border ${cardBorderClass} rounded-xl p-6 relative overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onClick={() => setActiveTeamMember(member.id)}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Hintergrund-Effekt */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${member.color} rounded-xl opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-300`}
              ></div>

              <div className="flex items-center mb-5">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center mr-4 shadow-lg`}
                >
                  <span className="text-xl font-bold text-white">{member.initials}</span>
                </div>
                <div>
                  <div className="flex items-center">
                    <h3
                      className={`text-lg font-bold ${textClass} group-hover:text-indigo-600 transition-colors duration-300`}
                    >
                      {member.name}
                    </h3>
                    {member.verified && (
                      <Badge
                        className="ml-2 text-xs py-0.5 bg-indigo-100 text-indigo-700 border-indigo-200"
                        variant={variant === "light" ? "default" : "outline"}
                      >
                        Verified Leader
                      </Badge>
                    )}
                  </div>
                  <p className="text-indigo-600">{member.position}</p>
                </div>
              </div>

              <p className={`text-sm mb-5 ${subtextClass}`}>{member.description}</p>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200/10">
                <Link
                  href={member.linkedin || "#"}
                  onClick={(e) => e.stopPropagation()}
                  className="text-indigo-600 text-sm flex items-center hover:text-indigo-700 transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5 mr-1.5" />
                  <span>LinkedIn</span>
                </Link>

                <span className="text-indigo-600/80 text-sm flex items-center group-hover:text-indigo-700 transition-colors">
                  Details{" "}
                  <ArrowRight className="h-3 w-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </div>

              {/* Hover-Effekt */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredMember === member.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Gemeinsame Vision */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="mb-8 relative">
            <Quote className={`h-14 w-14 mx-auto ${variant === "light" ? "text-indigo-200" : "text-indigo-800/20"}`} />
          </div>

          <h3 className={`text-2xl md:text-3xl font-bold mb-8 ${textClass}`}>Unsere gemeinsame Vision</h3>

          <p className={`text-lg md:text-xl leading-relaxed ${subtextClass} max-w-3xl mx-auto`}>
            Bei GetExperts verbinden wir technologische Innovation mit menschlicher Expertise. Wir glauben daran, dass
            erfolgreiche Personalvermittlung auf Vertrauen, Transparenz und tiefem Verständnis für die Bedürfnisse
            unserer Kunden und Kandidaten basiert. Unser Ziel ist es, die Zukunft des Recruitings zu gestalten und neue
            Maßstäbe zu setzen.
          </p>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 h-px w-32 bg-gradient-to-r from-indigo-500/30 via-indigo-500/50 to-violet-500/30 mx-auto"
          />
        </motion.div>

        {/* Connection Graphic */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <ConnectionGraphic variant={variant} />
        </motion.div>
      </div>

      {/* Modal für detaillierte Ansicht */}
      <AnimatePresence>
        {activeTeamMember && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveTeamMember(null)}
          >
            <motion.div
              className={`${variant === "light" ? "bg-white" : "bg-[#12121c]"} border ${variant === "light" ? "border-gray-200" : "border-white/10"} rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {teamMembers
                .filter((m) => m.id === activeTeamMember)
                .map((member) => (
                  <div key={member.id} className="grid grid-cols-1 md:grid-cols-2">
                    {/* Linke Seite - Bild/Gradient */}
                    <div
                      className={`bg-gradient-to-br ${member.color} p-8 flex flex-col justify-center items-center text-center text-white min-h-[300px]`}
                    >
                      <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border-2 border-white/20">
                        <span className="text-4xl font-bold">{member.initials}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-white/80 mb-4">{member.position}</p>

                      <div className="flex space-x-3 mb-4">
                        {member.linkedin && (
                          <Link
                            href={member.linkedin}
                            className="bg-white/20 hover:bg-white/30 transition-colors duration-200 p-2 rounded-full"
                          >
                            <Linkedin className="h-4 w-4" />
                          </Link>
                        )}
                        {member.twitter && (
                          <Link
                            href={member.twitter}
                            className="bg-white/20 hover:bg-white/30 transition-colors duration-200 p-2 rounded-full"
                          >
                            <Twitter className="h-4 w-4" />
                          </Link>
                        )}
                        {member.email && (
                          <Link
                            href={`mailto:${member.email}`}
                            className="bg-white/20 hover:bg-white/30 transition-colors duration-200 p-2 rounded-full"
                          >
                            <Mail className="h-4 w-4" />
                          </Link>
                        )}
                      </div>

                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {member.expertise.map((skill, idx) => (
                          <Badge key={idx} className="bg-white/20 text-white border-white/10">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Rechte Seite - Informationen */}
                    <div className="p-8">
                      <button
                        onClick={() => setActiveTeamMember(null)}
                        className="absolute top-4 right-4 p-1 rounded-full bg-gray-200/20 hover:bg-gray-200/30 transition-colors"
                        aria-label="Schließen"
                      >
                        <X className="h-5 w-5 text-gray-500" />
                      </button>

                      <h4 className={`text-xl font-bold mb-4 ${textClass}`}>Über {member.name}</h4>
                      <p className={`${subtextClass} mb-6 leading-relaxed`}>
                        {member.longDescription || member.description}
                      </p>

                      {member.quote && (
                        <div className="mb-6 relative bg-indigo-50/10 p-6 rounded-lg border-l-4 border-indigo-500">
                          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-indigo-300/30" />
                          <p className={`${subtextClass} italic`}>"{member.quote}"</p>
                        </div>
                      )}

                      <div className="mt-8">
                        <Button
                          onClick={() => setActiveTeamMember(null)}
                          className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white"
                        >
                          Zurück zur Übersicht
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
