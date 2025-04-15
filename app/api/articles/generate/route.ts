import { NextResponse } from 'next/server';
import { generateAndSaveArticle } from '@/lib/article-generator';

// API Key for basic auth (should be in environment variables in production)
const API_KEY = process.env.GENERATE_API_KEY || 'defaultapikey';

// POST handler to generate a new article
export async function POST(request: Request) {
  try {
    // Basic auth check
    const authHeader = request.headers.get('authorization');
    const key = authHeader?.split(' ')[1];
    
    if (key !== API_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Generate and save article
    const success = await generateAndSaveArticle();
    
    if (success) {
      return NextResponse.json(
        { message: 'Article generated successfully' },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: 'Article generation skipped or failed' },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error generating article:', error);
    return NextResponse.json(
      { error: 'Failed to generate article' },
      { status: 500 }
    );
  }
} 