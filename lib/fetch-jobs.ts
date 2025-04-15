import { cache } from 'react';

export interface Job {
  id: string;
  title: string;
  slug: string;
  company: string;
  location: string;
  employmentType: string;
  workModel: string;
  salary: string | null;
  description: string;
  responsibilities: string;
  requirements: string;
  benefits: string;
  applicationUrl: string | null;
  contactEmail: string | null;
  logoUrl: string | null;
  industry: string;
  category: string;
  tags: string;
  featured: boolean;
  urgent: boolean;
  published: boolean;
  views: number;
  createdAt: string;
  updatedAt: string;
  expiresAt: string | null;
}

export interface JobListResponse {
  jobs: Job[];
  pagination: {
    page: number;
    limit: number;
    totalJobs: number;
    totalPages: number;
    hasMore: boolean;
  };
  filters: {
    locations: string[];
    employmentTypes: string[];
    workModels: string[];
  };
}

export interface JobFilters {
  category?: string;
  location?: string;
  type?: string;
  workModel?: string;
  search?: string;
  featured?: boolean;
  page?: number;
  limit?: number;
}

/**
 * Fetch jobs with optional filters
 */
export const fetchJobs = cache(async (filters: JobFilters = {}): Promise<JobListResponse> => {
  try {
    // Build query string from filters
    const params = new URLSearchParams();
    
    if (filters.category) params.append('category', filters.category);
    if (filters.location) params.append('location', filters.location);
    if (filters.type) params.append('type', filters.type);
    if (filters.workModel) params.append('workModel', filters.workModel);
    if (filters.search) params.append('search', filters.search);
    if (filters.featured) params.append('featured', 'true');
    if (filters.page) params.append('page', filters.page.toString());
    if (filters.limit) params.append('limit', filters.limit.toString());
    
    // Get API URL (handle both client and server-side)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const isServer = typeof window === 'undefined';
    const apiUrl = isServer 
      ? `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002'}/api/jobs` 
      : '/api/jobs';
    
    // Fetch jobs from API
    const response = await fetch(`${apiUrl}?${params.toString()}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching jobs: ${response.status}`);
    }
    
    const data: JobListResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error in fetchJobs:', error);
    // Return empty response on error
    return {
      jobs: [],
      pagination: {
        page: 1,
        limit: 10,
        totalJobs: 0,
        totalPages: 0,
        hasMore: false,
      },
      filters: {
        locations: [],
        employmentTypes: [],
        workModels: [],
      },
    };
  }
});

/**
 * Fetch a single job by slug
 */
export const fetchJobBySlug = cache(async (slug: string): Promise<Job | null> => {
  try {
    // Get API URL (handle both client and server-side)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const isServer = typeof window === 'undefined';
    const apiUrl = isServer 
      ? `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002'}/api/jobs/${slug}` 
      : `/api/jobs/${slug}`;
    
    // Fetch job from API
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Error fetching job: ${response.status}`);
    }
    
    const job: Job = await response.json();
    return job;
  } catch (error) {
    console.error(`Error in fetchJobBySlug (${slug}):`, error);
    return null;
  }
}); 