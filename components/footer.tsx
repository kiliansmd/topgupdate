import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
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
      className="bg-[#0a0a12] border-t border-white/5 pt-16 pb-8"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Hauptbereich des Footers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Spalte 1: Logo und Unternehmensinformationen */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/getexperts-logo.png"
                alt="GetExperts Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
                itemProp="logo"
              />
            </Link>
            <p className="text-white/60 text-sm mb-6 max-w-xs" itemProp="description">
              Premium Personalberatung für die Vermittlung von Fachkräften und Experten in allen Branchen.
              Maßgeschneiderte Recruiting-Lösungen für Ihren Erfolg.
            </p>
            <div className="flex space-x-3 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-primary-900/20 hover:bg-primary-900/30 p-2 rounded-full transition-colors duration-300"
              >
                <Linkedin size={16} className="text-primary-300 hover:text-primary-200" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="bg-primary-900/20 hover:bg-primary-900/30 p-2 rounded-full transition-colors duration-300"
              >
                <Twitter size={16} className="text-primary-300 hover:text-primary-200" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-primary-900/20 hover:bg-primary-900/30 p-2 rounded-full transition-colors duration-300"
              >
                <Instagram size={16} className="text-primary-300 hover:text-primary-200" />
              </a>
            </div>
          </div>

          {/* Spalte 2: Dienstleistungen und Links */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-white/80">Dienstleistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/recruiting-loesungen"
                  className="text-white/50 hover:text-primary-300 text-xs transition-colors duration-300"
                >
                  Recruiting-Lösungen
                </Link>
              </li>
              <li>
                <Link href="/festanstellung" className="text-white/50 hover:text-white text-xs transition-colors">
                  Festanstellung
                </Link>
              </li>
              <li>
                <Link href="/freelancer" className="text-white/50 hover:text-white text-xs transition-colors">
                  Freelancer
                </Link>
              </li>
              <li>
                <Link href="/executive-search" className="text-white/50 hover:text-white text-xs transition-colors">
                  Executive Search
                </Link>
              </li>
              <li>
                <Link href="/karriereberatung" className="text-white/50 hover:text-white text-xs transition-colors">
                  Karriereberatung
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-medium mb-4 mt-6 text-white/80">Unternehmen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ueber-uns" className="text-white/50 hover:text-white text-xs transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/karriere" className="text-white/50 hover:text-white text-xs transition-colors">
                  Karriere bei uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-white/50 hover:text-white text-xs transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 3: Blog-Artikel und Ressourcen */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-white/80">Blog & Insights</h3>
            <ul className="space-y-2">
              {blogArticles.map((article, index) => (
                <li key={index}>
                  <Link href={article.href} className="text-white/50 hover:text-white text-xs transition-colors">
                    {article.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-primary/80 hover:text-primary text-xs transition-colors">
                  Alle Artikel ansehen
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-medium mb-4 mt-6 text-white/80">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-3 w-3 text-primary-400 mt-0.5" />
                <span
                  className="text-white/50 hover:text-white/70 transition-colors duration-300 text-xs"
                  itemProp="email"
                >
                  info@getexperts.de
                </span>
              </li>
              <li className="flex items-start" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="mr-2 h-3 w-3 text-primary/70 mt-0.5" />
                <span className="text-white/50 text-xs">
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
                <h3 className="text-sm font-medium mb-4 text-white/80">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.terms.map((term, termIndex) => (
                    <Link
                      key={termIndex}
                      href={`/${category.category.toLowerCase()}/${term.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/40 hover:text-primary-300 text-xs bg-white/5 hover:bg-white/10 px-2 py-1 rounded-full transition-all duration-300"
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
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs mb-4 md:mb-0">
            © {currentYear} GetExperts GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/datenschutz" className="text-white/40 text-xs hover:text-white/60 transition-colors">
              Datenschutz
            </Link>
            <Link href="/impressum" className="text-white/40 text-xs hover:text-white/60 transition-colors">
              Impressum
            </Link>
            <Link href="/agb" className="text-white/40 text-xs hover:text-white/60 transition-colors">
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
