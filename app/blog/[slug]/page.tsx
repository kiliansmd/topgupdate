import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Tag, Quote, FileText, AlignJustify, Layout } from "lucide-react"
import { BlogArticle } from '@/components/blog/blog-article-modal'
import staticBlogPosts from '../data'
import SocialShareButtons from './social-share-buttons'

// Helper function to parse German date format
const parseGermanDate = (dateStr: string): string => {
  try {
    // Expected format: "25. März 2024" or similar
    const [day, month, year] = dateStr.split(' ');
    const germanMonths: { [key: string]: number } = {
      'Januar': 0, 'Februar': 1, 'März': 2, 'April': 3, 'Mai': 4, 'Juni': 5,
      'Juli': 6, 'August': 7, 'September': 8, 'Oktober': 9, 'November': 10, 'Dezember': 11
    };
    
    // Remove the dot from the day
    const cleanDay = day.replace('.', '');
    
    // Create a date object and return ISO string
    const dateObj = new Date(parseInt(year), germanMonths[month], parseInt(cleanDay));
    return dateObj.toISOString();
  } catch (error) {
    // Fallback to current date if parsing fails
    console.error('Error parsing date:', dateStr, error);
    return new Date().toISOString();
  }
};

// Generiere dynamische Metadaten für SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Artikel nicht gefunden',
      description: 'Der gesuchte Artikel konnte nicht gefunden werden.',
    }
  }

  // Schlagwörter für SEO
  const keywords = article.tags.join(', ') + ', Recruiting, Personal, Karriere, HR'

  return {
    title: article.title,
    description: article.excerpt,
    keywords: keywords,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: parseGermanDate(article.date),
      authors: [article.author],
      tags: article.tags,
      images: [
        {
          url: article.image.startsWith('http') ? article.image : `${process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'}/blog/${article.slug}`,
    },
  }
}

// Abrufen eines Artikels anhand seines Slugs
async function getArticleBySlug(slug: string): Promise<BlogArticle | null> {
  try {
    // Nur noch in statischen Artikeln suchen
    const staticArticle = staticBlogPosts.find(article => article.slug === slug);
    
    if (staticArticle) {
      return staticArticle;
    }

    return null;
  } catch (error) {
    console.error('Fehler beim Abrufen des Artikels:', error);
    return null;
  }
}

// Generiere statische Pfade für SSG (Static Site Generation)
export async function generateStaticParams() {
  try {
    // Nur noch statische Slugs sammeln
    const staticSlugs = staticBlogPosts.map(post => ({ slug: post.slug }));
    
    return staticSlugs;
  } catch (error) {
    console.error('Fehler beim Generieren statischer Pfade:', error);
    return staticBlogPosts.map(post => ({ slug: post.slug }));
  }
}

// Helper to generate a deterministic but seemingly random number based on a string
const getHashFromString = (str: string, max = 100) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash % max);
};

export default async function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }
  
  // Generate layout variations based on article properties
  const styleVariant = getHashFromString(article.slug, 4); // 0, 1, 2, or 3
  const useDropCap = getHashFromString(article.title, 2) === 1; // 50% chance
  const useCustomQuoteStyle = getHashFromString(article.author, 2) === 1; // 50% chance
  const useSideBySideImages = article.category === "Tech-Recruiting" || article.category === "HR-Tech" || getHashFromString(article.slug + "images", 4) === 1;
  const contentStyleVariant = getHashFromString(article.slug + "content", 3); // 0, 1, or 2
  
  // Content rendering with variations
  const renderContent = () => {
    const content = article.content;
    
    // Check if content is already HTML
    if (content.startsWith('<')) {
      // Style the HTML based on variants
      let styledContent = content;
      
      // Apply different quote styles
      if (useCustomQuoteStyle) {
        styledContent = styledContent.replace(/<blockquote>(.+?)<\/blockquote>/g, 
          '<blockquote class="border-l-4 border-primary pl-4 italic text-gray-300 my-6">$1</blockquote>'
        );
      }
      
      return <div dangerouslySetInnerHTML={{ __html: styledContent }} />;
    } else {
      // For non-HTML content, identify paragraphs that might be quotes (starting with "> ")
      const paragraphs = content.split('\n\n');
      
      return paragraphs.map((paragraph, index) => {
        // Style quotes differently
        if (paragraph.startsWith('> ')) {
          return (
            <blockquote key={index} className={useCustomQuoteStyle 
              ? "relative pl-8 pr-2 py-2 italic text-gray-300 my-6 before:content-['\"'] before:absolute before:left-0 before:top-0 before:text-4xl before:text-primary before:opacity-50 before:font-serif"
              : "border-l-4 border-primary pl-4 italic text-gray-300 my-6"
            }>
              {paragraph.substring(2)}
            </blockquote>
          );
        }
        
        // Style paragraphs with drop caps based on pattern
        if (useDropCap && index > 0 && (index % 3 === 0 || paragraphs[index-1].length < 100)) {
          const firstLetter = paragraph.charAt(0);
          const restOfParagraph = paragraph.substring(1);
          
          return (
            <p key={index} className="mb-6">
              <span className="text-3xl font-bold float-left mr-2 mt-1 text-primary">{firstLetter}</span>
              {restOfParagraph}
            </p>
          );
        }
        
        // Regular paragraph with variant styling
        return (
          <p key={index} className={contentStyleVariant === 0 
            ? "mb-6 leading-relaxed" 
            : contentStyleVariant === 1 
              ? "mb-7 leading-loose" 
              : "mb-5 leading-snug"
          }>
            {paragraph}
          </p>
        );
      });
    }
  };

  // Page layout variants
  const getHeaderStyle = () => {
    switch (styleVariant) {
      case 0: // Standard
        return "min-h-[50vh] w-full";
      case 1: // Full height
        return "min-h-[70vh] w-full";
      case 2: // Compact
        return "min-h-[40vh] w-full";
      case 3: // Wide
        return "min-h-[50vh] w-full";
      default:
        return "min-h-[50vh] w-full";
    }
  };
  
  const getMetaStyle = () => {
    switch (styleVariant) {
      case 0: // Standard layout
        return "flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-8 border-b border-gray-800";
      case 1: // Centered layout
        return "flex flex-col items-center text-center justify-center mb-10 pb-8 border-b border-gray-800";
      case 2: // Minimal layout
        return "flex flex-col md:flex-row items-start md:items-center justify-between mb-6 pb-6 border-b border-gray-800";
      case 3: // Side by side
        return "grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-between mb-8 pb-8 border-b border-gray-800";
      default:
        return "flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-8 border-b border-gray-800";
    }
  };

  return (
    <article className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Strukturierte Daten für SEO (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.title,
            description: article.excerpt,
            image: article.image,
            datePublished: parseGermanDate(article.date),
            author: {
              '@type': 'Person',
              name: article.author,
              jobTitle: article.authorRole
            },
            publisher: {
              '@type': 'Organization',
              name: 'Recruiting Agentur',
              logo: {
                '@type': 'ImageObject',
                url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'}/logo.png`,
              }
            },
            keywords: article.tags.join(', '),
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'}/blog/${article.slug}`
            }
          })
        }}
      />

      {/* Hero-Header mit Bild */}
      <div className={`relative ${getHeaderStyle()}`}>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image 
          src={article.image} 
          alt={article.title} 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
          <div className="container mx-auto max-w-4xl">
            <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Übersicht
            </Link>
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className={`${styleVariant === 1 ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'} font-bold mb-4 text-white`}>
              {article.title}
            </h1>
            {styleVariant === 1 && (
              <p className="text-xl text-gray-300 font-light mt-4 max-w-2xl">
                {article.excerpt}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Artikel-Inhalt */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Meta-Informationen */}
        <div className={getMetaStyle()}>
          {(styleVariant === 0 || styleVariant === 2 || styleVariant === 3) && (
            <div className="flex items-center mb-4 md:mb-0">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src={article.authorImage} alt={article.author} />
                <AvatarFallback>
                  {article.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-lg">{article.author}</div>
                <div className="text-gray-400 text-sm">{article.authorRole}</div>
              </div>
            </div>
          )}
          
          {styleVariant === 1 && (
            <div className="flex flex-col items-center mb-4">
              <Avatar className="h-16 w-16 mb-4">
                <AvatarImage src={article.authorImage} alt={article.author} />
                <AvatarFallback>
                  {article.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="font-semibold text-lg">{article.author}</div>
                <div className="text-gray-400 text-sm">{article.authorRole}</div>
              </div>
            </div>
          )}
          
          <div className={`flex flex-wrap gap-4 text-sm text-gray-400 ${styleVariant === 1 ? 'justify-center' : ''}`}>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Intro/Excerpt - nur anzeigen wenn nicht schon im Header */}
        {styleVariant !== 1 && (
          <div className="mb-10">
            <p className={`text-xl text-gray-300 font-light leading-relaxed ${styleVariant === 3 ? '' : 'italic'}`}>
              {article.excerpt}
            </p>
          </div>
        )}

        {/* Artikelformatierung Indikator (subtil) */}
        <div className="flex items-center justify-end mb-8 opacity-60">
          <div className="flex space-x-2">
            {contentStyleVariant === 0 && <AlignJustify className="h-4 w-4" />}
            {contentStyleVariant === 1 && <FileText className="h-4 w-4" />}
            {contentStyleVariant === 2 && <Layout className="h-4 w-4" />}
            {useDropCap && <Quote className="h-4 w-4" />}
          </div>
        </div>

        {/* Hauptinhalt */}
        <div className={`prose prose-lg prose-invert max-w-none mb-12 ${
          styleVariant === 1 
            ? 'prose-headings:text-center prose-h2:text-3xl' 
            : styleVariant === 3 
              ? 'prose-h2:text-2xl prose-h3:text-xl' 
              : ''
        }`}>
          {renderContent()}
        </div>

        {/* Tags */}
        <div className="mt-10 border-t border-gray-800 pt-6">
          <div className="flex items-center flex-wrap gap-3">
            <Tag className="h-5 w-5 text-gray-400" />
            {article.tags.map((tag) => (
              <Link href={`/blog?tag=${tag}`} key={tag}>
                <Badge variant="outline" className="bg-gray-800/50 hover:bg-gray-700/50 transition">
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        {/* Social Sharing */}
        <div className="mt-10 flex justify-center gap-4">
          <SocialShareButtons title={article.title} excerpt={article.excerpt} />
        </div>

        {/* Ähnliche Artikel Teaser */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Das könnte Sie auch interessieren</h2>
          <div className={`grid grid-cols-1 ${useSideBySideImages ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
            {staticBlogPosts
              .filter((post: BlogArticle) => post.slug !== article.slug && (post.category === article.category || post.tags.some((tag: string) => article.tags.includes(tag))))
              .slice(0, useSideBySideImages ? 3 : 2)
              .map((relatedPost: BlogArticle) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition">
                    <div className="relative h-48">
                      <Image 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2">{relatedPost.category}</Badge>
                      <h3 className="text-lg font-semibold mb-2">{relatedPost.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
} 