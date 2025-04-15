"use client"

import { useEffect } from "react"
import { Metadata, ResolvingMetadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MapPin, Briefcase, Building2, Clock, ChevronLeft, Star, Share2, ArrowUpRight, Bookmark, Euro, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useJob } from "@/hooks/use-jobs"
import { fetchJobBySlug } from "@/lib/fetch-jobs"
import { notFound } from "next/navigation"

interface JobDetailPageProps {
  params: {
    slug: string
  }
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = params
  const { job, isLoading, error } = useJob(slug)

  // Redirect to 404 if job not found
  useEffect(() => {
    if (!isLoading && !job && !error) {
      notFound()
    }
  }, [isLoading, job, error])

  // Format date
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "Unbekannt"
    
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date)
  }

  // Generate tag array from comma-separated string
  const tags = job?.tags ? job.tags.split(',').map(tag => tag.trim()) : []

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-gray-600">Stellenangebot wird geladen...</p>
        </div>
      </div>
    )
  }

  if (error || !job) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <h1 className="text-2xl font-bold mb-4">Stellenangebot konnte nicht geladen werden</h1>
          <p className="text-gray-600 mb-6">Leider ist ein Fehler aufgetreten oder das Stellenangebot existiert nicht mehr.</p>
          <Link href="/experten/jobs">
            <Button>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Zurück zu allen Jobs
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/experten/jobs" className="text-gray-600 hover:text-gray-900 inline-flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Alle Stellenangebote
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-1 lg:col-span-2">
            {/* Job Header Card */}
            <Card className="mb-8 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex gap-4 items-center">
                    {/* Company Logo */}
                    <div className="h-16 w-16 rounded-lg bg-gray-100 overflow-hidden flex items-center justify-center">
                      {job.logoUrl ? (
                        <Image 
                          src={job.logoUrl} 
                          alt={job.company} 
                          width={64} 
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Building2 className="h-8 w-8 text-gray-400" />
                      )}
                    </div>
                    
                    <div>
                      <h1 className="text-2xl font-bold mb-1">{job.title}</h1>
                      <p className="text-gray-700">{job.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {job.featured && (
                      <Badge className="bg-primary">Featured</Badge>
                    )}
                    {job.urgent && (
                      <Badge variant="destructive">Dringend</Badge>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span>{job.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-700">
                      <Briefcase className="h-5 w-5 text-gray-500" />
                      <span>{job.employmentType} / {job.workModel}</span>
                    </div>
                    
                    {job.salary && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <Euro className="h-5 w-5 text-gray-500" />
                        <span>{job.salary}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Building2 className="h-5 w-5 text-gray-500" />
                      <span>{job.industry}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <span>Veröffentlicht am {formatDate(job.createdAt)}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <span>Bewerbungsfrist bis {formatDate(job.expiresAt || '')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Job Description */}
            <Card className="mb-8">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-4">Beschreibung</h2>
                <div 
                  className="prose prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
                
                <h2 className="text-xl font-semibold mt-8 mb-4">Aufgaben</h2>
                <div 
                  className="prose prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: job.responsibilities }}
                />
                
                <h2 className="text-xl font-semibold mt-8 mb-4">Anforderungen</h2>
                <div 
                  className="prose prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: job.requirements }}
                />
                
                <h2 className="text-xl font-semibold mt-8 mb-4">Benefits</h2>
                <div 
                  className="prose prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: job.benefits }}
                />
              </div>
            </Card>
            
            {/* Tags */}
            <Card className="mb-8 lg:mb-0">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-4">Skills & Keywords</h2>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100/80 text-gray-700 hover:bg-gray-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="col-span-1">
            {/* Apply Card */}
            <Card className="mb-6 sticky top-6">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Jetzt bewerben</h2>
                <p className="text-gray-600 mb-6">
                  Bewirb dich jetzt für diese Position und starte deine Karriere bei {job.company}.
                </p>
                
                <div className="space-y-4">
                  <Button className="w-full">
                    Jetzt bewerben
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Bookmark className="mr-2 h-4 w-4" />
                      Speichern
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" />
                      Teilen
                    </Button>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="text-gray-600 text-sm space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Job-ID:</span>
                    <span className="font-medium">{job.id.slice(-8)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Aufrufe:</span>
                    <span className="font-medium">{job.views}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Veröffentlicht:</span>
                    <span className="font-medium">{formatDate(job.createdAt)}</span>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Company Card */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Über {job.company}</h2>
                <p className="text-gray-600 mb-4">
                  {job.company} ist ein führendes Unternehmen in der {job.industry}-Branche mit Standort in {job.location}.
                </p>
                
                <Button variant="outline" className="w-full">
                  Unternehmensprofil anzeigen
                </Button>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Similar Jobs (Future Enhancement) */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Ähnliche Stellenangebote</h2>
          <p className="text-gray-600 text-center py-8">
            Ähnliche Stellenangebote werden bald verfügbar sein.
          </p>
        </div>
      </div>
    </div>
  )
} 