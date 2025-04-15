"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { Search, MapPin, Briefcase, Filter, X, ChevronDown, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

// Beispiel-Jobs für die Demo
const jobListings = [
  {
    id: "job1",
    title: "Senior Frontend Developer",
    company: "TechVision GmbH",
    location: "Berlin",
    type: "Vollzeit",
    salary: "80.000€ - 95.000€",
    posted: "vor 2 Tagen",
    tags: ["React", "TypeScript", "Next.js"],
    category: "it",
    featured: true,
  },
  {
    id: "job2",
    title: "Marketing Manager",
    company: "BrandBoost AG",
    location: "München",
    type: "Vollzeit",
    salary: "65.000€ - 75.000€",
    posted: "vor 1 Woche",
    tags: ["SEO", "Content Marketing", "Social Media"],
    category: "marketing",
  },
  {
    id: "job3",
    title: "Financial Controller",
    company: "Finance Plus AG",
    location: "Hamburg",
    type: "Vollzeit",
    salary: "70.000€ - 85.000€",
    posted: "vor 3 Tagen",
    tags: ["Controlling", "SAP", "Reporting"],
    category: "finance",
    featured: true,
  },
  {
    id: "job4",
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Remote",
    type: "Vollzeit",
    salary: "75.000€ - 90.000€",
    posted: "vor 5 Tagen",
    tags: ["Kubernetes", "Docker", "CI/CD"],
    category: "it",
  },
  {
    id: "job5",
    title: "UX/UI Designer",
    company: "DesignHub GmbH",
    location: "Köln",
    type: "Vollzeit",
    salary: "60.000€ - 75.000€",
    posted: "vor 1 Tag",
    tags: ["Figma", "Adobe XD", "User Research"],
    category: "design",
  },
  {
    id: "job6",
    title: "Sales Manager",
    company: "GrowthPartners",
    location: "Frankfurt",
    type: "Vollzeit",
    salary: "70.000€ - 90.000€ + Bonus",
    posted: "vor 1 Woche",
    tags: ["B2B", "SaaS", "Account Management"],
    category: "sales",
  },
]

export default function JobSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [locationFilter, setLocationFilter] = useState<string[]>([])
  const [typeFilter, setTypeFilter] = useState<string[]>([])

  // Alle verfügbaren Standorte und Typen für Filter
  const locations = Array.from(new Set(jobListings.map((job) => job.location)))
  const types = Array.from(new Set(jobListings.map((job) => job.type)))

  // Filter-Logik
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory

    const matchesLocation = locationFilter.length === 0 || locationFilter.includes(job.location)
    const matchesType = typeFilter.length === 0 || typeFilter.includes(job.type)

    return matchesSearch && matchesCategory && matchesLocation && matchesType
  })

  // Toggle für Location-Filter
  const toggleLocationFilter = (location: string) => {
    setLocationFilter((prev) =>
      prev.includes(location) ? prev.filter((loc) => loc !== location) : [...prev, location],
    )
  }

  // Toggle für Type-Filter
  const toggleTypeFilter = (type: string) => {
    setTypeFilter((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  // Reset aller Filter
  const resetFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setLocationFilter([])
    setTypeFilter([])
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Suchleiste */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-white/40" />
        </div>
        <Input
          type="text"
          placeholder="Suche nach Jobtitel, Unternehmen oder Skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 py-6 bg-[#0f0f1a]/80 backdrop-blur-sm border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-white"
        />
        <Button
          variant="ghost"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white hover:bg-transparent"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-5 w-5 mr-2" />
          Filter
          <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
        </Button>
      </div>

      {/* Erweiterte Filter */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8 overflow-hidden"
          >
            <div className="glass-card p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Erweiterte Filter</h3>
                <Button variant="ghost" size="sm" onClick={resetFilters} className="text-white/60 hover:text-white">
                  <X className="h-4 w-4 mr-1" />
                  Zurücksetzen
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Standort-Filter */}
                <div>
                  <h4 className="text-sm font-medium mb-3 flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-primary" />
                    Standort
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((location) => (
                      <Badge
                        key={location}
                        variant={locationFilter.includes(location) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          locationFilter.includes(location) ? "bg-primary hover:bg-primary/80" : "hover:bg-primary/10"
                        }`}
                        onClick={() => toggleLocationFilter(location)}
                      >
                        {location}
                        {locationFilter.includes(location) && <X className="ml-1 h-3 w-3" />}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Anstellungsart-Filter */}
                <div>
                  <h4 className="text-sm font-medium mb-3 flex items-center">
                    <Briefcase className="h-4 w-4 mr-1 text-primary" />
                    Anstellungsart
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {types.map((type) => (
                      <Badge
                        key={type}
                        variant={typeFilter.includes(type) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          typeFilter.includes(type) ? "bg-primary hover:bg-primary/80" : "hover:bg-primary/10"
                        }`}
                        onClick={() => toggleTypeFilter(type)}
                      >
                        {type}
                        {typeFilter.includes(type) && <X className="ml-1 h-3 w-3" />}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Kategorie-Tabs */}
      <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
        <TabsList className="bg-[#0f0f1a]/80 border border-white/10 p-1 overflow-x-auto flex-wrap">
          <TabsTrigger value="all">Alle Jobs</TabsTrigger>
          <TabsTrigger value="it">IT & Entwicklung</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Ergebnisse */}
      <div className="space-y-4">
        {filteredJobs.length > 0 ? (
          <>
            <p className="text-white/60 text-sm mb-4">{filteredJobs.length} Jobs gefunden</p>
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`glass-card p-6 relative ${
                  job.featured ? "border-primary/30 bg-primary/5" : "border-white/10"
                }`}
              >
                {job.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/30">
                    Featured
                  </Badge>
                )}
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium mb-1">{job.title}</h3>
                    <p className="text-white/70 mb-3">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-white/60 mb-4">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-primary/70" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1 text-primary/70" />
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-primary/70" />
                        {job.posted}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-white/5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <p className="text-lg font-medium text-white mb-3">{job.salary}</p>
                    <Link href={`/jobs/${job.id}`}>
                      <Button className="w-full md:w-auto bg-primary hover:bg-primary/90">
                        Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </>
        ) : (
          <div className="glass-card p-8 text-center">
            <p className="text-white/70 mb-4">Keine Jobs gefunden, die deinen Filterkriterien entsprechen.</p>
            <Button variant="outline" onClick={resetFilters}>
              Filter zurücksetzen
            </Button>
          </div>
        )}
      </div>

      {/* Mehr Jobs Button */}
      {filteredJobs.length > 0 && (
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-white/20 hover:bg-white/5">
            Mehr Jobs laden
          </Button>
        </div>
      )}
    </div>
  )
}
