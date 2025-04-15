import type React from "react"
import "./globals.css"
import { Inter, Outfit } from "next/font/google"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import BetaBar from "@/components/beta-bar"
import { CursorGlowWrapper, ExitIntentPopupWrapper } from "@/components/dynamic-components"
// Importiere die ScrollReset-Komponente
import ScrollReset from "@/components/scroll-reset"
// Importiere die FontOptimization-Komponente
import FontOptimization from "@/components/font-optimization"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "GetExperts | Premium Recruiting-Agentur",
  description: "Spezialisierte Recruiting-Lösungen für Unternehmen und Experten in allen Branchen.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#0d0d14]`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollReset />
          <FontOptimization />
          <CursorGlowWrapper>
            <BetaBar />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ExitIntentPopupWrapper />
          </CursorGlowWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}