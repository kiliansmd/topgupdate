"use client"

import dynamic from 'next/dynamic'
import { ReactNode, Suspense } from 'react'

// Einfachere dynamische Importe ohne ssr: false
const DynamicExitIntentPopup = dynamic(() => import("./exit-intent-popup"), {
  loading: () => null
})

const DynamicCursorGlow = dynamic(() => import("./cursor-glow"))

// Wrapper mit Suspense für bessere Fehlerbehandlung
export function CursorGlowWrapper({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <DynamicCursorGlow>{children}</DynamicCursorGlow>
    </Suspense>
  )
}

export function ExitIntentPopupWrapper() {
  return (
    <Suspense fallback={null}>
      <DynamicExitIntentPopup />
    </Suspense>
  )
} 