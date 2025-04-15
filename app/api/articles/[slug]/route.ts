import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/schema';

interface RouteParams {
  params: {
    slug: string;
  };
}

// GET handler to fetch a single article by slug
export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { slug } = params;
    
    const article = await prisma.article.findUnique({
      where: { 
        slug,
        published: true
      }
    });
    
    if (!article) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ article }, { status: 200 });
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json(
      { error: 'Failed to fetch article' },
      { status: 500 }
    );
  }
} 