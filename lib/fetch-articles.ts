/**
 * Helper functions to fetch articles from the API and format them for use in the blog page
 */

// Interface for the article data structure used in the blog page
export interface BlogArticle {
  id: string | number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
  featured: boolean;
  readTime: string;
}

// Interface for raw article data from the API
interface RawArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string | null;
  author: string;
  authorRole: string | null;
  authorImage: string | null;
  category: string;
  tags: string;
  readTime: string | null;
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Fetch articles from the API
 */
export async function fetchArticles(): Promise<BlogArticle[]> {
  try {
    const response = await fetch('/api/articles');
    
    if (!response.ok) {
      console.error('Failed to fetch articles:', response.statusText);
      return [];
    }
    
    const data = await response.json();
    
    if (!data.articles || !Array.isArray(data.articles)) {
      console.error('Invalid article data format');
      return [];
    }
    
    return data.articles.map(formatArticle);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

/**
 * Format a raw article from the API into the format expected by the blog page
 */
export function formatArticle(article: RawArticle): BlogArticle {
  return {
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
  };
} 