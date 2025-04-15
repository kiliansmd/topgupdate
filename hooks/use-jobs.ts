import { useState, useEffect } from 'react';
import { fetchJobs, fetchJobBySlug, Job, JobListResponse, JobFilters } from '@/lib/fetch-jobs';

export function useJobs(initialFilters: JobFilters = {}) {
  const [data, setData] = useState<JobListResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [filters, setFilters] = useState<JobFilters>(initialFilters);

  useEffect(() => {
    async function loadJobs() {
      setIsLoading(true);
      try {
        const jobData = await fetchJobs(filters);
        setData(jobData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch jobs'));
      } finally {
        setIsLoading(false);
      }
    }

    loadJobs();
  }, [filters]);

  // Update filters function
  const updateFilters = (newFilters: Partial<JobFilters>) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters, page: 1 })); // Reset to page 1 when filters change
  };

  // Load more function for pagination
  const loadMore = () => {
    if (data?.pagination.hasMore) {
      setFilters(prevFilters => ({
        ...prevFilters,
        page: (prevFilters.page || 1) + 1,
      }));
    }
  };

  // Reset filters function
  const resetFilters = () => {
    setFilters({});
  };

  return {
    jobs: data?.jobs || [],
    pagination: data?.pagination,
    filterOptions: data?.filters,
    isLoading,
    error,
    filters,
    updateFilters,
    loadMore,
    resetFilters,
  };
}

export function useJob(slug: string) {
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadJob() {
      if (!slug) return;
      
      setIsLoading(true);
      try {
        const jobData = await fetchJobBySlug(slug);
        setJob(jobData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch job'));
      } finally {
        setIsLoading(false);
      }
    }

    loadJob();
  }, [slug]);

  return { job, isLoading, error };
} 