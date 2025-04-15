import { NextRequest, NextResponse } from 'next/server';
import { generateMultipleJobs } from '@/lib/job-generator';

/**
 * This endpoint allows admin users to manually generate job listings for testing
 * It should be secured in a production environment
 */
export async function GET(request: NextRequest) {
  try {
    // Get count from query params or default to 1
    const count = parseInt(request.nextUrl.searchParams.get('count') || '1');
    const limitedCount = Math.min(count, 10); // Limit to 10 jobs max
    
    // Generate specified number of jobs
    const successCount = await generateMultipleJobs(limitedCount);
    
    return NextResponse.json({ 
      success: true, 
      message: `Generated ${successCount} new job listings`, 
      count: successCount,
      requested: limitedCount
    });
  } catch (error) {
    console.error('Failed to generate job listings:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate job listings' },
      { status: 500 }
    );
  }
} 