"use client"

import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import TrustIndicators from "@/components/trust-indicators"
import ProductShowcase from "@/components/product-showcase"
import CaseStudies from "@/components/case-studies"
import FAQSection from "@/components/faq-section"
import StatsCounter from "@/components/stats-counter"
import CTABanner from "@/components/cta-banner"
import FinalCTA from "@/components/final-cta"
import PremiumParallax from "@/components/premium-parallax"
import ScrollAnimation from "@/components/scroll-animation"
import PremiumProcessSection from "@/components/premium-process-section"
import ClientLogoBanner from "@/components/client-logo-banner"
import MinimalisticTrustSection from "@/components/minimalistic-trust-section"
import SpecializationGrid from "@/components/specialization-grid"
import CandidateTestimonials from "@/components/candidate-testimonials"
import LeadershipSpotlight from "@/components/leadership-spotlight"
import PremiumHeroSection from "@/components/premium-hero-section"

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Parallax transformations
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div>
      {/* Neue optimierte Hero Section */}
      <PremiumHeroSection />

      {/* Neue rotierende Kundenlogo-Leiste */}
      <ClientLogoBanner />

      {/* Neue minimalistische Trust-Sektion */}
      <MinimalisticTrustSection />

      {/* Neue Spezialisierungs-Grid Sektion */}
      <SpecializationGrid />

      {/* Enhanced Product Showcase section */}
      <ProductShowcase />

      {/* Neue Kandidatenstimmen-Sektion */}
      <CandidateTestimonials />

      {/* Improved Process Section */}
      <PremiumProcessSection />

      {/* Enhanced CTA Banner */}
      <PremiumParallax baseVelocity={0.05} direction="up">
        <CTABanner />
      </PremiumParallax>

      {/* Case Studies with enhanced animations */}
      <ScrollAnimation animation="fade" duration={0.8}>
        <CaseStudies />
      </ScrollAnimation>

      {/* Enhanced Stats Counter */}
      <PremiumParallax baseVelocity={0.08} direction="down">
        <StatsCounter />
      </PremiumParallax>

      {/* Trust Indicators - now using our unified component */}
      <ScrollAnimation animation="fade" duration={0.8}>
        <TrustIndicators />
      </ScrollAnimation>

      {/* Leadership Spotlight - Neue Komponente vor dem FAQ */}
      <ScrollAnimation animation="fade" duration={0.8}>
        <LeadershipSpotlight />
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation animation="fade" duration={0.8}>
        <FAQSection />
      </ScrollAnimation>

      {/* Final CTA with enhanced design */}
      <ScrollAnimation animation="fade" duration={0.8}>
        <FinalCTA />
      </ScrollAnimation>
    </div>
  )
}
