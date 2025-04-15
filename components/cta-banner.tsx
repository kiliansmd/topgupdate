"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, CheckCircle, Shield, FileCheck, Award, Lock } from "lucide-react"
import Link from "next/link"

export default function CTABanner() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Hintergrund */}
      <div className="absolute inset-0 bg-[#0d0d14]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <div className="bg-[#1e1b2e] rounded-full px-4 py-2 flex items-center text-sm">
            <Shield className="h-4 w-4 text-[#6246ea] mr-2" />
            <span>DSGVO-konform</span>
          </div>
          <div className="bg-[#1e1b2e] rounded-full px-4 py-2 flex items-center text-sm">
            <FileCheck className="h-4 w-4 text-[#6246ea] mr-2" />
            <span>ISO 27001</span>
          </div>
          <div className="bg-[#1e1b2e] rounded-full px-4 py-2 flex items-center text-sm">
            <Award className="h-4 w-4 text-[#6246ea] mr-2" />
            <span>Top Recruiter 2024</span>
          </div>
          <div className="bg-[#1e1b2e] rounded-full px-4 py-2 flex items-center text-sm">
            <Lock className="h-4 w-4 text-[#6246ea] mr-2" />
            <span>Sichere Prozesse</span>
          </div>
          <div className="bg-[#1e1b2e] rounded-full px-4 py-2 flex items-center text-sm">
            <CheckCircle className="h-4 w-4 text-[#6246ea] mr-2" />
            <span>TÜV-geprüft</span>
          </div>
        </div>

        {/* Expanded Badge */}
        <div className="max-w-3xl mx-auto mb-12 bg-[#13111e] rounded-xl p-6 flex items-center">
          <div className="bg-[#6246ea]/20 rounded-full p-3 mr-4 flex-shrink-0">
            <Shield className="h-6 w-6 text-[#6246ea]" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-1">DSGVO-konform</h3>
            <p className="text-white/70 text-sm">
              Alle unsere Prozesse entsprechen den strengen Anforderungen der DSGVO. Ihre Daten sind bei uns sicher und
              werden vertraulich behandelt.
            </p>
            <p className="text-white/50 text-xs mt-2 italic">
              Alle Zertifizierungen und Auszeichnungen werden regelmäßig überprüft und erneuert
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#161225] rounded-xl overflow-hidden shadow-2xl p-8 md:p-12">
          {/* Linke Seite */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Bereit, Ihr Recruiting auf das nächste Level zu bringen?
            </h2>

            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              Vereinbaren Sie ein unverbindliches Beratungsgespräch mit unseren Recruiting-Experten und erfahren Sie,
              wie wir Ihnen helfen können, die besten Talente für Ihr Unternehmen zu finden.
            </p>

            <div className="mt-2">
              <Link href="/kontakt">
                <Button className="bg-[#6246ea] hover:bg-[#5438d5] text-white px-8 py-6 text-base font-medium rounded-md shadow-md transition-all w-full sm:w-auto">
                  Beratungsgespräch vereinbaren <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Rechte Seite */}
          <div className="bg-[#0f0d1a] rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#6246ea]/10 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-[#6246ea]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Schnelle Reaktionszeit</h3>
                <p className="text-white/70">Wir melden uns innerhalb von 24 Stunden bei Ihnen</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="text-[#6246ea] mr-3">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span className="text-white/80">Unverbindliches Erstgespräch</span>
              </div>

              <div className="flex items-center">
                <div className="text-[#6246ea] mr-3">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span className="text-white/80">Individuelle Bedarfsanalyse</span>
              </div>

              <div className="flex items-center">
                <div className="text-[#6246ea] mr-3">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span className="text-white/80">Maßgeschneidertes Angebot</span>
              </div>

              <div className="flex items-center">
                <div className="text-[#6246ea] mr-3">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span className="text-white/80">Persönlicher Ansprechpartner</span>
              </div>
            </div>

            {/* Testimonial */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-white/80 italic mb-4 text-center">
                "Wir sind sehr zufrieden mit der Zusammenarbeit. GetExperts hat uns geholfen, schnell die richtigen
                Kandidaten zu finden."
              </p>

              <p className="text-center text-white/60">Laura Müller, HR Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
