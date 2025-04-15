"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Users,
  CheckCircle,
  Clock,
  Calendar,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  Briefcase,
  Award,
} from "lucide-react"

// Schritte im Bewerbungsprozess
const applicationSteps = [
  {
    id: 1,
    title: "Profil erstellen",
    description: "Erstellen Sie Ihr persönliches Profil und laden Sie Ihren Lebenslauf hoch.",
    icon: <FileText className="h-6 w-6" />,
    details: [
      "Persönliche Daten und Kontaktinformationen",
      "Berufserfahrung und Ausbildung",
      "Skills und Fachkenntnisse",
      "Lebenslauf-Upload (PDF, Word oder LinkedIn-Profil)",
    ],
    timeframe: "5-10 Minuten",
    tips: "Achten Sie auf Vollständigkeit und Aktualität Ihrer Angaben. Ein vollständiges Profil erhöht Ihre Chancen auf passende Job-Matches.",
  },
  {
    id: 2,
    title: "Persönliches Gespräch",
    description: "Wir führen ein erstes Gespräch, um Ihre Wünsche und Qualifikationen besser zu verstehen.",
    icon: <MessageSquare className="h-6 w-6" />,
    details: [
      "Telefonisches oder Video-Gespräch mit einem Recruiter",
      "Besprechung Ihrer Karriereziele und Erwartungen",
      "Klärung offener Fragen zu Ihrem Profil",
      "Vorstellung passender offener Positionen",
    ],
    timeframe: "30-45 Minuten",
    tips: "Bereiten Sie sich auf Fragen zu Ihren Karrierezielen und Gehaltsvorstellungen vor. Nutzen Sie die Gelegenheit, um auch Ihre Fragen zu stellen.",
  },
  {
    id: 3,
    title: "Passende Jobs finden",
    description: "Wir suchen für Sie die besten Jobs, die zu Ihren Fähigkeiten und Wünschen passen.",
    icon: <Briefcase className="h-6 w-6" />,
    details: [
      "Analyse Ihres Profils und Ihrer Präferenzen",
      "Matching mit offenen Positionen in unserem Netzwerk",
      "Vorstellung von passenden Unternehmen und Positionen",
      "Gemeinsame Auswahl der interessantesten Optionen",
    ],
    timeframe: "1-2 Wochen",
    tips: "Bleiben Sie offen für verschiedene Optionen. Manchmal passen auch Positionen, die auf den ersten Blick nicht Ihren Vorstellungen entsprechen.",
  },
  {
    id: 4,
    title: "Bewerbungsvorbereitung",
    description: "Wir unterstützen Sie bei der Vorbereitung auf Ihre Bewerbungsgespräche.",
    icon: <Calendar className="h-6 w-6" />,
    details: [
      "Optimierung Ihrer Bewerbungsunterlagen",
      "Vorbereitung auf typische Interviewfragen",
      "Informationen zum Unternehmen und zur Position",
      "Tipps zur Selbstpräsentation und Gehaltsverhandlung",
    ],
    timeframe: "1-3 Tage",
    tips: "Recherchieren Sie das Unternehmen gründlich und bereiten Sie eigene Fragen vor. Eine gute Vorbereitung zeigt Ihr Interesse und Ihre Professionalität.",
  },
  {
    id: 5,
    title: "Vorstellungsgespräche",
    description: "Wir koordinieren die Termine und begleiten Sie durch den gesamten Prozess.",
    icon: <Users className="h-6 w-6" />,
    details: [
      "Terminkoordination mit dem Unternehmen",
      "Begleitung während des gesamten Interviewprozesses",
      "Feedback-Einholung nach jedem Gespräch",
      "Unterstützung bei Folgegesprächen",
    ],
    timeframe: "1-4 Wochen",
    tips: "Holen Sie nach jedem Gespräch Feedback ein und reflektieren Sie Ihre Performance. So können Sie sich kontinuierlich verbessern.",
  },
  {
    id: 6,
    title: "Vertragsabschluss",
    description: "Wir unterstützen Sie bei den Vertragsverhandlungen und beim erfolgreichen Abschluss.",
    icon: <Award className="h-6 w-6" />,
    details: [
      "Beratung zu Vertragskonditionen und Gehaltsverhandlungen",
      "Vermittlung zwischen Ihnen und dem Unternehmen",
      "Unterstützung bei der Vertragsunterzeichnung",
      "Begleitung bis zum erfolgreichen Onboarding",
    ],
    timeframe: "1-2 Wochen",
    tips: "Scheuen Sie sich nicht, über Vertragsdetails zu verhandeln. Wir unterstützen Sie dabei, die bestmöglichen Konditionen zu erzielen.",
  },
]

export default function ApplicationProcess() {
  const [currentStep, setCurrentStep] = useState(1)
  const [direction, setDirection] = useState(0)

  const step = applicationSteps.find((s) => s.id === currentStep) || applicationSteps[0]

  const nextStep = () => {
    if (currentStep < applicationSteps.length) {
      setDirection(1)
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1)
      setCurrentStep((prev) => prev - 1)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Für Bewerber</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ihr Weg zum{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
            neuen Job
          </span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Wir begleiten Sie Schritt für Schritt auf Ihrem Weg zum Traumjob. Erfahren Sie, wie unser Bewerbungsprozess
          abläuft.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between mb-2">
          {applicationSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => {
                setDirection(step.id > currentStep ? 1 : -1)
                setCurrentStep(step.id)
              }}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step.id === currentStep
                  ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white"
                  : step.id < currentStep
                    ? "bg-primary/20 text-primary"
                    : "bg-white/10 text-white/40"
              } transition-all duration-300`}
            >
              {step.id}
            </button>
          ))}
        </div>
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-600 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (applicationSteps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="glass-card p-8 relative overflow-hidden min-h-[400px]">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/10 rounded-full filter blur-3xl opacity-30 -z-10"></div>

        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Left column: Step details */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center mr-4 text-white">
                  {step.icon}
                </div>
                <div>
                  <Badge className="mb-1 bg-primary/10 text-primary border-primary/20">Schritt {step.id}</Badge>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
              </div>

              <p className="text-white/80 mb-6">{step.description}</p>

              <div className="mb-6">
                <h4 className="font-medium mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Was passiert in diesem Schritt?
                </h4>
                <ul className="space-y-2 pl-7">
                  {step.details.map((detail, index) => (
                    <li key={index} className="text-white/70 list-disc">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center mb-6 bg-white/5 rounded-lg p-4">
                <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Zeitrahmen</h4>
                  <p className="text-white/70 text-sm">{step.timeframe}</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-500/10 to-violet-600/10 border border-primary/20 rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  Tipp
                </h4>
                <p className="text-white/70 text-sm">{step.tips}</p>
              </div>
            </div>

            {/* Right column: Illustration */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-violet-600/20 rounded-full filter blur-3xl opacity-30"></div>
                <div className="relative h-full flex items-center justify-center">
                  {/* Here you would typically have an illustration or image for each step */}
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-r from-indigo-500/30 to-violet-600/30 rounded-full flex items-center justify-center mb-4">
                      {step.icon && <div className="text-primary w-16 h-16">{step.icon}</div>}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-white/60 text-sm">
                      Schritt {step.id} von {applicationSteps.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`border-white/20 hover:bg-white/5 ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Zurück
          </Button>

          <Button
            onClick={nextStep}
            disabled={currentStep === applicationSteps.length}
            className={`bg-primary hover:bg-primary/90 ${currentStep === applicationSteps.length ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {currentStep === applicationSteps.length ? "Abgeschlossen" : "Weiter"}
            {currentStep !== applicationSteps.length && <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-white/70 mb-6">
          Bereit, Ihre Karriere auf die nächste Stufe zu heben? Starten Sie jetzt Ihren Bewerbungsprozess mit
          GetExperts.
        </p>
        <Button className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white">
          Jetzt bewerben
        </Button>
      </div>
    </div>
  )
}
