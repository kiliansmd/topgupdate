import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"

export default function FooterLight() {
  const currentYear = new Date().getFullYear()

  // SEO-relevante Blog-Artikel
  const blogArticles = [
    { title: "Recruiting-Trends 2025", href: "/blog/recruiting-trends-2025" },
    { title: "Erfolgreiche Mitarbeitergewinnung", href: "/blog/erfolgreiche-mitarbeitergewinnung" },
    { title: "Remote Work: Herausforderungen für HR", href: "/blog/remote-work-herausforderungen" },
    { title: "Employer Branding Strategien", href: "/blog/employer-branding-strategien" },
  ]

  // SEO-relevante Begriffe und Kategorien
  const seoTerms = [
    { category: "Branchen", terms: ["IT & Tech", "Finance", "Healthcare", "Engineering", "Marketing"] },
    { category: "Positionen", terms: ["C-Level", "Management", "Fachkräfte", "Entwickler", "Projektleiter"] },
    { category: "Regionen", terms: ["Berlin", "München", "Hamburg", "Frankfurt", "Köln", "Remote"] },
  ]

  return (
    <footer
      className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 relative overflow-hidden"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-100/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Hauptbereich des Footers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Spalte 1: Logo und Unternehmensinformationen */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/getexperts-logo-dark.png"
                alt="GetExperts Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
                itemProp="logo"
              />
            </Link>
            <p className="text-gray-600 text-sm mb-6 max-w-xs" itemProp="description">
              Premium Personalberatung für die Vermittlung von Fachkräften und Experten in allen Branchen.
              Maßgeschneiderte Recruiting-Lösungen für Ihren Erfolg.
            </p>
            <div className="flex space-x-3 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-gradient-to-r from-indigo-100 to-violet-100 hover:from-indigo-200 hover:to-violet-200 p-2 rounded-full transition-colors"
              >
                <Linkedin size={16} className="text-indigo-600" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="bg-gradient-to-r from-indigo-100 to-violet-100 hover:from-indigo-200 hover:to-violet-200 p-2 rounded-full transition-colors"
              >
                <Twitter size={16} className="text-indigo-600" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-gradient-to-r from-indigo-100 to-violet-100 hover:from-indigo-200 hover:to-violet-200 p-2 rounded-full transition-colors"
              >
                <Instagram size={16} className="text-indigo-600" />
              </a>
            </div>
          </div>

          {/* Spalte 2: Dienstleistungen und Links */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-800">Dienstleistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/recruiting-loesungen"
                  className="text-gray-600 hover:text-indigo-600 text-xs transition-colors"
                >
                  Recruiting-Lösungen
                </Link>
              </li>
              <li>
                <Link href="/festanstellung" className="text-gray-600 hover:text-indigo-600 text-xs transition-colors">
                  Festanstellung
                </Link>
              </li>
              <li>
                <Link href="/freelancer" className="text-gray-600 hover:text-indigo-600 text-xs transition-colors">
                  Freelancer
                </Link>
              </li>
              <li>
                <Link
                  href="/executive-search"
                  className="text-gray-600 hover:text-indigo-600 text-xs transition-colors"
                >
                  Executive Search
                </Link>
              </li>
              <li>
                <Link
                  href="/karriereberatung"
                  className="text-gray-600 hover:text-indigo-600 text-xs transition-colors"
                >
                  Karriereberatung
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-medium mb-4 mt-6 text-gray-800">Unternehmen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ueber-uns" className="text-gray-600 hover:text-indigo-600 text-xs transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/karriere" className="text-gray-600 hover:text-indigo-600 text-xs transition-colors">
                  Karriere bei uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-600 hover:text-indigo-600 text-xs transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 3: Blog-Artikel und Ressourcen */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-800">Blog & Insights</h3>
            <ul className="space-y-2">
              {blogArticles.map((article, index) => (
                <li key={index}>
                  <Link href={article.href} className="text-gray-600 hover:text-indigo-600 text-xs transition-colors">
                    {article.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 text-xs transition-colors">
                  Alle Artikel ansehen
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-medium mb-4 mt-6 text-gray-800">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-3 w-3 text-indigo-600 mt-0.5" />
                <span className="text-gray-600 text-xs" itemProp="email">
                  info@getexperts.de
                </span>
              </li>
              <li className="flex items-start" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="mr-2 h-3 w-3 text-indigo-600 mt-0.5" />
                <span className="text-gray-600 text-xs">
                  <span itemProp="streetAddress">Expertstraße 123</span>, <span itemProp="postalCode">50667</span>{" "}
                  <span itemProp="addressLocality">Köln</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Spalte 4: SEO-relevante Begriffe */}
          <div>
            {seoTerms.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-sm font-medium mb-4 text-gray-800">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.terms.map((term, termIndex) => (
                    <Link
                      key={termIndex}
                      href={`/${category.category.toLowerCase()}/${term.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-500 hover:text-indigo-600 text-xs bg-gradient-to-r from-indigo-50 to-violet-50 px-2 py-1 rounded-full transition-colors"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unterer Bereich mit Copyright und rechtlichen Links */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center relative z-10">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            © {currentYear} GetExperts GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/datenschutz" className="text-gray-500 text-xs hover:text-indigo-600 transition-colors">
              Datenschutz
            </Link>
            <Link href="/impressum" className="text-gray-500 text-xs hover:text-indigo-600 transition-colors">
              Impressum
            </Link>
            <Link href="/agb" className="text-gray-500 text-xs hover:text-indigo-600 transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>

      {/* Structured Data für SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "GetExperts GmbH",
            url: "https://getexperts.de",
            logo: "https://getexperts.de/images/getexperts-logo.png",
            description: "Premium Personalberatung für die Vermittlung von Fachkräften und Experten in allen Branchen.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Expertstraße 123",
              addressLocality: "Köln",
              postalCode: "50667",
              addressCountry: "DE",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+49-221-123456789",
              contactType: "customer service",
              email: "info@getexperts.de",
              availableLanguage: ["German", "English"],
            },
            sameAs: [
              "https://www.linkedin.com/company/getexperts",
              "https://twitter.com/getexperts",
              "https://www.instagram.com/getexperts",
            ],
          }),
        }}
      />
    </footer>
  )
}
