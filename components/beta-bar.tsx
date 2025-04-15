import Link from "next/link"
import { Users, MessageSquare } from "lucide-react"

export default function BetaBar() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white py-1.5 text-center text-sm font-medium fixed top-0 left-0 right-0 z-50 h-9 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-x-4 overflow-hidden whitespace-nowrap">
          <span className="hidden sm:inline">Beta-Version | Exzellente Personalberatung aus Köln</span>
          <span className="sm:hidden">Beta-Version</span>

          <div className="hidden md:flex items-center gap-x-4">
            <span className="h-4 w-px bg-white/30"></span>

            <div className="flex items-center gap-1">
              <Users className="h-3 w-3 text-white/90" />
              <span className="text-xs">Persönliche Ansprechpartner</span>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              <MessageSquare className="h-3 w-3 text-white/90" />
              <span className="text-xs">Menschen statt Chatbot</span>
            </div>
          </div>

          <Link href="#" className="underline hover:text-white/90 transition-colors">
            Mehr erfahren
          </Link>
        </div>
      </div>
    </div>
  )
}
