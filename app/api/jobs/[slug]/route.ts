import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/schema';

interface RouteParams {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const slug = params.slug;
    
    // Fetch the job by slug
    const job = await prisma.job.findUnique({
      where: { slug },
    });
    
    // If job not found or not published, return 404
    if (!job || !job.published) {
      return NextResponse.json(
        { error: 'Job not found' },
        { status: 404 }
      );
    }
    
    // Increment view counter
    await prisma.job.update({
      where: { id: job.id },
      data: { views: { increment: 1 } },
    });
    
    // Return the job data
    return NextResponse.json(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    return NextResponse.json(
      { error: 'Failed to fetch job' },
      { status: 500 }
    );
  }
} 