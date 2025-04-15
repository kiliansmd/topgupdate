"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { IndustryDetailModal } from "./industry-detail-modal"
import { useModal } from "@/hooks/use-modal"

interface IndustryCardProps {
  industry: {
    id: number
    name: string
    description: string
    image: string
    keyPoints: string[]
    stats: {
      placements: string
      successRate: string
      avgTimeToHire: string
      clientSatisfaction: string
    }
    clients: {
      name: string
      logo: string
    }[]
  }
}

export function IndustryCard({ industry }: IndustryCardProps) {
  const { isOpen, modalData, openModal, closeModal } = useModal()

  const handleOpenIndustry = () => {
    openModal(industry)
  }

  const handleContact = () => {
    // Hier könnte die Kontaktlogik implementiert werden
    closeModal()
    // Weiterleitung zur Kontaktseite oder Öffnen eines Kontaktformulars
    window.location.href = "/kontakt?branche=" + encodeURIComponent(industry.name)
  }

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className="glass-card group cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary/30"
        onClick={handleOpenIndustry}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={industry.image || "/placeholder.svg"}
            alt={industry.name}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-bold text-white">{industry.name}</h3>
          </div>
        </div>
        <div className="p-4">
          <p className="mb-4 text-sm text-white/70 line-clamp-2">{industry.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-xs text-white/50">{industry.stats.placements} Vermittlungen</span>
            </div>
            <span className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
              Details
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* Industry Detail Modal */}
      <IndustryDetailModal isOpen={isOpen} onClose={closeModal} industry={modalData} onContact={handleContact} />
    </>
  )
}
