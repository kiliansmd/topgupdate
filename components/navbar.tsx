"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Für Unternehmen", href: "/" },
  { name: "Für Experten", href: "/experten" },
  { name: "Job Board", href: "/experten/jobs" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Blog", href: "/blog" },
  { name: "Kontakt", href: "/kontakt" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if device is iOS
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    setIsIOS(iOSSafari);
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 sm:top-9 w-full z-40 transition-all duration-500", // Längere Dauer für sanfteren Übergang
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/20 py-3" : "bg-transparent py-3 sm:py-5",
        isIOS ? "ios-header" : ""
      )}
    >
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center relative z-10">
          <Image
            src="/images/getexperts-logo.png"
            alt="GetExperts Logo"
            width={150}
            height={40}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary-500 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-primary-600 hover:bg-primary-700 text-white shadow-md shadow-primary-600/20 hover:shadow-lg hover:shadow-primary-600/30 transition-all duration-300">
            Kontakt aufnehmen
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 touch-manipulation relative z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          style={{ touchAction: 'manipulation' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-background/95 backdrop-blur-sm border-b border-border/20 overflow-y-auto z-50">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block py-4 text-white/80 hover:text-white transition-colors text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <div className="pt-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white w-full py-6 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
