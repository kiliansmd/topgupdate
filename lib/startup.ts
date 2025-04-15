import { startArticleScheduler } from './scheduler';

/**
 * Initialize background services like the article scheduler
 * This should be called when the application starts
 */
export function initializeBackgroundServices() {
  console.log('Initializing background services...');
  
  // Only start the scheduler in production to avoid generating articles during development
  if (process.env.NODE_ENV === 'production') {
    startArticleScheduler();
    console.log('Article scheduler initialized in production mode');
  } else {
    console.log('Article scheduler not started in development mode');
  }
  
  console.log('Background services initialized');
} 