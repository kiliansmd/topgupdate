"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Beispiel-Teammitglieder
const teamMembers = [
  {
    id: 1,
    name: "Dr. Markus Weber",
    role: "CEO & Gründer",
    bio: "Über 15 Jahre Erfahrung im Executive Search und Personalberatung. Spezialisiert auf die Vermittlung von Führungskräften in der IT- und Technologiebranche.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "markus.weber@getexperts.de",
    specialties: ["Executive Search", "IT Leadership", "Strategieberatung"],
  },
  {
    id: 2,
    name: "Julia Schmidt",
    role: "Head of Recruiting",
    bio: "Expertin für moderne Recruiting-Methoden mit Fokus auf Active Sourcing und datengestützter Kandidatenauswahl. Zuvor HR-Leiterin bei einem führenden Tech-Unternehmen.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "julia.schmidt@getexperts.de",
    specialties: ["Active Sourcing", "Tech Recruiting", "Employer Branding"],
  },
  {
    id: 3,
    name: "Thomas Müller",
    role: "Senior Consultant Finance",
    bio: "Spezialist für die Vermittlung von Finanzexperten und Führungskräften im Finanzbereich. Über 10 Jahre Erfahrung im Finance Recruiting.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "thomas.mueller@getexperts.de",
    specialties: ["Finance", "Controlling", "Banking"],
  },
  {
    id: 4,
    name: "Sarah Becker",
    role: "Senior Consultant IT",
    bio: "Fokus auf die Vermittlung von IT-Spezialisten und Entwicklern. Tiefes Verständnis für technische Anforderungen und Entwicklerprofile.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "sarah.becker@getexperts.de",
    specialties: ["Software Development", "DevOps", "IT Architecture"],
  },
  {
    id: 5,
    name: "Michael Schneider",
    role: "Consultant Marketing & Sales",
    bio: "Spezialisiert auf die Vermittlung von Marketing- und Vertriebsexperten. Umfangreiche Erfahrung in der Besetzung von Positionen im digitalen Marketing.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "michael.schneider@getexperts.de",
    specialties: ["Digital Marketing", "Sales", "E-Commerce"],
  },
  {
    id: 6,
    name: "Laura Wagner",
    role: "Talent Acquisition Specialist",
    bio: "Expertin für innovative Sourcing-Strategien und Candidate Experience. Fokus auf die Identifikation von Talenten in einem herausfordernden Marktumfeld.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "laura.wagner@getexperts.de",
    specialties: ["Talent Sourcing", "Candidate Experience", "HR Tech"],
  },
]

export default function TeamGrid() {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onMouseEnter={() => setActiveId(member.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            {/* Hintergrund-Effekt */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-xl opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-300"></div>

            <div className="relative glass-card overflow-hidden h-full flex flex-col">
              {/* Bild mit Overlay */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Social Media Icons (erscheinen beim Hover) */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-primary/80 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-primary/80 transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                  )}
                  <a
                    href={`mailto:${member.email}`}
                    className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-primary/80 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Inhalt */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>

                <p className="text-white/70 text-sm mb-4 flex-grow">
                  {activeId === member.id ? member.bio : member.bio.substring(0, 100) + "..."}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {member.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <Link href={`/team/${member.id}`}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                  >
                    Profil ansehen <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
