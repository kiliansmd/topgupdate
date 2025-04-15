"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ExpertFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Welche Vorteile bietet GetExperts für Kandidaten?",
      answer:
        "Als Kandidat profitierst du von unserem umfangreichen Netzwerk zu attraktiven Arbeitgebern und erhältst Zugang zu exklusiven Stellenangeboten, die nicht öffentlich ausgeschrieben sind. Wir bieten eine persönliche Karriereberatung, bereiten dich optimal auf Vorstellungsgespräche vor und unterstützen dich bei Gehaltsverhandlungen. Unser Service ist für Kandidaten komplett kostenfrei. Wir begleiten dich während des gesamten Bewerbungsprozesses und stehen dir auch nach der erfolgreichen Vermittlung als Ansprechpartner zur Verfügung.",
    },
    {
      question: "Wie kann ich mich als Kandidat bei GetExperts bewerben?",
      answer:
        "Du kannst dich auf unserer Website über das Bewerbungsformular registrieren oder uns deinen Lebenslauf direkt per E-Mail an bewerbung@getexperts.de senden. Nach Eingang deiner Unterlagen prüfen wir diese und melden uns innerhalb von 48 Stunden bei dir. Bei passenden offenen Positionen stellen wir dir diese vor. Alternativ nehmen wir dich in unsere Datenbank auf und kontaktieren dich, sobald eine passende Position verfügbar ist. Wir behandeln deine Daten selbstverständlich vertraulich und geben diese nur nach deiner ausdrücklichen Zustimmung an potenzielle Arbeitgeber weiter.",
    },
    {
      question: "Bietet GetExperts auch Unterstützung bei der Vorbereitung auf Vorstellungsgespräche?",
      answer:
        "Ja, wir bereiten dich umfassend auf Vorstellungsgespräche vor. Dazu gehören detaillierte Informationen zum Unternehmen und zur Position, Tipps zu typischen Fragen und Hinweise zur optimalen Selbstpräsentation. Bei Bedarf führen wir auch Übungsgespräche durch und geben Feedback zu deiner Präsentation. Nach dem Gespräch holen wir Feedback vom Unternehmen ein und besprechen mit dir die nächsten Schritte. Unser Ziel ist es, dich optimal zu unterstützen, damit du im Vorstellungsgespräch überzeugen kannst.",
    },
    {
      question: "Werden meine Bewerbungsunterlagen ohne meine Zustimmung weitergegeben?",
      answer:
        "Nein, wir geben deine Bewerbungsunterlagen niemals ohne deine ausdrückliche Zustimmung weiter. Bevor wir dein Profil an ein Unternehmen senden, informieren wir dich detailliert über die Position und das Unternehmen und holen deine Einwilligung ein. Du behältst jederzeit die volle Kontrolle über deine Daten und kannst deine Einwilligung jederzeit widerrufen. Diese strikte Vertraulichkeit ist ein zentraler Bestandteil unserer Arbeitsweise und unseres Verständnisses von professionellem Recruiting.",
    },
    {
      question: "Wie lange dauert der Vermittlungsprozess durchschnittlich?",
      answer:
        "Die Dauer des Vermittlungsprozesses variiert je nach Position und Anforderungen. Für Standardpositionen können wir in der Regel innerhalb von 2-4 Wochen passende Stellen präsentieren und den gesamten Prozess bis zum Vertragsabschluss in 4-6 Wochen abschließen. Bei hochspezialisierten Positionen kann der Prozess etwas länger dauern. Wir arbeiten stets effizient, ohne dabei Kompromisse bei der Qualität einzugehen, und halten dich während des gesamten Prozesses auf dem Laufenden.",
    },
    {
      question: "Entstehen für mich als Bewerber Kosten?",
      answer:
        "Nein, für dich als Bewerber entstehen keinerlei Kosten. Unser Service wird vollständig von den Unternehmen finanziert, die uns mit der Suche nach passenden Kandidaten beauftragen. Du profitierst von unserer umfassenden Beratung und Unterstützung, ohne dafür bezahlen zu müssen. Das ist ein wesentlicher Vorteil unseres Geschäftsmodells und ermöglicht es uns, uns voll und ganz auf deine Bedürfnisse und Karriereziele zu konzentrieren.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="mb-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
            onClick={() => toggleFaq(index)}
          >
            <span className="font-bold text-gray-900">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-indigo-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
            )}
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
