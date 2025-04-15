"use client"

import { useEffect } from "react"

export default function FontOptimization() {
  useEffect(() => {
    // Verbesserte Font-Loading-Strategie
    if ("fonts" in document) {
      // Nur die wichtigsten Schriftschnitte laden, die für First Paint benötigt werden
      const fontPromises = [
        (document as any).fonts.load("400 1em Inter"),
        (document as any).fonts.load("700 1em Inter"),
        (document as any).fonts.load("400 1em Outfit")
      ]
      
      // CSS-Klasse hinzufügen, sobald kritische Fonts geladen sind
      Promise.all(fontPromises).then(() => {
        document.documentElement.classList.add("fonts-loaded")
      })
      
      // Nicht-kritische Fonts verzögert laden
      setTimeout(() => {
        Promise.all([
          (document as any).fonts.load("500 1em Inter"),
          (document as any).fonts.load("600 1em Inter"),
          (document as any).fonts.load("500 1em Outfit"),
          (document as any).fonts.load("700 1em Outfit")
        ])
      }, 1000)
    }
  }, [])

  return null
}
