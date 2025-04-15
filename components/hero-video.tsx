"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative max-w-md mx-auto mt-12"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-xl opacity-70 blur-sm"></div>
      <div className="relative overflow-hidden rounded-lg border border-white/10">
        <div className="aspect-video bg-black/60 backdrop-blur-sm flex items-center justify-center">
          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <Play className="h-6 w-6 ml-1" />
            </button>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/70">
              [Video würde hier abgespielt werden]
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
