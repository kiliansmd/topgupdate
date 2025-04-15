import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export default function JobsLoading() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section Skeleton */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Skeleton className="h-10 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-6" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-4/6 mb-4" />
                
                <div className="flex items-center mt-6">
                  <Skeleton className="h-10 w-10 rounded-full mr-3" />
                  <div>
                    <Skeleton className="h-3 w-32 mb-1" />
                    <Skeleton className="h-3 w-40" />
                  </div>
                </div>
              </div>
              <div>
                <Skeleton className="h-60 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Search Bar Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-14 w-full rounded-lg" />
        </div>

        {/* Job List Skeletons */}
        <div className="space-y-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="p-6">
                <div className="flex gap-4">
                  {/* Logo Skeleton */}
                  <div className="hidden sm:block">
                    <Skeleton className="h-14 w-14 rounded-lg" />
                  </div>
                  
                  {/* Content Skeleton */}
                  <div className="w-full">
                    <div className="flex justify-between">
                      <div>
                        <Skeleton className="h-6 w-48 mb-2" />
                        <Skeleton className="h-4 w-32 mb-4" />
                      </div>
                      <Skeleton className="h-6 w-6 rounded" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-36" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Skeleton className="h-6 w-16 rounded-full" />
                      <Skeleton className="h-6 w-20 rounded-full" />
                      <Skeleton className="h-6 w-24 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
