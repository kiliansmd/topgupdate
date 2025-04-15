import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/schema';

// GET handler to fetch all published articles
export async function GET(request: Request) {
  try {
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
    
    // Fetch articles with filters
    const articles = await prisma.article.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
    
    return NextResponse.json({ articles }, { status: 200 });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
} 