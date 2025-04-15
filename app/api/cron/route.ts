import { NextResponse } from 'next/server';
import { initializeBackgroundServices } from '@/lib/startup';

// Initialize services when the API route is first accessed
let servicesInitialized = false;

export async function GET() {
  if (!servicesInitialized) {
    try {
      initializeBackgroundServices();
      servicesInitialized = true;
      return NextResponse.json({ success: true, message: 'Background services initialized' });
    } catch (error) {
      console.error('Failed to initialize background services:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to initialize background services' },
        { status: 500 }
      );
    }
  }
  
  return NextResponse.json({ success: true, message: 'Background services already running' });
} 