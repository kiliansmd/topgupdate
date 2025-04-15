"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PricingCalculator() {
  const [hiringCount, setHiringCount] = useState(3)
  const [averageSalary, setAverageSalary] = useState(70000)
  const [isAnnual, setIsAnnual] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState<"standard" | "premium">("standard")

  // Berechnete Werte
  const [standardPrice, setStandardPrice] = useState(0)
  const [premiumPrice, setPremiumPrice] = useState(0)
  const [savings, setSavings] = useState(0)

  // Preisberechnung
  useEffect(() => {
    // Standard: 20% vom Jahresgehalt pro Vermittlung
    const standardRate = 0.2
    // Premium: 25% vom Jahresgehalt pro Vermittlung, aber mit Mengenrabatt
    const premiumBaseRate = 0.25

    // Rabattstaffel für Premium
    let premiumRate = premiumBaseRate
    if (hiringCount >= 5) premiumRate = 0.23
    if (hiringCount >= 10) premiumRate = 0.21

    // Berechnung der Gesamtkosten
    const standardTotal = hiringCount * averageSalary * standardRate
    const premiumTotal = hiringCount * averageSalary * premiumRate

    // Monatliche Kosten (nur für die Anzeige, wenn isAnnual = false)
    const standardMonthly = standardTotal / 12
    const premiumMonthly = premiumTotal / 12

    // Setzen der Werte basierend auf jährlich/monatlich
    setStandardPrice(isAnnual ? standardTotal : standardMonthly)
    setPremiumPrice(isAnnual ? premiumTotal : premiumMonthly)

    // Ersparnis berechnen (Vergleich zu Marktdurchschnitt von 30%)
    const marketAverage = hiringCount * averageSalary * 0.3
    const bestPrice = Math.min(standardTotal, premiumTotal)
    setSavings(marketAverage - bestPrice)
  }, [hiringCount, averageSalary, isAnnual])

  // Formatierung der Preise
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="glass-card p-8 relative overflow-hidden">
        {/* Hintergrund-Effekt */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/10 rounded-full filter blur-3xl opacity-30 -z-10"></div>

        <div className="text-center mb-8">
          <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">Preisrechner</Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Berechnen Sie Ihre Recruiting-Kosten</h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Passen Sie die Parameter an Ihre Bedürfnisse an und sehen Sie, wie viel Sie mit unseren erfolgsbasierten
            Modellen sparen können.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Linke Spalte: Eingabeparameter */}
          <div className="space-y-8">
            {/* Anzahl der Einstellungen */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-base font-medium">Anzahl der Einstellungen</Label>
                <span className="text-2xl font-bold text-primary">{hiringCount}</span>
              </div>
              <Slider
                value={[hiringCount]}
                min={1}
                max={20}
                step={1}
                onValueChange={(value) => setHiringCount(value[0])}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-white/60">
                <span>1</span>
                <span>5</span>
                <span>10</span>
                <span>15</span>
                <span>20</span>
              </div>
            </div>

            {/* Durchschnittliches Jahresgehalt */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-base font-medium">Durchschnittliches Jahresgehalt</Label>
                <span className="text-2xl font-bold text-primary">{formatPrice(averageSalary)}</span>
              </div>
              <Slider
                value={[averageSalary]}
                min={30000}
                max={150000}
                step={5000}
                onValueChange={(value) => setAverageSalary(value[0])}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-white/60">
                <span>30k €</span>
                <span>60k €</span>
                <span>90k €</span>
                <span>120k €</span>
                <span>150k €</span>
              </div>
            </div>

            {/* Jährlich/Monatlich Toggle */}
            <div className="flex items-center justify-between p-4 bg-[#0d0d14] rounded-lg">
              <Label htmlFor="billing-toggle" className="text-sm font-medium cursor-pointer">
                Preisanzeige
              </Label>
              <div className="flex items-center space-x-2">
                <span className={`text-sm ${!isAnnual ? "text-primary font-medium" : "text-white/60"}`}>Monatlich</span>
                <Switch id="billing-toggle" checked={isAnnual} onCheckedChange={setIsAnnual} />
                <span className={`text-sm ${isAnnual ? "text-primary font-medium" : "text-white/60"}`}>Jährlich</span>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Preispläne */}
          <div className="space-y-4">
            {/* Standard Plan */}
            <motion.div
              className={`p-6 rounded-xl border transition-all cursor-pointer ${
                selectedPlan === "standard"
                  ? "border-primary bg-primary/5"
                  : "border-white/10 bg-card hover:border-primary/30 hover:bg-primary/5"
              }`}
              onClick={() => setSelectedPlan("standard")}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold">Standard</h3>
                  <p className="text-white/60 text-sm">Für einzelne Positionen</p>
                </div>
                {selectedPlan === "standard" && <Badge className="bg-primary text-white">Ausgewählt</Badge>}
              </div>

              <div className="mb-4">
                <span className="text-3xl font-bold">{formatPrice(standardPrice)}</span>
                <span className="text-white/60 text-sm ml-1">{isAnnual ? "/Jahr" : "/Monat"}</span>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">20% vom Jahresgehalt pro Vermittlung</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">Nachbesetzungsgarantie (3 Monate)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">Persönlicher Ansprechpartner</span>
                </li>
              </ul>

              <Button
                className={`w-full ${
                  selectedPlan === "standard"
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                Auswählen
              </Button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              className={`p-6 rounded-xl border transition-all cursor-pointer ${
                selectedPlan === "premium"
                  ? "border-primary bg-primary/5"
                  : "border-white/10 bg-card hover:border-primary/30 hover:bg-primary/5"
              }`}
              onClick={() => setSelectedPlan("premium")}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold">Premium</h3>
                  <p className="text-white/60 text-sm">Für mehrere Positionen</p>
                </div>
                {selectedPlan === "premium" && <Badge className="bg-primary text-white">Ausgewählt</Badge>}
              </div>

              <div className="mb-4">
                <span className="text-3xl font-bold">{formatPrice(premiumPrice)}</span>
                <span className="text-white/60 text-sm ml-1">{isAnnual ? "/Jahr" : "/Monat"}</span>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">
                    25% vom Jahresgehalt mit Mengenrabatt
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-3.5 w-3.5 text-white/40 ml-1 inline" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">
                            Ab 5 Positionen: 23%
                            <br />
                            Ab 10 Positionen: 21%
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">Nachbesetzungsgarantie (6 Monate)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">Dediziertes Recruiting-Team</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">Priorisierte Kandidatensuche</span>
                </li>
              </ul>

              <Button
                className={`w-full ${
                  selectedPlan === "premium"
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                Auswählen
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Ersparnis-Anzeige */}
        {savings > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-indigo-500/10 to-violet-600/10 border border-primary/20 rounded-lg p-6 text-center"
          >
            <h3 className="text-lg font-medium mb-2">Ihre potenzielle Ersparnis</h3>
            <p className="text-white/70 mb-3">
              Im Vergleich zum Branchendurchschnitt (30% vom Jahresgehalt) sparen Sie:
            </p>
            <p className="text-3xl font-bold text-primary">{formatPrice(savings)}</p>
            <Button className="mt-4 bg-primary hover:bg-primary/90">
              Unverbindliches Angebot anfordern <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
