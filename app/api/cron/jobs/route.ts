import { NextResponse } from 'next/server';
import { generateMultipleJobs } from '@/lib/job-generator';

/**
 * This endpoint is called by the Vercel cron job daily to generate new job listings
 */
export async function GET() {
  try {
    // Generate 2-4 new job listings
    const jobCount = Math.floor(Math.random() * 3) + 2;
    const successCount = await generateMultipleJobs(jobCount);
    
    return NextResponse.json({ 
      success: true, 
      message: `Generated ${successCount} new job listings`, 
      count: successCount,
      requested: jobCount
    });
  } catch (error) {
    console.error('Failed to generate job listings:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate job listings' },
      { status: 500 }
    );
  }
} 