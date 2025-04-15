"use client"

import { useEffect } from "react"

export default function FontOptimization() {
  useEffect(() => {
    // Fix potential font manifest loading issues
    try {
      // Make sure document is defined
      if (typeof document === 'undefined') return;
      
      // Fix for the black screen by ensuring dark mode is applied early
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0d0d14';
      
      // Verbesserte Font-Loading-Strategie
      if ("fonts" in document) {
        // Prevent errors by using try/catch for font loading
        try {
          // Nur die wichtigsten Schriftschnitte laden, die für First Paint benötigt werden
          const fontPromises = [
            (document as any).fonts.load("400 1em Inter"),
            (document as any).fonts.load("700 1em Inter"),
            (document as any).fonts.load("400 1em Outfit")
          ]
          
          // CSS-Klasse hinzufügen, sobald kritische Fonts geladen sind
          Promise.all(fontPromises).then(() => {
            document.documentElement.classList.add("fonts-loaded")
          }).catch(err => {
            console.warn("Font loading failed:", err);
            // Still mark fonts as loaded to prevent UI issues
            document.documentElement.classList.add("fonts-loaded")
          })
          
          // Nicht-kritische Fonts verzögert laden
          setTimeout(() => {
            Promise.all([
              (document as any).fonts.load("500 1em Inter"),
              (document as any).fonts.load("600 1em Inter"),
              (document as any).fonts.load("500 1em Outfit"),
              (document as any).fonts.load("700 1em Outfit")
            ]).catch(err => {
              console.warn("Non-critical font loading failed:", err);
            })
          }, 1000)
        } catch (e) {
          console.warn("Font API error:", e);
          // Ensure the interface doesn't get stuck
          document.documentElement.classList.add("fonts-loaded");
        }
      } else {
        // Fallback if the Font Loading API is not available
        if (typeof document !== 'undefined') {
          document.documentElement.classList.add("fonts-loaded");
        }
      }
    } catch (error) {
      console.error("Error in font optimization:", error);
    }
  }, [])

  return null
}
