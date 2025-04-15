"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Nur auf Client-Seite ausführen
    if (typeof window === "undefined") return

    // Popup nicht anzeigen, wenn es bereits gezeigt wurde
    if (hasShown) return

    // Funktion zum Erkennen der Mausbewegung
    const handleMouseLeave = (e: MouseEvent) => {
      // Wenn die Maus den oberen Rand des Viewports verlässt
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true)
        setHasShown(true)
      }
    }

    // Event-Listener hinzufügen
    document.addEventListener("mouseleave", handleMouseLeave)

    // Timeout als Fallback, falls der Benutzer die Maus nicht nach oben bewegt
    const timeout = setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true)
        setHasShown(true)
      }
    }, 60000) // 60 Sekunden

    // Cleanup
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timeout)
    }
  }, [hasShown])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hier würde die E-Mail-Verarbeitung stattfinden
    console.log("E-Mail submitted:", email)
    setShowPopup(false)
  }

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-[#12121c] border border-white/10 rounded-xl overflow-hidden shadow-2xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header mit Gradient */}
            <div className="bg-gradient-to-r from-[#6246ea] to-[#5438d5] py-3 px-6 flex justify-between items-center">
              <h3 className="text-white font-bold">Exklusives Angebot</h3>
              <button onClick={() => setShowPopup(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#6246ea]">
                  <Image
                    src="/placeholder.svg?height=96&width=96&text=Expert"
                    alt="Recruiting Expert"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold mb-2">Warten Sie!</h4>
                  <p className="text-white/80">
                    Erhalten Sie unseren exklusiven Recruiting-Guide mit bewährten Strategien zur Gewinnung von
                    Top-Talenten.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#6246ea] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Bewährte Strategien zur Kandidatengewinnung</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#6246ea] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Tipps zur Optimierung Ihrer Stellenanzeigen</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#6246ea] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Checkliste für erfolgreiche Bewerbungsgespräche</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full px-4 py-3 bg-[#16161f] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6246ea] focus:border-[#6246ea]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-[#6246ea] hover:bg-[#5438d5] text-white py-3">
                  Jetzt Guide herunterladen <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-white/50 text-center">
                  Wir respektieren Ihre Privatsphäre. Sie können sich jederzeit abmelden.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
