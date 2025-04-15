"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export default function AnimatedText({ text, className = "", once = true }: AnimatedTextProps) {
  const [replay, setReplay] = useState(false)
  const words = text.split(" ")

  useEffect(() => {
    if (!once) {
      const timer = setTimeout(() => {
        setReplay(!replay)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [replay, once])

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={`overflow-hidden flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      key={replay ? "replay" : "initial"}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-1 inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
