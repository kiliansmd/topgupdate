import { useState, useEffect } from 'react';
import { BlogArticle, fetchArticles } from '@/lib/fetch-articles';

interface UseArticlesResult {
  articles: BlogArticle[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook to fetch and manage articles
 * 
 * @param staticArticles Optional array of static articles to include with fetched articles
 * @returns Object containing articles, loading state, error and refetch function
 */
export function useArticles(staticArticles: BlogArticle[] = []): UseArticlesResult {
  const [articles, setArticles] = useState<BlogArticle[]>(staticArticles);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadArticles = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const fetchedArticles = await fetchArticles();
      // Combine fetched articles with static articles, prioritizing dynamic ones
      setArticles([...fetchedArticles, ...staticArticles]);
    } catch (err) {
      console.error('Error in useArticles hook:', err);
      setError('Failed to load articles. Please try again later.');
      // Fall back to static articles if API fails
      setArticles(staticArticles);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch articles on mount
  useEffect(() => {
    loadArticles();
  }, []);

  return {
    articles,
    isLoading,
    error,
    refetch: loadArticles
  };
} 