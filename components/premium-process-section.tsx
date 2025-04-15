"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Search, CheckCircle, Calendar, Briefcase, Award } from "lucide-react"

export default function PremiumProcessSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const processes = [
    {
      step: "01",
      title: "Bedarfsanalyse",
      description: "Wir analysieren Ihre Anforderungen und erstellen ein maßgeschneidertes Konzept.",
      details:
        "In einem ausführlichen Gespräch erfassen wir Ihre spezifischen Anforderungen, Unternehmenskultur und Erwartungen. Auf dieser Basis entwickeln wir eine passgenaue Recruiting-Strategie.",
      icon: <FileText className="h-6 w-6" />,
      image: "/placeholder.svg?height=600&width=800&text=Analysis",
      timeframe: "1-2 Tage",
      color: "from-blue-500 to-indigo-600",
    },
    {
      step: "02",
      title: "Kandidatensuche",
      description: "Wir identifizieren die besten Talente durch unser umfangreiches Netzwerk.",
      details:
        "Durch Active Sourcing, unsere umfangreiche Datenbank und exklusive Netzwerke finden wir qualifizierte Kandidaten, die nicht nur fachlich, sondern auch persönlich zu Ihrem Unternehmen passen.",
      icon: <Search className="h-6 w-6" />,
      image: "/placeholder.svg?height=600&width=800&text=Search",
      timeframe: "1-3 Wochen",
      color: "from-indigo-500 to-violet-600",
    },
    {
      step: "03",
      title: "Qualifizierung",
      description: "Wir prüfen die Kandidaten auf fachliche und persönliche Eignung.",
      details:
        "Durch strukturierte Interviews, Assessments und Referenzprüfungen stellen wir sicher, dass nur die besten Kandidaten in die engere Auswahl kommen. So sparen Sie wertvolle Zeit im Auswahlprozess.",
      icon: <CheckCircle className="h-6 w-6" />,
      image: "/placeholder.svg?height=600&width=800&text=Qualification",
      timeframe: "1-2 Wochen",
      color: "from-violet-500 to-purple-600",
    },
    {
      step: "04",
      title: "Präsentation",
      description: "Wir stellen Ihnen ausgewählte Kandidaten mit umfassender Dokumentation vor.",
      details:
        "Sie erhalten nur sorgfältig vorqualifizierte Kandidatenprofile mit detaillierten Bewertungen und Einschätzungen. So können Sie schnell und sicher entscheiden, welche Kandidaten Sie kennenlernen möchten.",
      icon: <Calendar className="h-6 w-6" />,
      image: "/placeholder.svg?height=600&width=800&text=Presentation",
      timeframe: "1 Woche",
      color: "from-purple-500 to-pink-600",
    },
    {
      step: "05",
      title: "Vermittlung",
      description: "Wir begleiten den gesamten Prozess bis zum erfolgreichen Vertragsabschluss.",
      details:
        "Von der Koordination der Vorstellungsgespräche über die Vertragsverhandlungen bis hin zum Onboarding - wir unterstützen Sie bei jedem Schritt und sorgen für einen reibungslosen Ablauf.",
      icon: <Briefcase className="h-6 w-6" />,
      image: "/placeholder.svg?height=600&width=800&text=Placement",
      timeframe: "2-4 Wochen",
      color: "from-blue-500 to-cyan-600",
    },
    {
      step: "06",
      title: "Nachbetreuung",
      description: "Wir bleiben in Kontakt und stellen sicher, dass alles reibungslos läuft.",
      details:
        "Auch nach erfolgreicher Vermittlung bleiben wir Ihr Ansprechpartner. Wir begleiten die Probezeit und stehen bei Fragen oder Herausforderungen zur Verfügung. Ihre Zufriedenheit ist unser oberstes Ziel.",
      icon: <Award className="h-6 w-6" />,
      image: "/placeholder.svg?height=600&width=800&text=Support",
      timeframe: "6 Monate",
      color: "from-emerald-500 to-green-600",
    },
  ]

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#0d0d14]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/0"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-6 py-2 mb-4 rounded-full bg-[#1e1a3a] border border-white/10 text-white text-sm font-medium">
            Unser Prozess
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Wie wir <span className="text-primary">arbeiten</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Unser bewährter Prozess für erfolgreiche Recruiting-Projekte
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Sophisticated process timeline */}
          <div className="relative">
            {/* Vertikale Verbindungslinie - schlanker und subtiler */}
            <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-[1px] md:w-[1px] bg-white/10 transform md:translate-x-[-50%]"></div>

            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`mb-16 md:mb-24 last:mb-0 relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline-Punkt - minimalistischer */}
                <div className="absolute left-0 md:left-1/2 top-0 transform translate-x-[-50%] z-10">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="text-sm font-medium text-primary">{process.step}</div>
                  </div>
                </div>

                {/* Content - vereinfacht */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className={`inline-flex items-center mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <div className={`text-xl font-bold text-white`}>{process.title}</div>
                  </div>

                  <p className="text-white/80 mb-2">{process.description}</p>

                  <div className="text-sm text-white/50">
                    <span>Zeitrahmen: {process.timeframe}</span>
                  </div>
                </div>

                {/* Rechte Seite - vereinfacht */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="text-white/70 text-sm">{process.details}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA at the end of the process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Prozess im Detail besprechen <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* USPs/Vorteile - Modern und ästhetisch */}
          <div className="mt-24 pt-20 border-t border-white/10 relative overflow-hidden">
            {/* Moderne Hintergrundgestaltung mit Glassmorphism-Effekt */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[120px] opacity-60"></div>
              <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-indigo-500/5 blur-[100px] opacity-60"></div>
            </div>

            {/* Moderne, subtile Grafikelemente */}
            <div className="absolute top-24 left-10 opacity-20">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="url(#arrow-gradient-1)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="arrow-gradient-1" x1="7" y1="17" x2="17" y2="7" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4F46E5" />
                    <stop offset="1" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute bottom-16 right-20 opacity-20">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="url(#arrow-gradient-2)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="arrow-gradient-2" x1="7" y1="17" x2="17" y2="7" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#4F46E5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute top-40 right-40 opacity-10">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" stroke="url(#circle-gradient)" strokeWidth="2" />
                <defs>
                  <linearGradient id="circle-gradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1" />
                    <stop offset="1" stopColor="#A78BFA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute bottom-32 left-32 opacity-10 animate-pulse-glow">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 3L20 18H4L12 3Z"
                  stroke="url(#triangle-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="triangle-gradient" x1="4" y1="18" x2="20" y2="3" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A78BFA" />
                    <stop offset="1" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-3 rounded-full shadow-sm shadow-green-500/10">
                  <svg
                    className="h-6 w-6 text-green-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold ml-3 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                  Ihre Vorteile auf einen Blick
                </h3>
              </div>

              <div className="text-center text-white/70 mb-12 max-w-xl mx-auto leading-relaxed">
                Entdecken Sie, warum führende Unternehmen auf unsere maßgeschneiderten Recruiting-Lösungen vertrauen und
                wie wir Ihnen helfen können, Ihre Personalziele zu erreichen.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* USP 1: Reduzierte Kosten */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center relative group"
                >
                  <div className="absolute -top-1 -right-1 text-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 flex items-center justify-center mb-5 relative group-hover:shadow-lg group-hover:shadow-indigo-500/10 transition-all duration-300">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <div className="absolute -top-1 -right-1 bg-green-500/20 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 17L17 7M17 7H8M17 7V16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center justify-center group-hover:text-primary transition-colors duration-300">
                    <span>Reduzierte Cost-per-Hire</span>
                    <span className="ml-2 text-green-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ↑
                    </span>
                  </h4>
                  <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                    Bis zu 40% niedrigere Kosten pro Einstellung im Vergleich zu traditionellen Recruiting-Methoden
                  </p>
                  <div className="mt-3 text-green-500/80 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    +40% Effizienz
                  </div>
                </motion.div>

                {/* USP 2: Schnellere Besetzung */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center relative group"
                >
                  <div className="absolute -top-1 -right-1 text-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 flex items-center justify-center mb-5 relative group-hover:shadow-lg group-hover:shadow-indigo-500/10 transition-all duration-300">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <div className="absolute -top-1 -right-1 bg-green-500/20 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 17L17 7M17 7H8M17 7V16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center justify-center group-hover:text-primary transition-colors duration-300">
                    <span>Schnellere Besetzung</span>
                    <span className="ml-2 text-green-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ↑
                    </span>
                  </h4>
                  <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                    Reduzierung der Time-to-Hire um durchschnittlich 35% durch optimierte Prozesse
                  </p>
                  <div className="mt-3 text-green-500/80 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    -35% Zeit
                  </div>
                </motion.div>

                {/* USP 3: Bessere Kandidaten */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center relative group"
                >
                  <div className="absolute -top-1 -right-1 text-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 flex items-center justify-center mb-5 relative group-hover:shadow-lg group-hover:shadow-indigo-500/10 transition-all duration-300">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <div className="absolute -top-1 -right-1 bg-green-500/20 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 17L17 7M17 7H8M17 7V16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center justify-center group-hover:text-primary transition-colors duration-300">
                    <span>Höhere Kandidatenqualität</span>
                    <span className="ml-2 text-green-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ↑
                    </span>
                  </h4>
                  <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                    95% unserer vermittelten Kandidaten bleiben länger als 12 Monate im Unternehmen
                  </p>
                  <div className="mt-3 text-green-500/80 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    +95% Verbleibrate
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Zusätzliche USPs in zweiter Reihe */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
              {/* USP 4: Risikofrei */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start relative"
              >
                <div className="absolute -top-1 -left-1 text-green-500/30">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 flex items-center justify-center mr-4 flex-shrink-0 relative">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <div className="absolute -top-1 -right-1 bg-green-500/20 rounded-full p-1">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 flex items-center">
                    <span>Risikofrei durch Erfolgshonorar</span>
                    <span className="ml-2 text-green-500 text-xs">↑</span>
                  </h4>
                  <p className="text-white/60 text-sm">
                    Sie zahlen nur bei erfolgreicher Vermittlung – keine Vorabkosten oder monatlichen Gebühren
                  </p>
                  <div className="mt-2 text-green-500/80 text-xs font-medium">100% risikofreies Modell</div>
                </div>
              </motion.div>

              {/* USP 5: Nachbesetzungsgarantie */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start relative"
              >
                <div className="absolute -top-1 -left-1 text-green-500/30">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 flex items-center justify-center mr-4 flex-shrink-0 relative">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div className="absolute -top-1 -right-1 bg-green-500/20 rounded-full p-1">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 flex items-center">
                    <span>Nachbesetzungsgarantie</span>
                    <span className="ml-2 text-green-500 text-xs">↑</span>
                  </h4>
                  <p className="text-white/60 text-sm">
                    Kostenlose Nachbesetzung bei vorzeitigem Ausscheiden innerhalb der ersten 6 Monate
                  </p>
                  <div className="mt-2 text-green-500/80 text-xs font-medium">+100% Sicherheit</div>
                </div>
              </motion.div>
            </div>

            {/* Abschließende Statistik */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 text-center relative"
            >
              <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-green-500/10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 text-green-500/10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-lg border border-primary/20 relative">
                <div className="absolute -top-2 -right-2 bg-green-500/20 rounded-full p-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-white/80 text-sm flex items-center justify-center">
                  <span className="font-bold text-white">98% unserer Kunden</span>
                  <span className="mx-1">würden GetExperts weiterempfehlen</span>
                  <span className="ml-2 text-green-500 text-xs">↑</span>
                </p>
                <div className="mt-1 text-green-500/80 text-xs font-medium">Höchste Kundenzufriedenheit</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
