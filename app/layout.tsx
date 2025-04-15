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
  generator: 'v0.dev',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="dark" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          /* Fix for FOUC issue causing black screen */
          html {
            visibility: visible;
            background-color: #0d0d14;
          }
          body {
            background-color: #0d0d14;
            display: block !important;
          }
          :root {
            color-scheme: dark;
          }
        `}} />
        <script dangerouslySetInnerHTML={{ __html: `
          // Prevent flash of unstyled content
          document.documentElement.classList.add('dark');
          
          // Check if viewport is mobile and adjust text zoom
          (function() {
            var ua = window.navigator.userAgent;
            var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
            var webkit = !!ua.match(/WebKit/i);
            var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
            
            if (iOSSafari) {
              document.documentElement.classList.add('ios-safari');
            }
          })();
        `}} />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#0d0d14]`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollReset />
          <FontOptimization />
          <CursorGlowWrapper>
            <BetaBar />
            <Navbar />
            <main className="overflow-x-hidden">{children}</main>
            <Footer />
            <ExitIntentPopupWrapper />
          </CursorGlowWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}