"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { Heart, Target, Users, Lightbulb, ArrowRight, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

// Unternehmenswerte
const companyValues = [
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Menschlichkeit",
    description: "Wir setzen auf echte Beziehungen und verstehen die Bedürfnisse unserer Kunden und Kandidaten.",
  },
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Präzision",
    description:
      "Wir liefern maßgeschneiderte Lösungen durch tiefes Verständnis der Anforderungen und Branchenkenntnis.",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: "Innovation",
    description:
      "Wir nutzen modernste Technologien und Methoden, um die besten Talente zu identifizieren und zu gewinnen.",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Integrität",
    description: "Wir handeln transparent, ehrlich und halten, was wir versprechen – ohne Kompromisse.",
  },
]

// Unternehmenseinblicke
const companyInsights = [
  {
    image: "/placeholder.svg?height=400&width=600&text=Team",
    title: "Unser Team",
    description: "Ein vielfältiges Team aus Recruiting-Experten mit jahrelanger Branchenerfahrung.",
  },
  {
    image: "/placeholder.svg?height=400&width=600&text=Office",
    title: "Unser Arbeitsumfeld",
    description: "Modern, inspirierend und auf Zusammenarbeit ausgerichtet – so arbeiten wir täglich.",
  },
  {
    image: "/placeholder.svg?height=400&width=600&text=Process",
    title: "Unsere Methodik",
    description: "Datengestützte Entscheidungen kombiniert mit menschlicher Expertise für optimale Ergebnisse.",
  },
]

export default function CompanySection() {
  const missionRef = useRef(null)
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 })

  const valuesRef = useRef(null)
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.3 })

  const insightsRef = useRef(null)
  const isInsightsInView = useInView(insightsRef, { once: true, amount: 0.3 })

  return (
    <section className="py-20 relative overflow-hidden bg-[#0d0d14]">
      {/* Subtiler Hintergrund mit Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent opacity-30"></div>

      {/* Dezente geometrische Formen im Hintergrund */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl"></div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
            Über GetExperts
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wir verbinden <span className="text-primary">Talente</span> mit{" "}
            <span className="text-primary">Visionen</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Als spezialisierte Recruiting-Agentur setzen wir neue Maßstäbe bei der Vermittlung von Fachkräften in der
            Tech-Branche.
          </p>
        </div>

        {/* Mission & Vision */}
        <div
          ref={missionRef}
          className="bg-black/20 border border-white/10 rounded-lg p-8 mb-16 transition-all duration-700"
          style={{
            opacity: isMissionInView ? 1 : 0,
            transform: isMissionInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Unsere Mission</h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Wir machen Recruiting menschlicher und effektiver. Durch tiefes Verständnis der Technologiebranche und
                ihrer Anforderungen schaffen wir perfekte Matches zwischen Unternehmen und Talenten. Wir glauben daran,
                dass die richtige Person am richtigen Platz nicht nur Unternehmen erfolgreicher macht, sondern auch
                Menschen zu erfüllenden Karrieren verhilft.
              </p>
              <div className="flex items-center text-sm text-primary">
                <Clock className="h-4 w-4 mr-2" />
                <span>Seit 2015 am Markt</span>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Unsere Vision</h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Wir streben danach, der vertrauenswürdigste Partner für Tech-Recruiting in Europa zu werden. Unsere
                Vision ist eine Arbeitswelt, in der Unternehmen und Talente durch präzise Vermittlung ihr volles
                Potenzial entfalten können. Wir nutzen modernste Technologien und menschliche Expertise, um die Zukunft
                des Recruitings zu gestalten und neue Standards zu setzen.
              </p>
              <div className="flex items-center text-sm text-primary">
                <Users className="h-4 w-4 mr-2" />
                <span>500+ erfolgreiche Vermittlungen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Unternehmenswerte */}
        <div
          ref={valuesRef}
          className="mb-16 transition-all duration-700"
          style={{
            opacity: isValuesInView ? 1 : 0,
            transform: isValuesInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-3">Unsere Werte</h3>
            <p className="text-white/70 max-w-lg mx-auto">
              Diese Grundsätze leiten unser tägliches Handeln und definieren, wer wir sind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="bg-black/20 border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-primary/30 hover:bg-black/30"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isValuesInView ? 1 : 0,
                  transform: isValuesInView ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-white/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Unternehmenseinblicke */}
        <div
          ref={insightsRef}
          className="transition-all duration-700"
          style={{
            opacity: isInsightsInView ? 1 : 0,
            transform: isInsightsInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-3">Einblicke in GetExperts</h3>
            <p className="text-white/70 max-w-lg mx-auto">
              Lernen Sie unser Unternehmen, unsere Kultur und unsere Arbeitsweise kennen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyInsights.map((insight, index) => (
              <div
                key={index}
                className="group bg-black/20 border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/30"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isInsightsInView ? 1 : 0,
                  transform: isInsightsInView ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg font-bold mb-1">{insight.title}</h4>
                    <p className="text-white/70 text-sm">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              Mehr über uns erfahren <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
