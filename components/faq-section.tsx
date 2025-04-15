"use client"

import React, { useState, useMemo } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { Search, ChevronRight, PlusCircle, Shield, Users, Briefcase, CreditCard, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from '@/components/ui/input'
import { SearchIcon, XIcon } from 'lucide-react'

// FAQ Typen definieren
type FAQItem = {
  question: string;
  answer: string;
};

type FAQData = {
  [category: string]: FAQItem[];
};

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("allgemein")

  // FAQ-Kategorien
  const categories = [
    { id: "allgemein", label: "Allgemein", icon: <PlusCircle className="h-4 w-4 text-white" /> },
    { id: "prozess", label: "Prozess", icon: <Clock className="h-4 w-4 text-white" /> },
    { id: "kosten", label: "Kosten", icon: <CreditCard className="h-4 w-4 text-white" /> },
    { id: "unternehmen", label: "Für Unternehmen", icon: <Briefcase className="h-4 w-4 text-white" /> },
    { id: "kandidaten", label: "Für Kandidaten", icon: <Users className="h-4 w-4 text-white" /> },
    { id: "datenschutz", label: "Datenschutz", icon: <Shield className="h-4 w-4 text-white" /> },
  ]

  // Erweiterte FAQ-Daten mit Kategorien
  const faqData: FAQData = {
    allgemein: [
      {
        question: "Wie funktioniert das erfolgsbasierte Vergütungsmodell?",
        answer:
          "Bei unserem erfolgsbasierten Modell zahlen Sie nur, wenn wir erfolgreich einen passenden Kandidaten für Sie vermitteln. Es fallen keine Vorabkosten oder monatlichen Gebühren an. Die Vergütung wird erst fällig, wenn der Kandidat den Arbeitsvertrag unterschrieben hat und seine Tätigkeit bei Ihnen aufnimmt. So tragen wir das Risiko gemeinsam mit Ihnen und haben ein echtes Interesse an Ihrem Erfolg.",
      },
      {
        question: "Was umfasst die Nachbesetzungsgarantie?",
        answer:
          "Unsere Nachbesetzungsgarantie greift, wenn ein von uns vermittelter Kandidat innerhalb der ersten 6 Monate das Unternehmen verlässt. In diesem Fall suchen wir kostenlos einen Ersatzkandidaten für Sie. Diese Garantie unterstreicht unser Vertrauen in die Qualität unserer Vermittlungen und bietet Ihnen maximale Sicherheit bei Ihrer Personalentscheidung.",
      },
      {
        question: "Wie lange dauert der Recruiting-Prozess durchschnittlich?",
        answer:
          "Die Dauer des Recruiting-Prozesses variiert je nach Position und Anforderungen. Für Standardpositionen können wir in der Regel innerhalb von 2-4 Wochen geeignete Kandidaten präsentieren. Bei hochspezialisierten Positionen kann der Prozess 4-8 Wochen in Anspruch nehmen. Wir arbeiten stets effizient, ohne dabei Kompromisse bei der Qualität einzugehen. Durch unsere umfangreiche Datenbank und unser Netzwerk können wir oft schneller als der Branchendurchschnitt passende Kandidaten finden.",
      },
    ],
    prozess: [
      {
        question: "Wie läuft der Recruiting-Prozess bei GetExperts ab?",
        answer:
          "Unser Recruiting-Prozess umfasst mehrere Schritte: 1) Bedarfsanalyse: Wir analysieren Ihre Anforderungen und erstellen ein maßgeschneidertes Konzept. 2) Kandidatensuche: Wir identifizieren die besten Talente durch unser umfangreiches Netzwerk und verschiedene Sourcing-Kanäle. 3) Qualifizierung: Wir prüfen die Kandidaten auf fachliche und persönliche Eignung durch strukturierte Interviews und Assessments. 4) Präsentation: Wir stellen Ihnen nur vorqualifizierte Kandidaten vor, die zu Ihren Anforderungen passen. 5) Begleitung: Wir unterstützen Sie während des gesamten Einstellungsprozesses bis zum erfolgreichen Vertragsabschluss.",
      },
      {
        question: "Wie werden Kandidaten ausgewählt und qualifiziert?",
        answer:
          "Unsere Kandidatenauswahl basiert auf einem mehrstufigen Qualifizierungsprozess. Zunächst identifizieren wir potenzielle Kandidaten durch Active Sourcing, unsere Datenbank und unser Netzwerk. Anschließend führen wir ausführliche Interviews durch, um fachliche Qualifikationen und persönliche Eignung zu prüfen. Bei Bedarf setzen wir spezifische Assessments und Fachtests ein. Nur Kandidaten, die alle Kriterien erfüllen und optimal zum Unternehmen passen, werden Ihnen vorgestellt. Dieser gründliche Prozess stellt sicher, dass Sie nur hochqualifizierte und passende Kandidaten kennenlernen.",
      },
      {
        question: "Wie viele Kandidaten werden typischerweise vorgestellt?",
        answer:
          "In der Regel stellen wir Ihnen 3-5 sorgfältig ausgewählte Kandidaten vor, die alle Ihre Anforderungen erfüllen. Unser Ziel ist nicht, möglichst viele Lebensläufe zu senden, sondern Ihnen nur die wirklich passenden Kandidaten zu präsentieren. Dies spart Ihnen Zeit und Ressourcen im Auswahlprozess. Bei Bedarf können wir natürlich weitere Kandidaten suchen, falls die ersten Vorstellungen nicht zu einer Einstellung führen.",
      },
    ],
    kosten: [
      {
        question: "Wie berechnet sich die Vergütung bei erfolgreicher Vermittlung?",
        answer:
          "Unsere Vergütung berechnet sich als Prozentsatz des Jahresbruttogehalts des vermittelten Kandidaten. Der genaue Prozentsatz hängt von der Komplexität der Position und dem vereinbarten Serviceumfang ab und liegt typischerweise zwischen 20% und 30%. Die Vergütung wird erst fällig, wenn der Kandidat seinen Arbeitsvertrag unterschrieben hat und seine Tätigkeit bei Ihnen aufnimmt. Wir bieten transparente Preismodelle ohne versteckte Kosten oder Zusatzgebühren.",
      },
      {
        question: "Gibt es Vorabkosten oder monatliche Gebühren?",
        answer:
          "Nein, bei unserem erfolgsbasierten Modell fallen keine Vorabkosten oder monatlichen Gebühren an. Sie zahlen nur im Erfolgsfall, wenn wir einen passenden Kandidaten für Sie vermittelt haben und dieser seine Tätigkeit bei Ihnen aufgenommen hat. Dieses Modell minimiert Ihr finanzielles Risiko und stellt sicher, dass wir ein echtes Interesse an Ihrem Erfolg haben.",
      },
      {
        question: "Welche Zahlungsbedingungen gelten bei erfolgreicher Vermittlung?",
        answer:
          "Bei erfolgreicher Vermittlung wird unsere Vergütung mit Antritt des Kandidaten fällig. Die Rechnung wird mit einem Zahlungsziel von 14 Tagen gestellt. Bei längerfristigen Kooperationen oder mehreren Positionen bieten wir auch individuelle Zahlungsmodelle an. Sprechen Sie uns gerne an, um ein für Sie passendes Modell zu vereinbaren.",
      },
    ],
    unternehmen: [
      {
        question: "In welchen Branchen und Regionen sind Sie tätig?",
        answer:
          "Wir sind deutschlandweit tätig und haben uns auf die Branchen IT, Engineering, Finance, Marketing und Healthcare spezialisiert. Innerhalb dieser Branchen decken wir sowohl Fach- als auch Führungspositionen ab. Bei Bedarf können wir auch in anderen Branchen und international rekrutieren. Unsere Recruiter sind Experten in ihren jeweiligen Fachbereichen und verstehen die spezifischen Anforderungen und Herausforderungen der verschiedenen Branchen.",
      },
      {
        question: "Wie unterscheiden Sie sich von anderen Recruiting-Agenturen?",
        answer:
          "Wir unterscheiden uns durch unser erfolgsbasiertes Vergütungsmodell, unsere Nachbesetzungsgarantie und unseren spezialisierten Ansatz. Unsere Recruiter sind Experten in ihren jeweiligen Fachbereichen und verstehen die spezifischen Anforderungen und Herausforderungen. Zudem setzen wir auf langfristige Partnerschaften statt auf kurzfristige Vermittlungserfolge. Wir bieten eine persönliche Betreuung durch feste Ansprechpartner und einen transparenten Prozess mit regelmäßigem Feedback.",
      },
      {
        question: "Können Sie auch bei der Besetzung von Führungspositionen unterstützen?",
        answer:
          "Ja, wir haben umfangreiche Erfahrung in der Besetzung von Führungspositionen bis hin zur C-Level-Ebene. Für Executive Search nutzen wir spezielle Methoden wie Direct Search und verfügen über ein exklusives Netzwerk von Führungskräften. Unsere erfahrenen Senior Consultants betreuen diese Mandate persönlich und mit höchster Diskretion. Wir verstehen die besonderen Anforderungen an Führungskräfte und berücksichtigen neben fachlichen Qualifikationen auch Führungskompetenzen und kulturelle Passung.",
      },
    ],
    kandidaten: [
      {
        question: "Welche Vorteile bietet GetExperts für Kandidaten?",
        answer:
          "Als Kandidat profitieren Sie von unserem umfangreichen Netzwerk zu attraktiven Arbeitgebern und erhalten Zugang zu exklusiven Stellenangeboten, die nicht öffentlich ausgeschrieben sind. Wir bieten eine persönliche Karriereberatung, bereiten Sie optimal auf Vorstellungsgespräche vor und unterstützen Sie bei Gehaltsverhandlungen. Unser Service ist für Kandidaten komplett kostenfrei. Wir begleiten Sie während des gesamten Bewerbungsprozesses und stehen Ihnen auch nach der erfolgreichen Vermittlung als Ansprechpartner zur Verfügung.",
      },
      {
        question: "Wie kann ich mich als Kandidat bei GetExperts bewerben?",
        answer:
          "Sie können sich auf unserer Website über das Bewerbungsformular registrieren oder uns Ihren Lebenslauf direkt per E-Mail an bewerbung@getexperts.de senden. Nach Eingang Ihrer Unterlagen prüfen wir diese und melden uns innerhalb von 48 Stunden bei Ihnen. Bei passenden offenen Positionen stellen wir Ihnen diese vor. Alternativ nehmen wir Sie in unsere Datenbank auf und kontaktieren Sie, sobald eine passende Position verfügbar ist. Wir behandeln Ihre Daten selbstverständlich vertraulich und geben diese nur nach Ihrer ausdrücklichen Zustimmung an potenzielle Arbeitgeber weiter.",
      },
      {
        question: "Bietet GetExperts auch Unterstützung bei der Vorbereitung auf Vorstellungsgespräche?",
        answer:
          "Ja, wir bereiten Sie umfassend auf Vorstellungsgespräche vor. Dazu gehören detaillierte Informationen zum Unternehmen und zur Position, Tipps zu typischen Fragen und Hinweise zur optimalen Selbstpräsentation. Bei Bedarf führen wir auch Übungsgespräche durch und geben Feedback zu Ihrer Präsentation. Nach dem Gespräch holen wir Feedback vom Unternehmen ein und besprechen mit Ihnen die nächsten Schritte. Unser Ziel ist es, Sie optimal zu unterstützen, damit Sie im Vorstellungsgespräch überzeugen können.",
      },
    ],
    datenschutz: [
      {
        question: "Wie werden meine Daten geschützt?",
        answer:
          "Der Schutz Ihrer Daten hat für uns höchste Priorität. Wir sind DSGVO-zertifiziert und halten alle datenschutzrechtlichen Bestimmungen strikt ein. Ihre persönlichen Daten werden verschlüsselt übertragen und auf sicheren Servern in Deutschland gespeichert. Wir geben Ihre Daten nur nach Ihrer ausdrücklichen Zustimmung an potenzielle Arbeitgeber weiter. Unsere Mitarbeiter sind zum Datenschutz geschult und zur Verschwiegenheit verpflichtet. Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer Daten.",
      },
      {
        question: "Werden meine Bewerbungsunterlagen ohne meine Zustimmung weitergegeben?",
        answer:
          "Nein, wir geben Ihre Bewerbungsunterlagen niemals ohne Ihre ausdrückliche Zustimmung weiter. Bevor wir Ihr Profil an ein Unternehmen senden, informieren wir Sie detailliert über die Position und das Unternehmen und holen Ihre Einwilligung ein. Sie behalten jederzeit die volle Kontrolle über Ihre Daten und können Ihre Einwilligung jederzeit widerrufen. Diese strikte Vertraulichkeit ist ein zentraler Bestandteil unserer Arbeitsweise und unseres Verständnisses von professionellem Recruiting.",
      },
      {
        question: "Wie lange werden meine Daten gespeichert?",
        answer:
          "Wir speichern Ihre Daten so lange, wie es für die Erbringung unserer Dienstleistungen erforderlich ist oder Sie uns Ihre Einwilligung gegeben haben. In der Regel beträgt die Speicherdauer 2 Jahre nach dem letzten Kontakt. Sie können jederzeit die Löschung Ihrer Daten beantragen. Nach Ablauf der Speicherfrist oder auf Ihren Wunsch hin werden Ihre Daten vollständig und unwiderruflich gelöscht. Für gesetzlich vorgeschriebene Aufbewahrungsfristen (z.B. steuerrechtliche Dokumente) gelten die entsprechenden gesetzlichen Bestimmungen.",
      },
    ],
  }

  // Filterfunktion für die Suche
  const filteredFaqs = Object.entries(faqData).reduce<FAQData>((acc, [category, questions]) => {
    const filteredQuestions = questions.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    if (filteredQuestions.length > 0) {
      acc[category] = filteredQuestions
    }
    return acc
  }, {});

  // Bestimme, ob Suchergebnisse vorhanden sind
  const hasSearchResults = Object.values(filteredFaqs).some((questions) => questions.length > 0)

  return (
    <section className="py-24 relative overflow-hidden faq-section">
      {/* Hintergrund mit Gradient */}
      <div className="absolute inset-0 bg-[#0d0d14]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-violet-900/5 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#674cff_1px,transparent_1px)] bg-[length:20px_20px] opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Diese FAQ-Sektion sollte als letztes Element vor der CTA-Sektion platziert werden */}
        <div className="max-w-4xl mx-auto text-white">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center px-6 py-2 mb-4 rounded-full bg-[#1e1a3a] border border-white/10 text-white text-sm font-medium"
            >
              Häufig gestellte Fragen
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Haben Sie{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
                Fragen
              </span>
              ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/70 max-w-2xl mx-auto mb-8"
            >
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Dienstleistungen. Falls Ihre Frage nicht
              beantwortet wird, kontaktieren Sie uns gerne direkt.
            </motion.p>

            {/* Suchfeld */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative max-w-xl mx-auto mb-12"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/40" />
              </div>
              <input
                type="text"
                placeholder="Suchen Sie nach Fragen oder Stichworten..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#0f0f1a]/80 backdrop-blur-sm border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-white"
              />
            </motion.div>
          </div>

          {searchQuery ? (
            // Suchergebnisse anzeigen
            <div className="bg-[#0f0f1a]/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 text-white">
              <h3 className="text-xl font-bold mb-6 text-white">
                {hasSearchResults
                  ? `Suchergebnisse für "${searchQuery}"`
                  : `Keine Ergebnisse für "${searchQuery}" gefunden`}
              </h3>

              {hasSearchResults ? (
                Object.entries(filteredFaqs).map(([category, questions]) => (
                  <div key={category} className="mb-8">
                    <h4 className="text-lg font-medium mb-4 flex items-center text-white">
                      {categories.find((c) => c.id === category)?.icon}
                      <span className="ml-2 text-white">{categories.find((c) => c.id === category)?.label}</span>
                    </h4>
                    <Accordion type="single" collapsible className="space-y-4">
                      {questions.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`${category}-${index}`}
                          className="bg-[#0d0d14]/80 border border-white/10 rounded-lg overflow-hidden text-white"
                          data-accordion-item
                        >
                          <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline text-white">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-white">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-white mb-4">
                    Leider konnten wir keine passenden Antworten zu Ihrer Suche finden.
                  </p>
                  <p className="text-white mb-6">
                    Bitte versuchen Sie es mit anderen Suchbegriffen oder kontaktieren Sie uns direkt.
                  </p>
                  <Button className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white">
                    Kontakt aufnehmen <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          ) : (
            // Normale FAQ-Ansicht mit Tabs
            <Tabs defaultValue="allgemein" value={activeTab} onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8 overflow-x-auto pb-2 -mx-4 px-4">
                <TabsList className="bg-[#0f0f1a]/80 border border-white/10 p-1 flex flex-wrap md:flex-nowrap">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 text-sm data-[state=active]:bg-primary/20 data-[state=active]:text-white text-white min-w-[auto] md:min-w-[100px]"
                    >
                      <span className="hidden md:inline">{category.icon}</span>
                      <span className="text-white whitespace-nowrap">{category.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="bg-[#0f0f1a]/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-8 text-white">
                    <Accordion type="single" collapsible className="space-y-4">
                      {faqData[category.id]?.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="bg-[#0d0d14]/80 border border-white/10 rounded-lg overflow-hidden text-white"
                          data-accordion-item
                        >
                          <AccordionTrigger className="px-4 py-3 md:px-6 md:py-4 text-left font-medium hover:no-underline text-white">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-3 md:px-6 md:pb-4 text-white">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}

          {/* Kontaktbereich */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-white mb-4">Haben Sie weitere Fragen?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white">
                Kontakt aufnehmen <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/ueber-uns">
                <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white">
                  Mehr über uns
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
