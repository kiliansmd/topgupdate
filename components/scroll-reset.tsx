"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollReset() {
  const pathname = usePathname()

  useEffect(() => {
    // Setze die Scrollposition auf 0, wenn sich der Pfad ändert
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
