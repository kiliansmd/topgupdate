"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, Share2, Bookmark, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DetailModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  subtitle?: string
  headerImage?: string
  children: ReactNode
  showBackButton?: boolean
  onBack?: () => void
  actions?: ReactNode
  fullWidth?: boolean
}

export function DetailModal({
  isOpen,
  onClose,
  title,
  subtitle,
  headerImage,
  children,
  showBackButton = false,
  onBack,
  actions,
  fullWidth = false,
}: DetailModalProps) {
  const [isMounted, setIsMounted] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle ESC key press
  useEffect(() => {
    setIsMounted(true)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative max-h-[90vh] overflow-hidden rounded-2xl bg-[#0f0f1a] border border-white/10 shadow-2xl ${
              fullWidth ? "w-full max-w-7xl" : "w-full max-w-4xl"
            }`}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-50 rounded-full bg-black/20 p-2 text-white/80 backdrop-blur-md transition-colors hover:bg-black/40 hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header with image */}
            {headerImage && (
              <div className="relative h-[30vh] w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${headerImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

                {/* Back button */}
                {showBackButton && (
                  <button
                    onClick={onBack}
                    className="absolute left-4 top-4 z-10 flex items-center rounded-full bg-black/20 px-3 py-2 text-sm text-white/80 backdrop-blur-md transition-colors hover:bg-black/40 hover:text-white"
                  >
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    Zurück
                  </button>
                )}

                {/* Title overlay */}
                {title && (
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    {subtitle && <p className="mb-2 text-sm font-medium text-white/70">{subtitle}</p>}
                    <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
                  </div>
                )}
              </div>
            )}

            {/* Title without image */}
            {!headerImage && title && (
              <div className="border-b border-white/10 p-6">
                {showBackButton && (
                  <button onClick={onBack} className="mb-4 flex items-center text-sm text-white/70 hover:text-white">
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    Zurück
                  </button>
                )}

                {subtitle && <p className="mb-2 text-sm font-medium text-white/70">{subtitle}</p>}
                <h2 className="text-2xl font-bold text-white">{title}</h2>
              </div>
            )}

            {/* Content */}
            <div className="custom-scrollbar max-h-[calc(90vh-var(--header-height))] overflow-y-auto">
              <div className="p-6">{children}</div>
            </div>

            {/* Actions */}
            {actions && (
              <div className="sticky bottom-0 border-t border-white/10 bg-[#0f0f1a]/80 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between">{actions}</div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

// Vordefinierte Aktionsleisten für verschiedene Anwendungsfälle
export function BlogArticleActions({ onShare, onSave }: { onShare?: () => void; onSave?: () => void }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={onShare}>
          <Share2 className="mr-2 h-4 w-4" />
          Teilen
        </Button>
        <Button variant="outline" size="sm" onClick={onSave}>
          <Bookmark className="mr-2 h-4 w-4" />
          Speichern
        </Button>
      </div>
      <Button size="sm">
        Weiterlesen
        <ArrowUpRight className="ml-2 h-4 w-4" />
      </Button>
    </>
  )
}

export function IndustryDetailActions({ onContact }: { onContact?: () => void }) {
  return (
    <>
      <div></div>
      <Button onClick={onContact}>
        Kontakt aufnehmen
        <ArrowUpRight className="ml-2 h-4 w-4" />
      </Button>
    </>
  )
}
