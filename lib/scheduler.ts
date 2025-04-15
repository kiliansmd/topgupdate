// Check if cron is available (not in edge runtime)
let cron: any;
try {
  cron = require('node-cron');
} catch (error) {
  console.warn('node-cron not available (likely in Edge Runtime)');
}

let scheduledTask: any = null;

/**
 * Start the article generation scheduler
 * Default schedule is every Monday and Thursday at 10:00 AM (twice a week)
 * This frequency is good for SEO as it provides regular fresh content without 
 * overwhelming search engines with too many new pages too quickly
 */
export function startArticleScheduler(cronExpression = '0 10 * * 1,4') {
  if (scheduledTask) {
    console.log('Article scheduler is already running');
    return;
  }

  // Skip if cron is not available (Edge Runtime)
  if (!cron) {
    console.log('Scheduler not started: node-cron not available in this environment');
    return;
  }

  try {
    scheduledTask = cron.schedule(cronExpression, async () => {
      console.log('Scheduled article generation started', new Date().toISOString());
      try {
        const { generateAndSaveArticle } = require('./article-generator');
        const success = await generateAndSaveArticle();
        console.log('Scheduled article generation', success ? 'succeeded' : 'skipped or failed', new Date().toISOString());
      } catch (error) {
        console.error('Error in scheduled article generation:', error);
      }
    });

    console.log('Article scheduler started with cron expression:', cronExpression);
  } catch (error) {
    console.error('Failed to start article scheduler:', error);
  }
}

/**
 * Stop the article generation scheduler
 */
export function stopArticleScheduler() {
  if (scheduledTask) {
    scheduledTask.stop();
    scheduledTask = null;
    console.log('Article scheduler stopped');
  } else {
    console.log('No article scheduler running');
  }
}

/**
 * Get the status of the article scheduler
 */
export function getSchedulerStatus() {
  return {
    isRunning: !!scheduledTask,
    environment: cron ? 'server' : 'edge',
  };
} 