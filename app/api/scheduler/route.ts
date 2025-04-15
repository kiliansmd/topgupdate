import { NextResponse } from 'next/server';
import { startArticleScheduler, stopArticleScheduler, getSchedulerStatus } from '@/lib/scheduler';

// API Key for basic auth (should be in environment variables in production)
const API_KEY = process.env.GENERATE_API_KEY || 'defaultapikey';

// Helper function to check authorization
function isAuthorized(request: Request): boolean {
  const authHeader = request.headers.get('authorization');
  const key = authHeader?.split(' ')[1];
  return key === API_KEY;
}

// GET handler to check scheduler status
export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  const status = getSchedulerStatus();
  return NextResponse.json(status, { status: 200 });
}

// POST handler to start scheduler
export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  const data = await request.json().catch(() => ({}));
  const { cronExpression } = data;
  
  startArticleScheduler(cronExpression);
  
  return NextResponse.json(
    { message: 'Scheduler started' },
    { status: 200 }
  );
}

// DELETE handler to stop scheduler
export async function DELETE(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  stopArticleScheduler();
  
  return NextResponse.json(
    { message: 'Scheduler stopped' },
    { status: 200 }
  );
} 