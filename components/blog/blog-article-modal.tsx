"use client"

import { useState } from "react"
import { DetailModal, BlogArticleActions } from "@/components/ui/detail-modal"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, Tag } from "lucide-react"

export interface BlogArticle {
  id: number | string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  authorRole: string
  authorImage: string
  category: string
  tags: string[]
  image: string
  slug: string
  readTime: string
  featured?: boolean
}

export interface BlogArticleModalProps {
  isOpen: boolean
  onClose: () => void
  article: BlogArticle | null
}

export function BlogArticleModal({ isOpen, onClose, article }: BlogArticleModalProps) {
  const [isSaved, setIsSaved] = useState(false)

  if (!article) return null

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: article.title,
          text: article.excerpt,
          url: `/blog/${article.slug}`,
        })
        .catch(console.error)
    } else {
      // Fallback
      navigator.clipboard.writeText(window.location.origin + `/blog/${article.slug}`)
      alert("Link in die Zwischenablage kopiert!")
    }
  }

  const handleSave = () => {
    setIsSaved(!isSaved)
    // Hier könnte die Logik zum Speichern des Artikels implementiert werden
  }

  // Formatierter Inhalt mit Absätzen
  const formattedContent = article.content.split("\n\n").map((paragraph, index) => (
    <p key={index} className="mb-4 text-white/80 leading-relaxed">
      {paragraph}
    </p>
  ))

  return (
    <DetailModal
      isOpen={isOpen}
      onClose={onClose}
      headerImage={article.image}
      title={article.title}
      subtitle={article.category}
      actions={<BlogArticleActions onShare={handleShare} onSave={handleSave} />}
    >
      <div className="space-y-6">
        {/* Author info */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={article.authorImage || "/placeholder.svg"} alt={article.author} />
              <AvatarFallback>
                {article.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{article.author}</p>
              <p className="text-sm text-white/60">{article.authorRole}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-white/60">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article excerpt */}
        <p className="text-lg font-medium italic text-white/80">{article.excerpt}</p>

        {/* Article content */}
        <div className="prose prose-invert max-w-none">{formattedContent}</div>

        {/* Tags */}
        <div className="border-t border-white/10 pt-4">
          <div className="flex items-center">
            <Tag className="mr-2 h-4 w-4 text-white/60" />
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-white/5">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DetailModal>
  )
}
