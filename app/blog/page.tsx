"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Clock,
  User,
  Tag,
  ArrowRight,
  ChevronDown,
  Filter,
  X,
  BookOpen,
  Mail,
  ArrowUpRight,
} from "lucide-react"
import { BlogArticleModal, BlogArticle } from "@/components/blog/blog-article-modal"
import { useModal } from "@/hooks/use-modal"
import staticBlogPosts from './data'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedAuthor, setSelectedAuthor] = useState("Alle Autoren")
  const [showFilters, setShowFilters] = useState(false)
  const [appliedFilters, setAppliedFilters] = useState({ tags: [] as string[] })
  const [visiblePosts, setVisiblePosts] = useState(6)
  const [blogPosts, setBlogPosts] = useState(staticBlogPosts)
  const [isLoading, setIsLoading] = useState(true)
  const [modalData, setModalData] = useState<BlogArticle | null>(null)
  
  const { isOpen, openModal, closeModal } = useModal()

  // Fetch articles from API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Setze isLoading auf true während des Ladens
        setIsLoading(true);
        
        // Verwende einen Timeout für den Fetch-Request
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timeout')), 5000)
        );
        
        const fetchPromise = fetch('/api/articles');
        
        // Race zwischen Fetch und Timeout
        const response = await Promise.race([fetchPromise, timeoutPromise]) as Response;
        
        if (response.ok) {
          const data = await response.json();
          
          if (data.articles && Array.isArray(data.articles)) {
            // Transform database articles to match our blog post format
            const transformedArticles = data.articles.map((article: any) => ({
              id: article.id,
              title: article.title,
              excerpt: article.excerpt,
              content: article.content,
              date: new Date(article.createdAt).toLocaleDateString('de-DE', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              }),
              author: article.author,
              authorRole: article.authorRole || '',
              authorImage: article.authorImage || '/placeholder.svg?height=80&width=80&text=JS',
              category: article.category,
              tags: article.tags.split(','),
              image: article.imageUrl || '/placeholder.svg?height=400&width=600&text=Blog',
              slug: article.slug,
              featured: article.featured,
              readTime: article.readTime || '5 min',
            }));
            
            // Combine static and dynamic articles, with dynamic ones first
            setBlogPosts([...transformedArticles, ...staticBlogPosts]);
          }
        } else {
          console.log('Fallback: Verwende nur statische Blogposts, API-Status:', response.status);
          // Fallback: Nur statische Artikel anzeigen
          setBlogPosts(staticBlogPosts);
        }
      } catch (error) {
        console.error('Error fetching articles, falling back to static content:', error);
        // Fallback: Nur statische Artikel anzeigen
        setBlogPosts(staticBlogPosts);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchArticles();
  }, []);

  // Filter posts by search term, category, and applied filters
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearchTerm =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory

    const matchesTags =
      appliedFilters.tags.length === 0 ||
      post.tags.some((tag) => appliedFilters.tags.includes(tag))

    const matchesAuthor = selectedAuthor === "Alle Autoren" || post.author === selectedAuthor

    return matchesSearchTerm && matchesCategory && matchesTags && matchesAuthor
  })

  // Get featured posts
  const featuredPosts = filteredPosts.filter((post) => post.featured)

  // Get list of all categories from the blog posts
  const categories = ["all", ...Array.from(new Set(blogPosts.map((post) => post.category)))]

  // Get list of all tags from the blog posts
  const allTags = [...Array.from(new Set(blogPosts.flatMap((post) => post.tags)))]

  // Available authors for filter
  const authorsList = ["Alle Autoren", ...Array.from(new Set(blogPosts.map((post) => post.author)))]

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 3)
  }

  const resetFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedAuthor("Alle Autoren")
    setAppliedFilters({ tags: [] })
  }

  // Farbzuordnung für Kategorien
  const categoryColors: {[key: string]: string} = {
    "Trends": "from-blue-500 to-indigo-600",
    "HR-Strategien": "from-indigo-500 to-violet-600",
    "HR-Tech": "from-violet-500 to-purple-600",
    "Remote Work": "from-purple-500 to-pink-600",
    "Employer Branding": "from-emerald-500 to-green-600",
    "Diversity": "from-amber-500 to-orange-600",
    "Daten & Analysen": "from-orange-500 to-red-600",
    "Onboarding": "from-blue-500 to-cyan-600",
    "Candidate Experience": "from-green-500 to-emerald-600",
    "Tech-Recruiting": "from-rose-500 to-pink-600",
    "Nachhaltigkeit": "from-teal-500 to-green-600",
    "Internationales Recruiting": "from-blue-500 to-indigo-600"
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-36 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
          <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-indigo-900/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block glass-button px-6 py-2 text-sm font-medium mb-8">Blog & Insights</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Recruiting <span className="gradient-text">Expertise</span> & Trends
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Entdecken Sie aktuelle Einblicke, Trends und Expertenwissen rund um das Thema Recruiting und
              Personalgewinnung.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-black relative">
        <div className="container mx-auto px-4 md:px-6">
          {/* Search and Filter Bar */}
          <div className="mb-12">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/40" />
              </div>
              <Input
                type="text"
                placeholder="Suche nach Artikeln, Themen oder Autoren..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 bg-[#0f0f1a]/80 backdrop-blur-sm border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-white"
              />
              <Button
                variant="ghost"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white hover:bg-transparent"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-5 w-5 mr-2" />
                Filter
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </Button>
            </div>

            {/* Erweiterte Filter */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8 overflow-hidden"
                >
                  <div className="glass-card p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium">Erweiterte Filter</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={resetFilters}
                        className="text-white/60 hover:text-white"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Zurücksetzen
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Autor-Filter */}
                      <div>
                        <h4 className="text-sm font-medium mb-3 flex items-center">
                          <User className="h-4 w-4 mr-1 text-primary" />
                          Autor
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {authorsList.map((author) => (
                            <Badge
                              key={author}
                              variant={selectedAuthor === author ? "default" : "outline"}
                              className={`cursor-pointer ${
                                selectedAuthor === author ? "bg-primary hover:bg-primary/80" : "hover:bg-primary/10"
                              }`}
                              onClick={() => setSelectedAuthor(author)}
                            >
                              {author}
                              {selectedAuthor === author && <X className="ml-1 h-3 w-3" />}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Weitere Filter könnten hier hinzugefügt werden */}
                      <div>
                        <h4 className="text-sm font-medium mb-3 flex items-center">
                          <Tag className="h-4 w-4 mr-1 text-primary" />
                          Beliebte Tags
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "KI",
                            "Remote Work",
                            "Diversity",
                            "Employer Branding",
                            "Nachhaltigkeit",
                            "Tech-Recruiting",
                          ].map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="cursor-pointer hover:bg-primary/10"
                              onClick={() => setSearchTerm(tag)}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Kategorie-Tabs */}
            <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="bg-[#0f0f1a]/80 border border-white/10 p-1 overflow-x-auto flex-wrap w-full">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="px-4 py-2">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Featured Articles Section */}
          {selectedCategory === "Alle" && selectedAuthor === "Alle Autoren" && !searchTerm && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Featured Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-[#0f0f1a]/80 backdrop-blur-2xl rounded-xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-xl"
                  >
                    <div className="relative h-80">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <Badge
                          className={`mb-3 self-start bg-gradient-to-r ${categoryColors[post.category] || "from-indigo-500 to-violet-600"} text-white border-none`}
                        >
                          {post.category}
                        </Badge>
                        <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                            {post.title}
                          </h3>
                        </Link>
                      </div>
                    </div>

                    <div className="p-6">
                      <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-white/70 text-sm mb-4">{post.excerpt}</p>

                      <div className="flex justify-between items-center pt-4 border-t border-white/10">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                            <Image
                              src={post.authorImage || "/placeholder.svg"}
                              alt={post.author}
                              width={32}
                              height={32}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{post.author}</p>
                            <p className="text-xs text-white/50">{post.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-white/50 text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* All Articles Section */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold flex items-center">
                {searchTerm || selectedCategory !== "Alle" || selectedAuthor !== "Alle Autoren" ? (
                  <>
                    <Search className="h-5 w-5 mr-2 text-primary" />
                    Suchergebnisse
                  </>
                ) : (
                  <>
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Alle Artikel
                  </>
                )}
              </h2>
              <p className="text-white/60 text-sm">
                {filteredPosts.length} {filteredPosts.length === 1 ? "Artikel" : "Artikel"} gefunden
              </p>
            </div>

            {filteredPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {filteredPosts.slice(0, visiblePosts).map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-card group hover:border-primary/30 transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative">
                        <div className="absolute top-4 left-4 z-10">
                          <Badge
                            className={`bg-gradient-to-r ${categoryColors[post.category] || "from-indigo-500 to-violet-600"} text-white border-none`}
                          >
                            {post.category}
                          </Badge>
                        </div>
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        </div>
                      </div>

                      <div className="p-6">
                        <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-white/70 text-sm mb-4">{post.excerpt}</p>

                        <div className="flex justify-between items-center pt-4 border-t border-white/10">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                              <Image
                                src={post.authorImage || "/placeholder.svg"}
                                alt={post.author}
                                width={32}
                                height={32}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{post.author}</p>
                              <p className="text-xs text-white/50">{post.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center text-white/50 text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Load More Button */}
                {visiblePosts < filteredPosts.length && (
                  <div className="text-center mb-16">
                    <Button onClick={loadMorePosts} variant="outline" className="border-white/20 hover:bg-white/5">
                      Mehr Artikel laden
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="glass-card p-8 text-center">
                <p className="text-white/70 mb-4">Keine Artikel gefunden, die deinen Filterkriterien entsprechen.</p>
                <Button variant="outline" onClick={resetFilters}>
                  Filter zurücksetzen
                </Button>
              </div>
            )}
          </div>

          {/* Newsletter Section */}
          <div className="mt-16">
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-600/10 rounded-full filter blur-3xl"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Bleiben Sie auf dem Laufenden</h3>
                  <p className="text-white/70 mb-6">
                    Abonnieren Sie unseren Newsletter und erhalten Sie regelmäßig die neuesten Insights, Trends und
                    Expertentipps zum Thema Recruiting direkt in Ihr Postfach.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input type="email" placeholder="Ihre E-Mail-Adresse" className="bg-black/30 border-white/10" />
                    <Button className="bg-primary hover:bg-primary/90">
                      Abonnieren
                      <Mail className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-white/50 text-xs mt-3">
                    Wir respektieren Ihre Privatsphäre. Sie können sich jederzeit abmelden.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center">
                    <Mail className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Tags Section */}
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Tag className="h-5 w-5 mr-2 text-primary" />
              Beliebte Themen
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "KI",
                "Automatisierung",
                "Remote Work",
                "Diversity",
                "Employer Branding",
                "Onboarding",
                "Candidate Experience",
                "Tech-Recruiting",
                "Nachhaltigkeit",
                "Internationales Recruiting",
                "Soft Skills",
                "Generationen",
                "HR-Tech",
                "Datenanalyse",
                "Recruiting-Strategie",
              ].map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-primary/10 transition-colors"
                  onClick={() => {
                    setSearchTerm(tag)
                    setSelectedCategory("Alle")
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Resources */}
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <ArrowUpRight className="h-5 w-5 mr-2 text-primary" />
              Verwandte Ressourcen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Recruiting-Leitfaden 2025",
                  description: "Unser umfassender Leitfaden für modernes und effektives Recruiting",
                  link: "/ressourcen/recruiting-leitfaden-2025",
                },
                {
                  title: "Webinar: KI im Recruiting",
                  description: "Aufzeichnung unseres Experten-Webinars zu KI-gestützten Recruiting-Prozessen",
                  link: "/ressourcen/webinar-ki-recruiting",
                },
                {
                  title: "Checkliste: Optimale Candidate Experience",
                  description: "Kostenlose Checkliste für eine verbesserte Candidate Experience",
                  link: "/ressourcen/checkliste-candidate-experience",
                },
              ].map((resource, index) => (
                <div key={index} className="glass-card p-6 hover:border-primary/30 transition-all duration-300">
                  <h4 className="font-bold mb-2">{resource.title}</h4>
                  <p className="text-white/70 text-sm mb-4">{resource.description}</p>
                  <Link
                    href={resource.link}
                    className="text-primary flex items-center text-sm hover:text-primary/80 transition-colors"
                  >
                    Mehr erfahren
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Article Modal */}
      {isOpen && modalData && (
        <BlogArticleModal 
          article={modalData} 
          isOpen={isOpen} 
          onClose={closeModal} 
        />
      )}
    </div>
  )
}
