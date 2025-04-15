"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, useInView, useAnimation } from "framer-motion"
import {
  ChevronRight,
  ArrowRight,
  FileText,
  Briefcase,
  Award,
  Star,
  Users,
  Clock,
  MessageSquare,
  Search,
  Building,
  CheckCircle,
  Sparkles,
  ArrowUpRight,
  Shield,
} from "lucide-react"
import ExpertTestimonials from "@/components/expert-testimonials"
import JobCategoryCards from "@/components/job-category-cards"
import ExpertFAQs from "@/components/expert-faqs"
import TrustBadgesLight from "@/components/trust-badges-light"
import CandidateUploadForm from "@/components/candidate-upload-form"
import ExpertSuccessStory from "@/components/expert-success-story"
import FloatingElements from "@/components/floating-elements"

export default function ExpertsPage() {
  const benefitsRef = useRef(null)
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })

  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, amount: 0.2 })

  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 })

  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, amount: 0.1 })

  const [isMounted, setIsMounted] = useState(false)
  
  const controls = useAnimation()

  useEffect(() => {
    setIsMounted(true)
    if (formInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } })
    }
  }, [formInView, controls])

  return (
    <div className="overflow-hidden bg-[#fcfcfd] text-gray-900">
      {/* Hero Section - Modern & Premium Styling */}
      <section className="relative min-h-screen flex items-center pt-36 pb-20">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#fcfcfd]"></div>
          
          {/* Subtle animated particles - Only render on client side */}
          {isMounted && (
            <FloatingElements 
              count={12}
              minSize={80}
              maxSize={300}
              blur={80}
              opacity={0.04}
              speed={0.3}
              colors={[
                "from-indigo-400/10 to-violet-500/10",
                "from-blue-400/10 to-indigo-500/10",
                "from-violet-400/10 to-purple-500/10",
              ]}
            />
          )}

          {/* Subtle gradient overlays */}
          <div className="absolute top-0 left-0 h-[70vh] w-1/2 bg-gradient-to-br from-indigo-50/40 to-transparent rounded-br-full opacity-80 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-[50vh] w-1/2 bg-gradient-to-tl from-violet-50/40 to-transparent rounded-tl-full opacity-80 blur-3xl"></div>
          
          {/* Elegant mesh pattern for texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Badge className="mb-6 bg-gradient-to-r from-indigo-50/80 to-violet-50/80 text-indigo-600 border border-indigo-100/50 px-5 py-2.5 text-sm font-medium rounded-full shadow-sm backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 mr-2 text-indigo-500" />
                  Für Experten & Fachkräfte
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-8 text-gray-900 tracking-tight leading-[1.1]"
              >
                Dein nächster{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Karriereschritt
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-gradient-to-r from-indigo-600/40 to-violet-600/40 blur-[2px]"></span>
                </span>{" "}
                beginnt hier
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed"
              >
                Entdecke exklusive Jobangebote bei Top-Unternehmen und werde Teil unseres Expertennetzwerks. Wir
                verbinden dich mit führenden Arbeitgebern für deinen nächsten Karrieresprung.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-5 mb-10"
              >
                <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-indigo-600/10 hover:shadow-xl hover:shadow-indigo-600/20 transition-all duration-300 group">
                  <span>Jetzt bewerben</span>
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50/50 text-indigo-700 px-8 py-6 text-base rounded-xl transition-all duration-300"
                >
                  Stellenangebote ansehen
                </Button>
              </motion.div>

              {/* Enhanced Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-md shadow-indigo-100/50 border border-white/80">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-2.5">
                    <Star className="h-3.5 w-3.5 text-amber-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-800">4.9/5 Bewertung von Kandidaten</span>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-md shadow-indigo-100/50 border border-white/80">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2.5">
                    <Shield className="h-3.5 w-3.5 text-indigo-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-800">100% kostenlos für Bewerber</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Premium Stylized Testimonial Card */}
              <motion.div
                initial={{ opacity: 0, y: -20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-10 -right-10 z-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 max-w-xs border border-white"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-indigo-100">
                    <Image
                      src="/placeholder.svg?height=48&width=48&text=MS"
                      alt="Markus S."
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Markus S.</p>
                    <p className="text-sm text-indigo-600">Senior Developer</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic mb-2 leading-relaxed">
                  "GetExperts hat mir geholfen, meinen Traumjob zu finden. Der gesamte Prozess war transparent und
                  persönlich. Absolut empfehlenswert!"
                </p>
                <p className="text-xs text-gray-500">Vor 2 Wochen</p>
              </motion.div>

              {/* Main Image with Enhanced Styling */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/80 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-violet-500/10 z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Experte+im+Gespräch"
                  alt="Experte im Gespräch"
                  width={800}
                  height={600}
                  className="rounded-2xl object-cover h-full transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Premium Stats Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/80 z-20"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl p-3 shadow-lg shadow-indigo-500/20">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Durchschnittlich</div>
                    <div className="font-bold text-gray-900 text-lg">3 Wochen bis zum neuen Job</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CV Upload Form with Enhanced Premium Styling */}
      <div ref={formRef} id="upload-cv">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={controls} 
          className="relative z-10 -mt-10 mb-20"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative">
              {/* Gradient backdrop for the form */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-indigo-50/50 to-violet-50/50 blur-xl transform scale-105"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-1/4 w-64 h-64 bg-indigo-300/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-300/10 rounded-full blur-3xl -z-10"></div>
              
              {/* Subtle mesh pattern */}
              <div className="absolute inset-0 -z-5 rounded-3xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTIwIDIwaDIwdjIwSDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
              
              {/* The actual form component with custom styling */}
              <CandidateUploadForm 
                variant="light" 
                className="relative z-20 shadow-2xl border border-white/80 backdrop-blur-sm rounded-3xl overflow-hidden bg-white/50" 
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Neue Erfolgsgeschichte-Komponente einfügen */}
      <ExpertSuccessStory />

      {/* Job Categories Section - Enhanced */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <Badge className="mb-5 bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-600 border-indigo-100 px-5 py-2 text-sm font-medium rounded-full shadow-sm">
              Fachbereiche
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
              Entdecke Jobs in deinem{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Fachbereich
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-gradient-to-r from-indigo-600/40 to-violet-600/40 blur-[2px]"></span>
              </span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Wir sind auf die Vermittlung von Experten in verschiedenen Branchen spezialisiert und finden die perfekte
              Position für dich
            </p>
          </div>

          <JobCategoryCards />
        </div>
      </section>

      {/* Benefits Section - Enhanced Premium Design */}
      <section ref={benefitsRef} className="py-24 bg-[#fcfcfd] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        
        {/* Floating gradient elements */}
        <div className="absolute left-0 top-1/4 w-1/3 h-1/3 bg-indigo-100/50 rounded-full blur-3xl opacity-60 -z-10"></div>
        <div className="absolute right-0 bottom-1/4 w-1/3 h-1/3 bg-violet-100/50 rounded-full blur-3xl opacity-60 -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge className="mb-5 inline-flex items-center bg-gradient-to-r from-indigo-50/80 to-violet-50/80 text-indigo-600 border border-indigo-100/50 px-5 py-2.5 text-sm font-medium rounded-full shadow-sm backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 mr-2 text-indigo-500" />
                Deine Vorteile
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight leading-tight">
                Warum du mit uns{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    durchstarten
                  </span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-gradient-to-r from-indigo-600/40 to-violet-600/40 blur-[2px]"
                    initial={{ scaleX: 0 }}
                    animate={benefitsInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ transformOrigin: 'left' }}
                  ></motion.span>
                </span>{" "}
                solltest
              </h2>
              
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Wir bieten dir Zugang zu exklusiven Stellenangeboten, die nicht öffentlich ausgeschrieben sind.
                Profitiere von unserem Netzwerk und unserer Expertise für deinen nächsten Karriereschritt.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: <Search className="h-6 w-6 text-white" />,
                    title: "Zugang zu exklusiven Stellen",
                    description:
                      "Viele unserer Stellen werden nicht öffentlich ausgeschrieben. Als Teil unseres Netzwerks erhältst du Zugang zu diesen exklusiven Positionen.",
                    gradient: "from-indigo-500 to-blue-600"
                  },
                  {
                    icon: <MessageSquare className="h-6 w-6 text-white" />,
                    title: "Persönliche Karriereberatung",
                    description:
                      "Unsere Recruiting-Experten beraten dich individuell zu deinen Karrieremöglichkeiten und unterstützen dich bei Bewerbungsgesprächen.",
                    gradient: "from-indigo-500 to-violet-600"
                  },
                  {
                    icon: <Building className="h-6 w-6 text-white" />,
                    title: "Vermittlung an Top-Unternehmen",
                    description:
                      "Wir arbeiten mit führenden Unternehmen zusammen und können dir Türen öffnen, die sonst verschlossen bleiben.",
                    gradient: "from-violet-500 to-purple-600"
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="flex items-start group"
                  >
                    <div className={`bg-gradient-to-br ${benefit.gradient} rounded-xl p-3 mr-5 flex-shrink-0 shadow-lg shadow-indigo-500/10 group-hover:shadow-indigo-500/20 transition-all duration-300 transform group-hover:scale-110`}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {/* Enhanced image styling with subtle animations */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100/70 to-violet-100/70 rounded-2xl blur-3xl opacity-60 transform transition-all duration-700 group-hover:opacity-80"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 group">
                {/* Subtle overlay gradient that intensifies on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-violet-500/5 group-hover:from-indigo-500/10 group-hover:to-violet-500/10 z-10 transition-all duration-700"></div>
                
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Karriereberatung"
                  alt="Karriereberatung"
                  width={800}
                  height={600}
                  className="rounded-xl transform transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Subtle animated glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-violet-500/10 opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-md"></div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20, x: 0 }}
                animate={benefitsInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 20, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/80 z-20"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl p-3 shadow-lg shadow-indigo-500/20">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Kostenlos für</div>
                    <div className="font-bold text-gray-900 text-lg">Bewerber & Experten</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section - Premium Design */}
      <section ref={processRef} className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-20">
            <Badge className="mb-5 bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-600 border-indigo-100 px-5 py-2 text-sm font-medium rounded-full shadow-sm">
              Unser Prozess
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
              So findest du deinen{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Traumjob
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-gradient-to-r from-indigo-600/40 to-violet-600/40 blur-[2px]"></span>
              </span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Wir begleiten dich Schritt für Schritt auf deinem Weg zum neuen Job und stehen dir bei jedem Schritt zur
              Seite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Profil erstellen",
                description:
                  "Erstelle dein persönliches Profil und lade deinen Lebenslauf hoch. Wir analysieren deine Fähigkeiten und Erfahrungen für die perfekte Passform.",
                icon: <FileText className="h-8 w-8 text-white mb-4" />,
                timeframe: "5-10 Minuten",
              },
              {
                title: "Passende Jobs finden",
                description:
                  "Wir suchen für dich die besten Jobs, die zu deinen Fähigkeiten und Karrierezielen passen und stellen dir diese persönlich vor.",
                icon: <Briefcase className="h-8 w-8 text-white mb-4" />,
                timeframe: "1-2 Wochen",
              },
              {
                title: "Bewerben & Interview",
                description:
                  "Wir unterstützen dich bei deiner Bewerbung, bereiten dich auf das Interview vor und begleiten dich bis zum erfolgreichen Vertragsabschluss.",
                icon: <Award className="h-8 w-8 text-white mb-4" />,
                timeframe: "2-4 Wochen",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 h-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-violet-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-indigo-50/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/30 transition-all duration-300 transform group-hover:scale-110">
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{step.description}</p>

                  <div className="flex items-center px-4 py-2 bg-indigo-50 rounded-full w-fit">
                    <Clock className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium text-indigo-700">Zeitrahmen: {step.timeframe}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Premium Design */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <Badge className="mb-5 bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-600 border-indigo-100 px-5 py-2 text-sm font-medium rounded-full shadow-sm">
              Erfolgsgeschichten
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
              Was unsere{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Experten
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-gradient-to-r from-indigo-600/40 to-violet-600/40 blur-[2px]"></span>
              </span>{" "}
              sagen
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Erfahre, wie wir anderen Fachkräften zu ihrer idealen Position verholfen haben und welchen Unterschied
              unsere persönliche Betreuung macht
            </p>
          </div>

          <ExpertTestimonials />
        </div>
      </section>

      {/* Stats Section - Enhanced Premium Design */}
      <section ref={statsRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-3xl p-16 shadow-xl relative overflow-hidden border border-white/80">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-violet-200/30 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  value: "500+",
                  label: "Erfolgreiche Vermittlungen",
                  icon: <Users className="h-8 w-8 text-indigo-600" />,
                },
                {
                  value: "95%",
                  label: "Verbleibrate nach 12 Monaten",
                  icon: <CheckCircle className="h-8 w-8 text-indigo-600" />,
                },
                {
                  value: "3 Wochen",
                  label: "Durchschnittliche Vermittlungszeit",
                  icon: <Clock className="h-8 w-8 text-indigo-600" />,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white flex items-center justify-center shadow-lg border border-indigo-100">
                    {stat.icon}
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-indigo-600 mb-3 tracking-tight">{stat.value}</div>
                  <p className="text-gray-700 text-lg font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Premium Design */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <Badge className="mb-5 bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-600 border-indigo-100 px-5 py-2 text-sm font-medium rounded-full shadow-sm">
              Häufige Fragen
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
              Deine{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Fragen
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-gradient-to-r from-indigo-600/40 to-violet-600/40 blur-[2px]"></span>
              </span>{" "}
              beantwortet
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Hier findest du Antworten auf die häufigsten Fragen zu unserem Bewerbungsprozess und unseren Leistungen
              für Kandidaten
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ExpertFAQs />
          </div>
        </div>
      </section>

      {/* Trust Badges Section - Premium Design */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <TrustBadgesLight />
        </div>
      </section>

      {/* CTA Section - Enhanced Premium Design */}
      <section ref={ctaRef} className="py-24 bg-[#fcfcfd] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        
        {/* Add floating elements for dynamic background */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden">
            <FloatingElements 
              count={6}
              minSize={200}
              maxSize={400}
              blur={100}
              opacity={0.03}
              speed={0.2}
              colors={[
                "from-indigo-400/10 to-violet-500/10",
                "from-blue-400/10 to-indigo-500/10",
                "from-violet-400/10 to-purple-500/10",
              ]}
            />
          </div>
        )}
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            className="bg-gradient-to-r from-indigo-50/80 to-violet-50/80 p-16 text-center max-w-5xl mx-auto rounded-3xl shadow-2xl relative overflow-hidden border border-white/80 backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Enhanced top border gradient */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-violet-600"></div>
            
            {/* Dynamic background elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet-200/30 rounded-full blur-3xl"></div>
            
            {/* Subtle mesh pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTIwIDIwaDIwdjIwSDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center justify-center mb-6 transform transition-transform duration-500 hover:scale-110">
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-indigo-100/50">
                  <Sparkles className="h-6 w-6 text-indigo-600" />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight relative z-10">
                Bereit für deinen nächsten{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Karriereschritt
                  </span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-[0.12em] bg-gradient-to-r from-indigo-600/40 to-violet-600/40 blur-[2px]"
                    initial={{ scaleX: 0 }}
                    animate={ctaInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ transformOrigin: 'left' }}
                  ></motion.span>
                </span>
                ?
              </h2>
              <p className="text-gray-600 mb-10 max-w-2xl mx-auto relative z-10 text-lg leading-relaxed">
                Bewirb dich jetzt und finde mit unserer Hilfe deinen Traumjob bei einem Top-Unternehmen. Dein neuer
                Karriereweg beginnt hier!
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30 transition-all duration-300 group">
                <span>Jetzt bewerben</span>
                <ArrowUpRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <Button
                variant="outline"
                className="border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 text-indigo-700 px-8 py-6 text-base rounded-xl transition-all duration-300"
              >
                Stellenangebote ansehen <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
