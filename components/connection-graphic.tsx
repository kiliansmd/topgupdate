"use client"

import { motion } from "framer-motion"

export default function ConnectionGraphic({ variant = "dark" }: { variant?: "dark" | "light" }) {
  // Colors based on theme variant
  const primaryColor = variant === "light" ? "#4f46e5" : "#6366f1"
  const secondaryColor = variant === "light" ? "#7c3aed" : "#8b5cf6"
  const backgroundColor = variant === "light" ? "#f8fafc" : "#0a0a12"
  const nodeColor = variant === "light" ? "#f9fafb" : "#1e1e2d"
  const textColor = variant === "light" ? "#111827" : "#ffffff"
  const textOpacity = variant === "light" ? "opacity-70" : "opacity-80"

  return (
    <div className="w-full max-w-2xl mx-auto py-16 relative">
      {/* Abstract connection visual */}
      <div className="relative h-64 mb-12">
        {/* Company Node */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute left-4 top-20 w-28 h-28 rounded-2xl shadow-xl flex items-center justify-center"
          style={{ backgroundColor: nodeColor, border: `1px solid ${primaryColor}30` }}
        >
          <div className="w-16 h-16 rounded-xl" style={{ background: `linear-gradient(135deg, ${primaryColor}20, ${primaryColor}40)` }}>
            <svg viewBox="0 0 24 24" className="w-full h-full p-3.5" style={{ fill: primaryColor }}>
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM12 6c-2.76 0-5 2.24-5 5v4h2v-4c0-1.65 1.35-3 3-3s3 1.35 3 3v4h2v-4c0-2.76-2.24-5-5-5z"/>
            </svg>
          </div>
        </motion.div>

        {/* GetExperts Node (Center) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full shadow-xl z-20 flex items-center justify-center"
          style={{ 
            backgroundColor: nodeColor, 
            border: `1px solid ${primaryColor}50`,
            boxShadow: `0 0 30px ${primaryColor}30` 
          }}
        >
          <div className="w-20 h-20 rounded-full" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
            <svg viewBox="0 0 24 24" className="w-full h-full p-4 text-white">
              <path d="M13.02 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.42-1.43c-1.1.86-2.43 1.44-3.9 1.62zM4.03 12c0-4.05 3.03-7.41 6.95-7.93V2.05C5.95 2.58 2.03 6.84 2.03 12c0 5.16 3.92 9.42 8.95 9.95v-2.02c-3.92-.52-6.95-3.88-6.95-7.93zM19.95 11h2.02c-.2-2.01-1-3.84-2.21-5.32l-1.43 1.43c.86 1.1 1.44 2.43 1.62 3.89zM18.34 4.26l-1.43 1.43c1.1.86 1.98 1.94 2.62 3.16l1.68-1.02c-.8-1.58-1.86-2.93-2.87-3.57zM12 19.93v2.02c5.05-.5 9-4.76 9-9.95 0-3.36-1.65-6.36-4.24-8.3l-1.26 1.5c2.08 1.57 3.5 4.08 3.5 6.8 0 4.16-3.2 7.62-7 7.93z" fill="currentColor" />
            </svg>
          </div>
        </motion.div>

        {/* Candidate Node */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute right-4 top-20 w-28 h-28 rounded-2xl shadow-xl flex items-center justify-center"
          style={{ backgroundColor: nodeColor, border: `1px solid ${secondaryColor}30` }}
        >
          <div className="w-16 h-16 rounded-xl" style={{ background: `linear-gradient(135deg, ${secondaryColor}20, ${secondaryColor}40)` }}>
            <svg viewBox="0 0 24 24" className="w-full h-full p-3.5" style={{ fill: secondaryColor }}>
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z"/>
            </svg>
          </div>
        </motion.div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
          {/* Company to GetExperts connection */}
          <motion.path 
            d="M 46,88 L 160,96" 
            stroke={primaryColor}
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.path 
            d="M 46,98 L 160,106" 
            stroke={primaryColor} 
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1, delay: 1 }}
          />

          {/* GetExperts to Candidate connection */}
          <motion.path 
            d="M 192,96 L 306,88" 
            stroke={secondaryColor} 
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.path 
            d="M 192,106 L 306,98" 
            stroke={secondaryColor} 
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1, delay: 1 }}
          />

          {/* Floating Particles */}
          <motion.circle 
            cx="120" 
            cy="96" 
            r="3" 
            fill={primaryColor}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: [0, 1, 0], x: 30 }}
            transition={{ repeat: Infinity, duration: 3, delay: 1.2 }}
          />
          <motion.circle 
            cx="140" 
            cy="102" 
            r="2" 
            fill={primaryColor}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: [0, 0.7, 0], x: 20 }}
            transition={{ repeat: Infinity, duration: 3.5, delay: 2 }}
          />
          <motion.circle 
            cx="230" 
            cy="96" 
            r="3" 
            fill={secondaryColor}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: [0, 1, 0], x: -30 }}
            transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
          />
          <motion.circle 
            cx="210" 
            cy="102" 
            r="2" 
            fill={secondaryColor}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: [0, 0.7, 0], x: -20 }}
            transition={{ repeat: Infinity, duration: 3.5, delay: 2.3 }}
          />
        </svg>
      </div>

      {/* Labels */}
      <div className="flex justify-between px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="w-1/3"
        >
          <h4 className={`font-medium mb-1 ${variant === "light" ? "text-gray-900" : "text-white"}`}>Unternehmen</h4>
          <p className={`text-sm ${textOpacity}`}>Suchen die besten Talente</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="w-1/3"
        >
          <h4 className={`font-medium mb-1 ${variant === "light" ? "text-gray-900" : "text-white"}`}>GetExperts</h4>
          <p className={`text-sm ${textOpacity}`}>Verbindet beide Seiten</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="w-1/3"
        >
          <h4 className={`font-medium mb-1 ${variant === "light" ? "text-gray-900" : "text-white"}`}>Kandidaten</h4>
          <p className={`text-sm ${textOpacity}`}>Suchen passende Jobs</p>
        </motion.div>
      </div>
    </div>
  )
} 