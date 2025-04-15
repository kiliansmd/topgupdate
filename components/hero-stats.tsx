"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star, CheckCircle, Award, Users, Clock } from "lucide-react"

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-16 max-w-4xl mx-auto"
    >
      <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-violet-600/5 pointer-events-none"></div>

        {/* Animated glow effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
        <div className="absolute -top-20 right-20 w-40 h-40 bg-indigo-600/10 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute -bottom-20 left-20 w-40 h-40 bg-violet-600/10 rounded-full filter blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Top section with ratings and clients */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4 relative z-10">
          <div className="flex items-center">
            <div className="mr-6">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-white/70">
                <span className="font-medium text-white">4.9/5</span> basierend auf 127 Bewertungen
              </div>
            </div>
            <div className="h-14 w-px bg-white/10 hidden sm:block"></div>
            <div className="hidden sm:flex ml-6 items-center">
              <Award className="h-5 w-5 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 mr-2" />
              <span className="text-sm font-medium">Top Recruiter 2024</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black/30 overflow-hidden shadow-lg">
                  <Image
                    src={`/placeholder.svg?height=40&width=40&text=${i}`}
                    alt={`Kunde ${i}`}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="ml-3 text-sm text-white/70">
              <span className="font-medium text-white">500+</span> zufriedene Kunden
            </div>
          </div>
        </div>

        {/* Key Stats - Simplified Version */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-indigo-400 mr-2" />
            <span className="text-sm">
              <span className="font-medium">98%</span> Kundenzufriedenheit
            </span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 text-indigo-400 mr-2" />
            <span className="text-sm">
              <span className="font-medium">500+</span> erfolgreiche Vermittlungen
            </span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-indigo-400 mr-2" />
            <span className="text-sm">
              <span className="font-medium">15+</span> Jahre Expertise
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
