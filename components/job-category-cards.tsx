"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, LineChart, Lightbulb, Building, ShoppingBag, Stethoscope } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function JobCategoryCards() {
  // Kategorien für Jobs
  const categories = [
    {
      id: "tech",
      title: "IT & Technologie",
      description: "Software-Entwickler, DevOps, IT-Projektmanager, Data Scientists",
      icon: <Code className="h-6 w-6 text-white" />,
      color: "from-blue-500 to-cyan-400",
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "blue-600",
      image: "/placeholder.svg?height=120&width=120&text=IT",
      link: "/jobs/it-technologie",
    },
    {
      id: "finance",
      title: "Finance & Banking",
      description: "Controller, Financial Analysts, Compliance & Risk Manager",
      icon: <LineChart className="h-6 w-6 text-white" />,
      color: "from-emerald-500 to-green-400",
      bgColor: "from-emerald-50 to-green-50",
      textColor: "emerald-600",
      image: "/placeholder.svg?height=120&width=120&text=Finance",
      link: "/jobs/finance-banking",
    },
    {
      id: "marketing",
      title: "Marketing & Sales",
      description: "Marketing Manager, SEO-Spezialisten, Content Manager, Sales Manager",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      color: "from-orange-500 to-red-400",
      bgColor: "from-orange-50 to-red-50",
      textColor: "orange-600",
      image: "/placeholder.svg?height=120&width=120&text=Marketing",
      link: "/jobs/marketing-sales",
    },
    {
      id: "manufacturing",
      title: "Produktion & Industrie",
      description: "Ingenieure, Produktionsleiter, Qualitätsmanager",
      icon: <Building className="h-6 w-6 text-white" />,
      color: "from-amber-500 to-yellow-400",
      bgColor: "from-amber-50 to-yellow-50",
      textColor: "amber-600",
      image: "/placeholder.svg?height=120&width=120&text=Produktion",
      link: "/jobs/produktion-industrie",
    },
    {
      id: "healthcare",
      title: "Healthcare & Pharma",
      description: "Ärzte, Pharmareferenten, Regulatory Affairs Manager, Medizintechniker",
      icon: <Stethoscope className="h-6 w-6 text-white" />,
      color: "from-red-500 to-pink-400",
      bgColor: "from-red-50 to-pink-50",
      textColor: "red-600",
      image: "/placeholder.svg?height=120&width=120&text=Healthcare",
      link: "/jobs/healthcare-pharma",
    },
    {
      id: "retail",
      title: "E-Commerce & Retail",
      description: "E-Commerce Manager, Category Manager, Logistik & Fulfillment Experten",
      icon: <ShoppingBag className="h-6 w-6 text-white" />,
      color: "from-purple-500 to-violet-400",
      bgColor: "from-purple-50 to-violet-50",
      textColor: "purple-600",
      image: "/placeholder.svg?height=120&width=120&text=Retail",
      link: "/jobs/ecommerce-retail",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={`bg-gradient-to-br ${category.bgColor} p-6`}>
            <div className="flex items-center">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
              >
                {category.icon}
              </div>
              <h3
                className={`text-xl font-bold ml-4 text-gray-900 group-hover:text-${category.textColor} transition-colors`}
              >
                {category.title}
              </h3>
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-700 mb-6 leading-relaxed">{category.description}</p>

            <div className="flex justify-between items-center">
              <Link
                href={category.link}
                className={`inline-flex items-center text-${category.textColor} text-sm font-medium group/link`}
              >
                Jobs ansehen
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>

              <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
