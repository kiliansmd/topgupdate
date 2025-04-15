"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, type Variants } from "framer-motion"

interface PremiumTextProps {
  text: string
  className?: string
  once?: boolean
  highlight?: string[]
  highlightClass?: string
  delay?: number
  staggerDelay?: number
  type?: "words" | "chars" | "lines"
}

export default function PremiumText({
  text,
  className = "",
  once = true,
  highlight = [],
  highlightClass = "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400",
  delay = 0,
  staggerDelay = 0.03,
  type = "words",
}: PremiumTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.3 })
  const [elements, setElements] = useState<string[]>([])

  useEffect(() => {
    if (type === "words") {
      setElements(text.split(" "))
    } else if (type === "chars") {
      setElements(text.split(""))
    } else if (type === "lines") {
      setElements(text.split("\n"))
    }
  }, [text, type])

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    }),
  }

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const shouldHighlight = (word: string) => {
    return highlight.some((h) => word.includes(h))
  }

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {elements.map((element, index) => (
        <motion.span
          variants={child}
          key={index}
          className={`inline-block ${type === "words" ? "mr-[0.25em]" : ""} ${
            shouldHighlight(element) ? highlightClass : ""
          }`}
        >
          {element}
          {type === "lines" && index < elements.length - 1 ? <br /> : ""}
        </motion.span>
      ))}
    </motion.div>
  )
}
