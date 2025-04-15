import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Search } from "lucide-react"
import Image from "next/image"

export default function JobNotFound() {
  return (
    <div className="bg-gray-50 min-h-[60vh] py-16">
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 max-w-3xl mx-auto">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
            <Search className="h-8 w-8 text-red-500" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Stellenangebot nicht gefunden</h1>
          
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Das gesuchte Stellenangebot existiert nicht mehr oder wurde bereits besetzt.
            Entdecke unsere anderen offenen Stellen, die zu deinen Qualifikationen passen könnten.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/experten/jobs">
              <Button className="w-full sm:w-auto">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Alle Stellenangebote
              </Button>
            </Link>
            
            <Link href="/kontakt">
              <Button variant="outline" className="w-full sm:w-auto">
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h2 className="text-lg font-medium mb-4">Vielleicht interessieren dich diese Bereiche:</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/experten/jobs?category=it" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700">
                IT & Software
              </Link>
              <Link href="/experten/jobs?category=marketing" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700">
                Marketing
              </Link>
              <Link href="/experten/jobs?category=finance" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700">
                Finanzen
              </Link>
              <Link href="/experten/jobs?category=sales" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700">
                Vertrieb
              </Link>
              <Link href="/experten/jobs?category=hr" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700">
                HR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 