"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Award, Calendar, CheckCircle, Clock, MapPin, Quote, Briefcase, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExpertSuccessStory() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-violet-100/40 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-6 py-2 text-sm font-medium rounded-full mb-4 bg-indigo-50 text-indigo-600 border-indigo-100">
              Erfolgsgeschichte
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight"
          >
            Von der Bewerbung zum{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Traumjob
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-gradient-to-r from-indigo-600/40 to-violet-600/40 blur-[2px]"></span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Wie Thomas seinen Weg vom Entwickler zum Tech Lead bei einem führenden Unternehmen gefunden hat
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left column - Profile and stats */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-indigo-600 to-violet-600 h-32 relative">
                  <div className="absolute -bottom-16 inset-x-0 flex justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
                      <Image
                        src="/placeholder.svg?height=128&width=128&text=TK"
                        alt="Thomas Krüger"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-20 p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Thomas Krüger</h3>
                  <p className="text-indigo-600 font-medium mb-4">Senior Frontend Developer → Tech Lead</p>

                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm">Berlin, Deutschland</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Briefcase className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm">8 Jahre Berufserfahrung</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm">Vermittelt im März 2023</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6 pb-2">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Expertise</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {["React", "TypeScript", "Next.js", "Node.js", "UI/UX", "Team Leadership"].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Vermittlungszeit</p>
                      <p className="text-lg font-bold text-gray-900">3 Wochen</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <LineChart className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Gehaltserhöhung</p>
                      <p className="text-lg font-bold text-gray-900">+35%</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column - Story */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Quote className="h-5 w-5 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Thomas' Geschichte</h3>
                    </div>

                    <p className="text-gray-700 italic mb-6">
                      "Nach 5 Jahren als Frontend-Entwickler wollte ich den nächsten Schritt in meiner Karriere gehen,
                      aber ich war unsicher, wie ich meine Führungsqualitäten unter Beweis stellen konnte. GetExperts
                      hat nicht nur den perfekten Job für mich gefunden, sondern mich auch durch den gesamten Prozess
                      begleitet."
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* Timeline items */}
                    <div className="relative pl-8 border-l-2 border-indigo-200">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Die Herausforderung</h4>
                      <p className="text-gray-700 mb-4">
                        Thomas war ein erfahrener Frontend-Entwickler, der nach neuen Herausforderungen suchte. Er
                        wollte in eine Führungsposition wechseln, hatte aber Schwierigkeiten, Unternehmen zu finden, die
                        ihm diese Chance geben würden, ohne vorherige Führungserfahrung.
                      </p>
                    </div>

                    <div className="relative pl-8 border-l-2 border-indigo-200">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Der Prozess mit GetExperts</h4>
                      <p className="text-gray-700 mb-4">
                        Nach einem ausführlichen Erstgespräch erkannte unser Recruiter Thomas' Potenzial und entwickelte
                        eine Strategie, um seine Führungsqualitäten hervorzuheben. Wir bereiteten ihn intensiv auf
                        Interviews vor und stellten ihn gezielt Unternehmen vor, die nach aufstrebenden Führungskräften
                        suchten.
                      </p>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Persönliches Coaching für Führungskompetenz-Interviews</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Optimierung des Lebenslaufs für Tech Lead Positionen</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Vorstellung bei 4 passenden Unternehmen</span>
                        </li>
                      </ul>
                    </div>

                    <div className="relative pl-8 border-l-2 border-indigo-200">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Das Ergebnis</h4>
                      <p className="text-gray-700 mb-4">
                        Innerhalb von nur 3 Wochen erhielt Thomas ein Angebot als Tech Lead bei einem wachstumsstarken
                        Scale-up in Berlin. Die Position bot ihm nicht nur die gewünschte Führungsverantwortung, sondern
                        auch eine Gehaltserhöhung von 35% und die Möglichkeit, mit neuesten Technologien zu arbeiten.
                      </p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mt-8 bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                    <div className="flex items-center gap-4 mb-4">
                      <Award className="h-6 w-6 text-indigo-600" />
                      <h4 className="text-lg font-bold text-gray-900">Ein Jahr später</h4>
                    </div>
                    <p className="text-gray-700 italic">
                      "Ein Jahr nach meinem Wechsel leite ich jetzt ein Team von 8 Entwicklern und habe maßgeblich zur
                      Neugestaltung der Produktarchitektur beigetragen. GetExperts hat nicht nur einen Job für mich
                      gefunden, sondern mir geholfen, meine Karriere auf die nächste Stufe zu heben. Die persönliche
                      Betreuung und das tiefe Verständnis für meine Ziele haben den entscheidenden Unterschied gemacht."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Bereit für deine eigene Erfolgsgeschichte?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#upload-cv">
                <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-6 text-base font-medium rounded-xl shadow-lg shadow-indigo-600/10 hover:shadow-xl hover:shadow-indigo-600/20 transition-all duration-300">
                  Jetzt bewerben <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/success-stories">
                <Button
                  variant="outline"
                  className="border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 text-indigo-700 px-8 py-6 text-base rounded-xl transition-all duration-300"
                >
                  Weitere Erfolgsgeschichten
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
