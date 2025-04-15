"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Award, CheckCircle, Star } from "lucide-react"

export default function TrustBadgesLight() {
  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Vertrauen & Sicherheit</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">Wir sind stolz auf unsere Auszeichnungen und Zertifizierungen</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <motion.div
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Shield className="h-10 w-10 text-indigo-600 mb-4" />
          <h4 className="font-bold text-gray-900 mb-2">DSGVO-konform</h4>
          <p className="text-gray-600 text-sm">Höchste Datenschutzstandards für deine Sicherheit</p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Award className="h-10 w-10 text-indigo-600 mb-4" />
          <h4 className="font-bold text-gray-900 mb-2">Top Recruiter 2024</h4>
          <p className="text-gray-600 text-sm">Ausgezeichnet für exzellente Recruiting-Qualität</p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <CheckCircle className="h-10 w-10 text-indigo-600 mb-4" />
          <h4 className="font-bold text-gray-900 mb-2">Verifizierte Unternehmen</h4>
          <p className="text-gray-600 text-sm">Wir arbeiten nur mit geprüften Arbeitgebern zusammen</p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Star className="h-10 w-10 text-indigo-600 mb-4" />
          <h4 className="font-bold text-gray-900 mb-2">4.9/5 Bewertung</h4>
          <p className="text-gray-600 text-sm">Basierend auf über 250+ Bewertungen unserer Kandidaten</p>
        </motion.div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8 items-center opacity-70">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src={`/placeholder.svg?height=40&width=120&text=Partner${i}`}
              alt={`Partner ${i}`}
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
