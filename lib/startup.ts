import { startArticleScheduler, startJobScheduler } from './scheduler';

/**
 * Initialize background services like the article and job schedulers
 * This should be called when the application starts
 */
export function initializeBackgroundServices() {
  console.log('Initializing background services...');
  
  // Only start the schedulers in production to avoid generating content during development
  if (process.env.NODE_ENV === 'production') {
    // Initialize article scheduler
    startArticleScheduler();
    console.log('Article scheduler initialized in production mode');
    
    // Initialize job scheduler
    startJobScheduler();
    console.log('Job scheduler initialized in production mode');
  } else {
    console.log('Schedulers not started in development mode');
  }
  
  console.log('Background services initialized');
} 