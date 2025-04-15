"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function RatingsSection() {
  return (
    <section className="py-16 bg-[#0d0d14] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Bewertungen */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="h-6 w-6 text-[#fbbf24] fill-[#fbbf24]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                    fill="currentColor"
                  />
                </svg>
              ))}
            </div>
            <p className="text-white/70 text-sm mb-6">4.9/5 basierend auf 127 Bewertungen</p>

            <div className="flex -space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0d0d14] overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=40&width=40&text=${i}`}
                    alt={`Kunde ${i}`}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-white/70 text-sm">500+ zufriedene Kunden</p>
          </div>

          {/* Statistiken */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center">
              <div className="bg-[#6246ea]/10 rounded-full p-3 mb-4">
                <svg
                  className="h-6 w-6 text-[#6246ea]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white">98%</div>
              <p className="text-white/60 text-sm">Kundenzufriedenheit</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#6246ea]/10 rounded-full p-3 mb-4">
                <svg
                  className="h-6 w-6 text-[#6246ea]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white">500+</div>
              <p className="text-white/60 text-sm">Erfolgreiche Vermittlungen</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#6246ea]/10 rounded-full p-3 mb-4">
                <svg
                  className="h-6 w-6 text-[#6246ea]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8V12L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white">15+</div>
              <p className="text-white/60 text-sm">Jahre Expertise</p>
            </div>
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative mb-8">
              <div className="absolute -top-4 -left-4 text-4xl text-[#6246ea]/20">"</div>
              <div className="absolute -bottom-4 -right-4 text-4xl text-[#6246ea]/20">"</div>
              <p className="text-xl text-white/80 italic px-8">
                GetExperts hat uns geholfen, innerhalb kürzester Zeit die perfekten Kandidaten zu finden.
              </p>
            </div>
            <p className="text-white/60">— Thomas M., CTO bei TechVision GmbH</p>
          </motion.div>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="mt-16 pt-4 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-[#10b981]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span className="text-sm text-white/60">Sichere Datenübertragung</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-[#10b981]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm text-white/60">DSGVO-konform</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-[#10b981]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12H18L15 21L9 3L6 12H2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm text-white/60">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
