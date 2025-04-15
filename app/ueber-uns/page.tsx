"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Users,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Sparkles,
  MapPin,
  Star,
  Coffee,
  Zap,
  Award,
  Briefcase,
  GraduationCap,
  Smile,
  Compass,
} from "lucide-react"
import Link from "next/link"
import LeadershipTeam from "@/components/leadership-team"

export default function AboutUsPage() {
  const missionRef = useRef(null)
  const missionInView = useInView(missionRef, { once: true, amount: 0.2 })

  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 })

  const historyRef = useRef(null)
  const historyInView = useInView(historyRef, { once: true, amount: 0.2 })

  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 })

  const cultureRef = useRef(null)
  const cultureInView = useInView(cultureRef, { once: true, amount: 0.2 })

  const [activeStory, setActiveStory] = useState(0)

  // Mitarbeiter-Geschichten
  const employeeStories = [
    {
      name: "Julia Becker",
      role: "Senior Recruiting Consultant",
      years: "4 Jahre bei GetExperts",
      quote:
        "GetExperts hat mir die Möglichkeit gegeben, meine Leidenschaft für Menschen mit meiner Begeisterung für Technologie zu verbinden. Die offene Kultur und das Vertrauen, das mir entgegengebracht wird, sind einzigartig.",
      image: "/placeholder.svg?height=400&width=400&text=Julia",
    },
    {
      name: "Thomas Schmidt",
      role: "Tech Sourcing Specialist",
      years: "2 Jahre bei GetExperts",
      quote:
        "Was mich jeden Tag motiviert, ist das Feedback unserer Kandidaten, wenn sie ihren Traumjob gefunden haben. Bei GetExperts steht der Mensch im Mittelpunkt – nicht nur als Phrase, sondern in der täglichen Arbeit.",
      image: "/placeholder.svg?height=400&width=400&text=Thomas",
    },
    {
      name: "Sarah Müller",
      role: "Head of Candidate Experience",
      years: "3 Jahre bei GetExperts",
      quote:
        "Die Möglichkeit, innovative Ideen einzubringen und umzusetzen, ist das, was GetExperts besonders macht. Wir entwickeln uns ständig weiter und bleiben nie stehen.",
      image: "/placeholder.svg?height=400&width=400&text=Sarah",
    },
  ]

  // Kulturwerte mit Icons
  const cultureValues = [
    {
      icon: <Coffee className="h-6 w-6 text-white" />,
      title: "Work-Life-Balance",
      description:
        "Flexible Arbeitszeiten, Remote-Optionen und regelmäßige Team-Events sorgen für ein ausgewogenes Arbeitsleben.",
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Innovation fördern",
      description: "Wir ermutigen zu neuen Ideen und bieten Raum für Kreativität und kontinuierliche Verbesserung.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      title: "Kontinuierliches Lernen",
      description:
        "Regelmäßige Weiterbildungen, Workshops und ein großzügiges Fortbildungsbudget für jeden Mitarbeiter.",
    },
    {
      icon: <Smile className="h-6 w-6 text-white" />,
      title: "Offene Kommunikation",
      description: "Transparente Entscheidungsprozesse und eine Kultur des offenen Feedbacks auf allen Ebenen.",
    },
  ]

  return (
    <div className="overflow-hidden bg-white text-gray-900">
      {/* Hero Section - Premium Styling */}
      <section className="relative min-h-[90vh] flex items-center pt-36 pb-20">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/95 to-white"></div>

          {/* Subtle Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-white to-transparent"></div>

          {/* Enhanced Background Elements */}
          <div className="absolute top-1/4 right-10 w-[600px] h-[600px] rounded-full bg-indigo-100/30 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] rounded-full bg-violet-100/30 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-100/20 blur-3xl"></div>

          {/* Subtle Dot Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] bg-[length:40px_40px] opacity-[0.015]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-6 bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-600 border-indigo-100 px-5 py-2 text-sm font-semibold rounded-full shadow-sm">
                Unsere Geschichte
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Wir sind{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  GetExperts
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-gradient-to-r from-indigo-600/40 to-violet-600/40 blur-[2px]"></span>
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Mehr als eine Recruiting-Agentur – wir sind ein Team von leidenschaftlichen Menschen, die daran glauben,
              dass die richtigen Talente Unternehmen und Karrieren transformieren können.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 mb-12"
            >
              <Link href="#team">
                <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-lg shadow-indigo-600/10 hover:shadow-xl hover:shadow-indigo-600/20 transition-all duration-300">
                  Unser Team kennenlernen <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Video Teaser */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 aspect-video max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-violet-900/20 z-10"></div>
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Unser+Team+Video"
                alt="GetExperts Team Video"
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors duration-300 shadow-xl">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-indigo-600 border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Premium Styling */}
      <section ref={missionRef} className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            className="bg-gradient-to-r from-indigo-50/80 to-violet-50/80 rounded-3xl p-12 md:p-16 shadow-xl relative overflow-hidden border border-white/80"
            style={{
              opacity: missionInView ? 1 : 0,
              transform: missionInView ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet-200/30 rounded-full blur-3xl"></div>

            <div className="flex flex-col md:flex-row gap-16 relative z-10">
              <div className="md:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl p-3 mr-5 shadow-lg shadow-indigo-500/10">
                    <Compass className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Unsere Mission</h3>
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Wir verbinden außergewöhnliche Talente mit visionären Unternehmen. Durch tiefes Verständnis der
                  Technologiebranche und ihrer Anforderungen schaffen wir perfekte Matches, die nicht nur Unternehmen
                  erfolgreicher machen, sondern auch Menschen zu erfüllenden Karrieren verhelfen.
                </p>
                <div className="flex items-center text-sm font-medium text-indigo-600 bg-white px-4 py-2 rounded-full shadow-sm border border-indigo-100 w-fit">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Seit 2015 am Markt</span>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl p-3 mr-5 shadow-lg shadow-indigo-500/10">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Unsere Vision</h3>
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Wir streben danach, die Art und Weise, wie Unternehmen und Talente zusammenfinden, neu zu definieren.
                  Unsere Vision ist eine Arbeitswelt, in der jeder Mensch sein volles Potenzial entfalten kann, indem er
                  genau dort arbeitet, wo seine Fähigkeiten und Persönlichkeit optimal zur Geltung kommen.
                </p>
                <div className="flex items-center text-sm font-medium text-indigo-600 bg-white px-4 py-2 rounded-full shadow-sm border border-indigo-100 w-fit">
                  <Award className="h-4 w-4 mr-2" />
                  <span>Top Recruiter 2023 & 2024</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Culture Section - NEW */}
      <section ref={cultureRef} className="py-24 bg-gradient-to-b from-white to-indigo-50/30 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <Badge className="mb-5 bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-600 border-indigo-100 px-5 py-2 text-sm font-medium rounded-full shadow-sm">
              Unsere Kultur
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
              So{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  arbeiten
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-gradient-to-r from-indigo-600/40 to-violet-600/40 blur-[2px]"></span>
              </span>{" "}
              wir
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Unsere Unternehmenskultur ist das Herzstück von GetExperts – sie definiert, wie wir miteinander und mit
              unseren Kunden und Kandidaten umgehen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            {/* Linke Seite - Kulturwerte */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={cultureInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Was uns ausmacht</h3>

              {cultureValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={cultureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-5"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h4>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Rechte Seite - Mitarbeiter-Geschichten */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={cultureInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Stimmen unseres Teams</h3>

                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStory}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="mb-8"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={employeeStories[activeStory].image || "/placeholder.svg"}
                            alt={employeeStories[activeStory].name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{employeeStories[activeStory].name}</h4>
                          <p className="text-indigo-600">{employeeStories[activeStory].role}</p>
                          <p className="text-sm text-gray-500">{employeeStories[activeStory].years}</p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -top-2 -left-2 text-indigo-200">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 11C10 8.79086 8.20914 7 6 7H4V9H6C7.10457 9 8 9.89543 8 11V17H14V11C14 8.79086 12.2091 7 10 7H8V9H10C11.1046 9 12 9.89543 12 11V15H10V11Z"
                              fill="currentColor"
                            />
                            <path
                              d="M22 11C22 8.79086 20.2091 7 18 7H16V9H18C19.1046 9 20 9.89543 20 11V17H16V11C16 8.79086 14.2091 7 12 7H10V9H12C13.1046 9 14 9.89543 14 11V15H22V11Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700 italic pl-6">{employeeStories[activeStory].quote}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex justify-center gap-2 mt-8">
                    {employeeStories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStory(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeStory === index ? "bg-indigo-600" : "bg-gray-300"}`}
                        aria-label={`Story ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-500 to-violet-600 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-5 w-5 text-yellow-300" />
                  <h4 className="font-bold">Ausgezeichneter Arbeitgeber</h4>
                </div>
                <p className="text-white/90">
                  GetExperts wurde 2023 und 2024 als einer der besten Arbeitgeber in der Recruiting-Branche
                  ausgezeichnet.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Statistiken */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={cultureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              {
                value: "4.8/5",
                label: "Mitarbeiterzufriedenheit",
                icon: <Smile className="h-6 w-6 text-indigo-600" />,
              },
              { value: "92%", label: "Weiterempfehlungsrate", icon: <Users className="h-6 w-6 text-indigo-600" /> },
              { value: "18%", label: "Jährliches Teamwachstum", icon: <Zap className="h-6 w-6 text-indigo-600" /> },
              { value: "4+", label: "Teamevents pro Monat", icon: <Coffee className="h-6 w-6 text-indigo-600" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={cultureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section with ID for anchor link */}
      <section id="team">
        <LeadershipTeam variant="light" />
      </section>

      {/* Values Section - Premium Design */}
      <section ref={valuesRef} className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <Badge className="mb-5 bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-600 border-indigo-100 px-5 py-2 text-sm font-medium rounded-full shadow-sm">
              Unsere Werte
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
              Woran wir{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  glauben
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-gradient-to-r from-indigo-600/40 to-violet-600/40 blur-[2px]"></span>
              </span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Diese Grundsätze leiten unser tägliches Handeln und definieren, wer wir sind und wie wir arbeiten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-6 w-6 text-white" />,
                title: "Menschlichkeit",
                description:
                  "Wir setzen auf echte Beziehungen und verstehen die Bedürfnisse unserer Kunden und Kandidaten.",
                color: "from-rose-500 to-pink-600",
              },
              {
                icon: <Target className="h-6 w-6 text-white" />,
                title: "Präzision",
                description:
                  "Wir liefern maßgeschneiderte Lösungen durch tiefes Verständnis der Anforderungen und Branchenkenntnis.",
                color: "from-blue-500 to-indigo-600",
              },
              {
                icon: <Lightbulb className="h-6 w-6 text-white" />,
                title: "Innovation",
                description:
                  "Wir nutzen modernste Technologien und Methoden, um die besten Talente zu identifizieren und zu gewinnen.",
                color: "from-amber-500 to-orange-600",
              },
              {
                icon: <Shield className="h-6 w-6 text-white" />,
                title: "Integrität",
                description: "Wir handeln transparent, ehrlich und halten, was wir versprechen – ohne Kompromisse.",
                color: "from-emerald-500 to-green-600",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-violet-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/10 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
                >
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History - Premium Design */}
      <section ref={historyRef} className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <Badge className="mb-5 bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-600 border-indigo-100 px-5 py-2 text-sm font-medium rounded-full shadow-sm">
              Unsere Geschichte
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
              Der Weg zu{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  GetExperts
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-gradient-to-r from-indigo-600/40 to-violet-600/40 blur-[2px]"></span>
              </span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Unsere Reise begann mit einer klaren Vision: Recruiting persönlicher, transparenter und effektiver zu
              gestalten
            </p>
          </div>

          {/* Tabs für die Meilensteine */}
          <Tabs defaultValue="2015" className="w-full max-w-4xl mx-auto mb-16">
            <TabsList className="grid grid-cols-5 w-full mb-12">
              <TabsTrigger
                value="2015"
                className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-700"
              >
                2015
              </TabsTrigger>
              <TabsTrigger
                value="2017"
                className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-700"
              >
                2017
              </TabsTrigger>
              <TabsTrigger
                value="2019"
                className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-700"
              >
                2019
              </TabsTrigger>
              <TabsTrigger
                value="2021"
                className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-700"
              >
                2021
              </TabsTrigger>
              <TabsTrigger
                value="heute"
                className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-700"
              >
                Heute
              </TabsTrigger>
            </TabsList>

            <TabsContent value="2015" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 w-fit">
                      2015
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Gründung von GetExperts</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Nach seiner Promotion in Wirtschaftswissenschaften und mehreren Jahren bei internationalen
                      Personalberatungen gründete Dr. Markus Weber GetExperts mit der Vision, Recruiting menschlicher
                      und effektiver zu gestalten. Mit einem kleinen Team von drei Personen begann die Reise in einem
                      kleinen Büro in Berlin-Mitte.
                    </p>
                    <div className="flex items-center text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full w-fit">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>3 Mitarbeiter zum Start</span>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=400&text=Gründung+2015"
                        alt="Gründung von GetExperts"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="2017" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 w-fit">
                      2017
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Expansion ins Tech-Recruiting</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Mit der Einstellung von Julia Schmidt als CTO begann GetExperts, sich auf die Vermittlung von
                      IT-Fachkräften zu spezialisieren. Die Entwicklung eigener Matching-Algorithmen revolutionierte
                      unseren Ansatz und ermöglichte präzisere Kandidatenvorschläge. Das Team wuchs auf 12 Mitarbeiter.
                    </p>
                    <div className="flex items-center text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full w-fit">
                      <Zap className="h-4 w-4 mr-2" />
                      <span>Entwicklung erster KI-Algorithmen</span>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=400&text=Tech-Fokus+2017"
                        alt="Expansion ins Tech-Recruiting"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="2019" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 w-fit">
                      2019
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Eröffnung weiterer Standorte</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Mit der Eröffnung neuer Büros in München und Hamburg erweiterte GetExperts seine Präsenz in
                      Deutschland. Die lokale Nähe zu Kunden und Kandidaten ermöglichte es uns, noch persönlichere
                      Beziehungen aufzubauen und regionale Besonderheiten besser zu verstehen.
                    </p>
                    <div className="flex items-center text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full w-fit">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>3 Standorte deutschlandweit</span>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=400&text=Expansion+2019"
                        alt="Eröffnung weiterer Standorte"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="2021" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 w-fit">
                      2021
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Auszeichnung als Top Recruiter</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      GetExperts wurde als einer der führenden Personalvermittler im Tech-Bereich ausgezeichnet. Die
                      Kombination aus technologischer Innovation und menschlicher Expertise wurde besonders
                      hervorgehoben. In diesem Jahr überschritten wir auch die Marke von 300 erfolgreichen
                      Vermittlungen.
                    </p>
                    <div className="flex items-center text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full w-fit">
                      <Award className="h-4 w-4 mr-2" />
                      <span>Top 10 Tech-Recruiter in Deutschland</span>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=400&text=Auszeichnung+2021"
                        alt="Auszeichnung als Top Recruiter"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="heute" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 w-fit">
                      Heute
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Innovation und Wachstum</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Mit über 500 erfolgreichen Vermittlungen und einem Team von mehr als 50 Mitarbeitern setzen wir
                      weiterhin auf Innovation, Qualität und persönliche Betreuung. Unsere KI-gestützten
                      Matching-Algorithmen werden kontinuierlich verbessert, während wir gleichzeitig den menschlichen
                      Aspekt des Recruitings in den Mittelpunkt stellen.
                    </p>
                    <div className="flex items-center text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full w-fit">
                      <Users className="h-4 w-4 mr-2" />
                      <span>50+ Mitarbeiter an 3 Standorten</span>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=400&text=GetExperts+Heute"
                        alt="Innovation und Wachstum"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Locations Section - Premium Design */}
      <section ref={statsRef} className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <Badge className="mb-5 bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-600 border-indigo-100 px-5 py-2 text-sm font-medium rounded-full shadow-sm">
              Unsere Standorte
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
              Wo Sie uns{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  finden
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-gradient-to-r from-indigo-600/40 to-violet-600/40 blur-[2px]"></span>
              </span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Mit Büros in mehreren deutschen Städten sind wir immer in Ihrer Nähe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                city: "Berlin",
                address: "Expertstraße 123, 10115 Berlin",
                phone: "+49 30 1234567",
                email: "berlin@getexperts.de",
                image: "/placeholder.svg?height=300&width=400&text=Berlin",
              },
              {
                city: "München",
                address: "Talentplatz 45, 80331 München",
                phone: "+49 89 1234567",
                email: "muenchen@getexperts.de",
                image: "/placeholder.svg?height=300&width=400&text=München",
              },
              {
                city: "Hamburg",
                address: "Recruitingallee 78, 20095 Hamburg",
                phone: "+49 40 1234567",
                email: "hamburg@getexperts.de",
                image: "/placeholder.svg?height=300&width=400&text=Hamburg",
              },
            ].map((location, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={location.city}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{location.city}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{location.address}</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center text-gray-700">
                      <span className="text-sm font-semibold w-20">Telefon:</span>
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="text-sm font-semibold w-20">E-Mail:</span>
                      <span>{location.email}</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white">
                      Kontakt aufnehmen
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-3xl p-10 shadow-xl border border-white relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-200/30 rounded-full blur-3xl"></div>

            <div className="text-center relative z-10 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Nicht in Ihrer Nähe?</h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Kein Problem! Wir arbeiten deutschlandweit und sind auch remote für Sie da. Kontaktieren Sie uns für ein
                persönliches Gespräch.
              </p>
            </div>

            <div className="flex justify-center">
              <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-4 rounded-xl shadow-lg shadow-indigo-600/10">
                Termin vereinbaren <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="bg-white border border-gray-100 rounded-3xl p-12 shadow-2xl text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-100/50 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-100/50 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="bg-indigo-50 p-3 rounded-xl shadow-sm">
                  <Sparkles className="h-6 w-6 text-indigo-600" />
                </div>
              </div>

              <h2 className="text-4xl font-bold mb-6 text-gray-900 tracking-tight">
                Bereit, mit uns{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    zusammenzuarbeiten
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-gradient-to-r from-indigo-600/40 to-violet-600/40 blur-[2px]"></span>
                </span>
                ?
              </h2>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Ob als Unternehmen auf der Suche nach Talenten oder als Experte auf der Suche nach neuen
                Herausforderungen – wir sind für Sie da.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link href="/kontakt">
                  <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-6 text-base font-medium rounded-xl shadow-lg shadow-indigo-600/10 hover:shadow-xl hover:shadow-indigo-600/20 transition-all duration-300">
                    Kontakt aufnehmen <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/experten">
                  <Button
                    variant="outline"
                    className="border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 text-indigo-700 px-8 py-6 text-base rounded-xl transition-all duration-300"
                  >
                    Mehr erfahren
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
