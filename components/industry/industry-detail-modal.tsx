"use client"

import Image from "next/image"
import { DetailModal, IndustryDetailActions } from "@/components/ui/detail-modal"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Briefcase, TrendingUp } from "lucide-react"

interface IndustryDetail {
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

interface IndustryDetailModalProps {
  isOpen: boolean
  onClose: () => void
  industry: IndustryDetail | null
  onContact: () => void
}

export function IndustryDetailModal({ isOpen, onClose, industry, onContact }: IndustryDetailModalProps) {
  if (!industry) return null

  return (
    <DetailModal
      isOpen={isOpen}
      onClose={onClose}
      headerImage={industry.image}
      title={industry.name}
      subtitle="Branchenexpertise"
      actions={<IndustryDetailActions onContact={onContact} />}
      fullWidth
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="mb-4 text-xl font-bold">Über unsere Expertise in {industry.name}</h3>
          <p className="mb-6 text-white/80 leading-relaxed">{industry.description}</p>

          <h4 className="mb-3 text-lg font-semibold">Unsere Stärken in dieser Branche</h4>
          <ul className="mb-6 space-y-2">
            {industry.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-white/80">{point}</span>
              </li>
            ))}
          </ul>

          <h4 className="mb-4 text-lg font-semibold">Referenzkunden</h4>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {industry.clients.map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg border border-white/10 bg-white/5 p-4 text-center"
              >
                <div className="mb-2 h-12 w-12 overflow-hidden rounded-full bg-white/10">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain p-1"
                  />
                </div>
                <p className="text-sm font-medium">{client.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-4 text-lg font-semibold">Erfolge in Zahlen</h4>

            <div className="space-y-4">
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center">
                    <Briefcase className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm">Vermittlungen</span>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    {industry.stats.placements}
                  </Badge>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm">Erfolgsquote</span>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    {industry.stats.successRate}
                  </Badge>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm">Kundenzufriedenheit</span>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    {industry.stats.clientSatisfaction}
                  </Badge>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="mb-4 text-lg font-semibold">Warum wir?</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-white/80">Spezialisierte Recruiter mit Branchenerfahrung</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-white/80">Umfangreiches Netzwerk an qualifizierten Kandidaten</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-white/80">Maßgeschneiderte Recruiting-Strategien</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-white/80">Kontinuierliche Betreuung und Beratung</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DetailModal>
  )
}
