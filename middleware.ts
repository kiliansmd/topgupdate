import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Continue with the request
  return NextResponse.next();
}

// Run the middleware on specific paths only
export const config = {
  matcher: ['/api/:path*'],
}; 