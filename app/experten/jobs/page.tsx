"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, Briefcase, Filter, X, ChevronDown, Clock, ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useJobs } from "@/hooks/use-jobs"
import JobListingCard from "@/components/job-listing-card"
import { JobFilters } from "@/lib/fetch-jobs"

// Categories for the tabs
const categories = [
  { id: "all", name: "Alle Bereiche" },
  { id: "it", name: "IT & Software" },
  { id: "marketing", name: "Marketing" },
  { id: "sales", name: "Vertrieb" },
  { id: "finance", name: "Finanzen" },
  { id: "hr", name: "HR" },
  { id: "engineering", name: "Engineering" },
  { id: "legal", name: "Legal" },
  { id: "healthcare", name: "Healthcare" },
]

export default function JobBoardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [appliedFilters, setAppliedFilters] = useState<JobFilters>({})
  
  // Use the jobs hook to fetch data
  const { 
    jobs, 
    pagination,
    filterOptions,
    isLoading, 
    error, 
    updateFilters,
    resetFilters,
    loadMore
  } = useJobs();
  
  // Update search term with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm !== undefined) {
        updateFilters({ search: searchTerm });
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, updateFilters]);
  
  // Toggle for Location filter
  const toggleLocationFilter = (location: string) => {
    setAppliedFilters(prev => {
      const newFilters = { ...prev };
      if (prev.location === location) {
        delete newFilters.location;
      } else {
        newFilters.location = location;
      }
      return newFilters;
    });
    
    updateFilters({ location: appliedFilters.location === location ? undefined : location });
  }
  
  // Toggle for Type filter
  const toggleTypeFilter = (type: string) => {
    setAppliedFilters(prev => {
      const newFilters = { ...prev };
      if (prev.type === type) {
        delete newFilters.type;
      } else {
        newFilters.type = type;
      }
      return newFilters;
    });
    
    updateFilters({ type: appliedFilters.type === type ? undefined : type });
  }
  
  // Reset all filters
  const handleResetFilters = () => {
    setSearchTerm("");
    setAppliedFilters({});
    resetFilters();
  }
  
  // Handle category change
  const handleCategoryChange = (category: string) => {
    setAppliedFilters(prev => ({
      ...prev,
      category: category === 'all' ? undefined : category
    }));
    
    updateFilters({ 
      category: category === 'all' ? undefined : category 
    });
  }

  // Check if we have active filters
  const hasActiveFilters = () => {
    return !!searchTerm || 
      Object.keys(appliedFilters).filter(key => key !== 'page' && key !== 'limit').length > 0;
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl font-bold mb-4">Finde deinen Traumjob</h1>
                <p className="text-gray-700 mb-6">
                  Entdecke exklusive Jobangebote und starte deine Karriere bei Top-Unternehmen.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Tipp:</strong> Nutze die Filter, um deine Suche zu verfeinern und passende Stellen zu finden.
                </p>
                <div className="flex items-center mt-6">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=AM"
                    alt="Annika Müller"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium">Annika Müller</p>
                    <p className="text-xs text-gray-500">Deine persönliche Ansprechpartnerin</p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Job+Board"
                  alt="Job Board"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <Tabs 
          defaultValue="all" 
          className="mb-8"
          onValueChange={handleCategoryChange}
          value={appliedFilters.category || "all"}
        >
          <TabsList className="bg-white p-1 shadow-sm border overflow-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Suchleiste */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Suche nach Jobtitel, Unternehmen oder Skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 py-6 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-gray-900"
          />
          <Button
            variant="ghost"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 hover:bg-transparent"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5 mr-2" />
            Filter
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </Button>
        </div>

        {/* Erweiterte Filter */}
        {showFilters && filterOptions && (
          <div className="mb-8">
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Erweiterte Filter</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleResetFilters} 
                  className={`text-gray-600 hover:text-gray-900 ${!hasActiveFilters() ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!hasActiveFilters()}
                >
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
                    {filterOptions.locations?.map((location) => (
                      <Badge
                        key={location}
                        variant={appliedFilters.location === location ? "default" : "outline"}
                        className={`cursor-pointer ${
                          appliedFilters.location === location
                            ? "bg-primary hover:bg-primary/80 text-white"
                            : "hover:bg-primary/10 text-gray-700"
                        }`}
                        onClick={() => toggleLocationFilter(location)}
                      >
                        {location}
                        {appliedFilters.location === location && <X className="ml-1 h-3 w-3" />}
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
                    {filterOptions.employmentTypes?.map((type) => (
                      <Badge
                        key={type}
                        variant={appliedFilters.type === type ? "default" : "outline"}
                        className={`cursor-pointer ${
                          appliedFilters.type === type
                            ? "bg-primary hover:bg-primary/80 text-white"
                            : "hover:bg-primary/10 text-gray-700"
                        }`}
                        onClick={() => toggleTypeFilter(type)}
                      >
                        {type}
                        {appliedFilters.type === type && <X className="ml-1 h-3 w-3" />}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Job-Anzahl und Sortierung */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 text-sm">
            {isLoading ? (
              <span className="flex items-center">
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Suche Stellenangebote...
              </span>
            ) : error ? (
              <span className="text-red-500">Fehler beim Laden der Stellenangebote</span>
            ) : (
              `${pagination?.totalJobs || 0} Stellenangebote gefunden`
            )}
          </p>
        </div>

        {/* Job-Liste */}
        <div className="grid gap-6">
          {isLoading && jobs.length === 0 ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : jobs.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="mb-4 flex justify-center">
                <X className="h-12 w-12 text-gray-400 p-2 rounded-full bg-gray-100" />
              </div>
              <h3 className="text-lg font-medium mb-2">Keine Stellenangebote gefunden</h3>
              <p className="text-gray-600 mb-4">
                Versuche andere Suchbegriffe oder entferne einige Filter, um mehr Ergebnisse zu erhalten.
              </p>
              <Button onClick={handleResetFilters} className="mt-2">
                Filter zurücksetzen
              </Button>
            </div>
          ) : (
            <>
              {jobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <JobListingCard job={job} />
                </motion.div>
              ))}
            </>
          )}
        </div>

        {/* Load More Button */}
        {!isLoading && jobs.length > 0 && pagination?.hasMore && (
          <div className="mt-8 flex justify-center">
            <Button 
              onClick={loadMore} 
              variant="outline" 
              className="px-8"
            >
              Mehr anzeigen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
        
        {/* Pagination info */}
        {!isLoading && jobs.length > 0 && pagination && (
          <div className="mt-4 text-center text-sm text-gray-500">
            Zeige {jobs.length} von {pagination.totalJobs} Stellenangeboten
          </div>
        )}
      </div>
    </div>
  )
}
