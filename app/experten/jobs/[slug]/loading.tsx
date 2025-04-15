import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export default function JobDetailLoading() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Link Skeleton */}
        <div className="mb-6">
          <Skeleton className="h-5 w-32" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Skeletons */}
          <div className="col-span-1 lg:col-span-2">
            {/* Job Header Card Skeleton */}
            <Card className="mb-8 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex gap-4 items-center">
                    {/* Company Logo Skeleton */}
                    <Skeleton className="h-16 w-16 rounded-lg" />
                    
                    <div>
                      <Skeleton className="h-8 w-64 mb-2" />
                      <Skeleton className="h-4 w-40" />
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20 rounded-full" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-4/5" />
                    <Skeleton className="h-6 w-3/5" />
                  </div>
                  
                  <div className="space-y-3">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-4/5" />
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Job Description Skeleton */}
            <Card className="mb-8">
              <div className="p-6 md:p-8">
                <Skeleton className="h-7 w-40 mb-4" />
                <div className="space-y-2 mb-8">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-11/12" />
                </div>
                
                <Skeleton className="h-7 w-40 mb-4" />
                <div className="space-y-2 mb-8">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-11/12" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-full" />
                </div>
                
                <Skeleton className="h-7 w-40 mb-4" />
                <div className="space-y-2 mb-8">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-11/12" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                
                <Skeleton className="h-7 w-40 mb-4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-11/12" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            </Card>
            
            {/* Tags Skeleton */}
            <Card className="mb-8 lg:mb-0">
              <div className="p-6 md:p-8">
                <Skeleton className="h-7 w-48 mb-4" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-28 rounded-full" />
                  <Skeleton className="h-6 w-32 rounded-full" />
                </div>
              </div>
            </Card>
          </div>
          
          {/* Sidebar Skeletons */}
          <div className="col-span-1">
            {/* Apply Card Skeleton */}
            <Card className="mb-6">
              <div className="p-6">
                <Skeleton className="h-7 w-36 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-4/5 mb-6" />
                
                <div className="space-y-4">
                  <Skeleton className="h-10 w-full rounded" />
                  
                  <div className="flex gap-2">
                    <Skeleton className="h-10 w-full rounded" />
                    <Skeleton className="h-10 w-full rounded" />
                  </div>
                </div>
                
                <div className="my-6 h-px bg-gray-200" />
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-8" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Company Card Skeleton */}
            <Card>
              <div className="p-6">
                <Skeleton className="h-7 w-48 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-11/12 mb-4" />
                
                <Skeleton className="h-10 w-full rounded" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 