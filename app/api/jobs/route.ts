import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/schema';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Parse query parameters for filtering
    const category = searchParams.get('category');
    const location = searchParams.get('location');
    const employmentType = searchParams.get('type');
    const workModel = searchParams.get('workModel');
    const searchTerm = searchParams.get('search');
    const featuredOnly = searchParams.get('featured') === 'true';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    // Build the where clause based on filters
    const where: any = { published: true };
    
    // Add expiration filter (only show non-expired jobs)
    where.OR = [
      { expiresAt: { gt: new Date() } },
      { expiresAt: null }
    ];
    
    // Add category filter if provided
    if (category && category !== 'all') {
      where.category = category;
    }
    
    // Add location filter if provided
    if (location) {
      where.location = location;
    }
    
    // Add employment type filter if provided
    if (employmentType) {
      where.employmentType = employmentType;
    }
    
    // Add work model filter if provided
    if (workModel) {
      where.workModel = workModel;
    }
    
    // Add search term filter if provided
    if (searchTerm) {
      where.OR = [
        { title: { contains: searchTerm, mode: 'insensitive' } },
        { company: { contains: searchTerm, mode: 'insensitive' } },
        { tags: { contains: searchTerm, mode: 'insensitive' } },
        { description: { contains: searchTerm, mode: 'insensitive' } }
      ];
    }
    
    // Add featured filter if requested
    if (featuredOnly) {
      where.featured = true;
    }
    
    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Fetch jobs with pagination
    const jobs = await prisma.job.findMany({
      where,
      orderBy: [
        { featured: 'desc' },
        { urgent: 'desc' },
        { createdAt: 'desc' }
      ],
      skip,
      take: limit,
    });
    
    // Count total jobs for pagination
    const totalJobs = await prisma.job.count({ where });
    
    // Fetch distinct location, employment type, and work model values for filters
    const locations = await prisma.job.findMany({
      where: { published: true },
      select: { location: true },
      distinct: ['location'],
    });
    
    const employmentTypes = await prisma.job.findMany({
      where: { published: true },
      select: { employmentType: true },
      distinct: ['employmentType'],
    });
    
    const workModels = await prisma.job.findMany({
      where: { published: true },
      select: { workModel: true },
      distinct: ['workModel'],
    });
    
    // Calculate total pages
    const totalPages = Math.ceil(totalJobs / limit);
    
    // Return the jobs with pagination metadata and filter options
    return NextResponse.json({
      jobs,
      pagination: {
        page,
        limit,
        totalJobs,
        totalPages,
        hasMore: page < totalPages,
      },
      filters: {
        locations: locations.map(l => l.location),
        employmentTypes: employmentTypes.map(t => t.employmentType),
        workModels: workModels.map(w => w.workModel),
      },
    });
  } catch (error) {
    console.error('Error fetching job listings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch job listings' },
      { status: 500 }
    );
  }
} 