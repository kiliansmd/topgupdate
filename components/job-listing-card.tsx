"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { MapPin, Briefcase, Clock, Building2, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Job } from "@/lib/fetch-jobs"

interface JobListingCardProps {
  job: Job
}

export default function JobListingCard({ job }: JobListingCardProps) {
  // Format date (e.g., "vor 2 Tagen")
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) {
      return "Heute"
    } else if (diffDays === 1) {
      return "Gestern"
    } else if (diffDays < 7) {
      return `vor ${diffDays} Tagen`
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7)
      return `vor ${weeks} ${weeks === 1 ? 'Woche' : 'Wochen'}`
    } else {
      const months = Math.floor(diffDays / 30)
      return `vor ${months} ${months === 1 ? 'Monat' : 'Monaten'}`
    }
  }
  
  const tags = job.tags.split(',')
  
  return (
    <Link href={`/experten/jobs/${job.slug}`} className="block transition-transform hover:scale-[1.01]">
      <Card className={`overflow-hidden border hover:border-primary/50 transition-all
        ${job.featured ? 'shadow-md border-primary/30 bg-primary/5' : 'shadow-sm'}
        ${job.urgent ? 'ring-1 ring-red-500/20' : ''}
      `}>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              {/* Company Logo */}
              <div className="hidden sm:block">
                <div className="h-14 w-14 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                  {job.logoUrl ? (
                    <Image 
                      src={job.logoUrl} 
                      alt={job.company} 
                      width={56} 
                      height={56}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Building2 className="h-8 w-8 text-gray-400" />
                  )}
                </div>
              </div>
              
              {/* Job Info */}
              <div>
                <div className="flex gap-2 items-center mb-1">
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  {job.urgent && (
                    <Badge variant="destructive" className="text-xs py-0">Dringend</Badge>
                  )}
                  {job.featured && (
                    <Badge variant="default" className="bg-primary text-xs py-0">Empfohlen</Badge>
                  )}
                </div>
                
                <p className="text-gray-700 mb-2">{job.company}</p>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{job.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4 text-gray-500" />
                    <span>{job.employmentType}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{formatDate(job.createdAt)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <ArrowUpRight className="h-5 w-5 text-primary sm:block hidden" />
          </div>
          
          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-gray-100/80 text-gray-700 hover:bg-gray-200">
                {tag.trim()}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="bg-gray-50 text-gray-600">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </Card>
    </Link>
  )
} 