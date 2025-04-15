import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/schema';

// GET handler to fetch all published articles
export async function GET(request: Request) {
  try {
    // Check if prisma is available
    if (!prisma) {
      console.error('Prisma client not available');
      return NextResponse.json(
        { error: 'Database connection unavailable' },
        { status: 503 }
      );
    }

    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const featured = searchParams.get('featured') === 'true';
    const limit = Number(searchParams.get('limit') || '50');
    
    // Build filter conditions
    const where = {
      published: true,
      ...(category && { category }),
      ...(tag && { tags: { contains: tag } }),
      ...(searchParams.has('featured') && { featured }),
    };
    
    try {
      // Fetch articles with filters
      const articles = await prisma.article.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: limit,
      });
      
      // Return a single response
      return NextResponse.json({ articles }, { status: 200 });
    } catch (dbError) {
      console.error('Database error fetching articles:', dbError);
      return NextResponse.json(
        { error: 'Database error', details: dbError instanceof Error ? dbError.message : 'Unknown error' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in articles API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 