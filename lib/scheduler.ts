// Einfacher Timer-basierter Scheduler für Edge und Node.js Umgebungen
let articleTimer: NodeJS.Timeout | null = null;
let jobTimer: NodeJS.Timeout | null = null;

// Hilfsfunktion zur Berechnung des Zeitpunkts der nächsten geplanten Ausführung
function getNextScheduleTime(cronExpression: string): Date {
  // Vereinfachte Implementierung für die häufigsten Cron-Muster
  const now = new Date();
  let nextTime = new Date(now);
  
  if (cronExpression === '0 10 * * 1,4') {
    // Montag und Donnerstag um 10:00 Uhr
    const currentDay = now.getDay(); // 0 = Sonntag, 1 = Montag, ..., 6 = Samstag
    let daysToAdd = 0;
    
    if (currentDay === 1) { // Montag
      if (now.getHours() >= 10) {
        daysToAdd = 3; // Nächster Donnerstag
      }
    } else if (currentDay === 4) { // Donnerstag
      if (now.getHours() >= 10) {
        daysToAdd = 4; // Nächster Montag
      }
    } else if (currentDay < 1) {
      daysToAdd = 1; // Nächster Montag
    } else if (currentDay < 4) {
      daysToAdd = 4 - currentDay; // Nächster Donnerstag
    } else {
      daysToAdd = 8 - currentDay; // Nächster Montag
    }
    
    nextTime.setDate(now.getDate() + daysToAdd);
    nextTime.setHours(10, 0, 0, 0);
  } else if (cronExpression === '0 7 * * *') {
    // Täglich um 7:00 Uhr
    if (now.getHours() >= 7) {
      nextTime.setDate(now.getDate() + 1);
    }
    nextTime.setHours(7, 0, 0, 0);
  } else {
    // Fallback: Einfach in einer Stunde ausführen
    nextTime.setHours(now.getHours() + 1);
    nextTime.setMinutes(0, 0, 0);
  }
  
  return nextTime;
}

// Hilfsfunktion zur Berechnung des Millisekunden-Abstands bis zur nächsten Ausführung
function getMillisecondsUntilNext(nextTime: Date): number {
  return Math.max(1000, nextTime.getTime() - new Date().getTime());
}

/**
 * Start the article generation scheduler
 * Default schedule is every Monday and Thursday at 10:00 AM (twice a week)
 * This frequency is good for SEO as it provides regular fresh content without 
 * overwhelming search engines with too many new pages too quickly
 */
export function startArticleScheduler(cronExpression = '0 10 * * 1,4') {
  if (articleTimer) {
    console.log('Article scheduler is already running');
    return;
  }

  try {
    const scheduleNextArticle = async () => {
      console.log('Scheduled article generation started', new Date().toISOString());
      try {
        // Dynamischer Import für bessere Kompatibilität mit Edge Runtime
        const articleGenerator = await import('./article-generator');
        const success = await articleGenerator.generateAndSaveArticle();
        console.log('Scheduled article generation', success ? 'succeeded' : 'skipped or failed', new Date().toISOString());
      } catch (error) {
        console.error('Error in scheduled article generation:', error);
      }
      
      // Schedule next run
      const nextTime = getNextScheduleTime(cronExpression);
      const msUntilNext = getMillisecondsUntilNext(nextTime);
      console.log(`Next article generation scheduled for ${nextTime.toISOString()} (in ${Math.round(msUntilNext / 1000 / 60)} minutes)`);
      
      articleTimer = setTimeout(scheduleNextArticle, msUntilNext);
    };
    
    // Initial schedule
    const nextTime = getNextScheduleTime(cronExpression);
    const msUntilNext = getMillisecondsUntilNext(nextTime);
    console.log(`First article generation scheduled for ${nextTime.toISOString()} (in ${Math.round(msUntilNext / 1000 / 60)} minutes)`);
    
    articleTimer = setTimeout(scheduleNextArticle, msUntilNext);
    console.log('Article scheduler started with pattern:', cronExpression);
  } catch (error) {
    console.error('Failed to start article scheduler:', error);
  }
}

/**
 * Start the job listing generation scheduler
 * Default schedule is every day at 7:00 AM
 * This creates 2-4 new job postings daily for maximum SEO exposure
 */
export function startJobScheduler(cronExpression = '0 7 * * *') {
  if (jobTimer) {
    console.log('Job scheduler is already running');
    return;
  }

  try {
    const scheduleNextJob = async () => {
      console.log('Scheduled job generation started', new Date().toISOString());
      try {
        // Dynamischer Import für bessere Kompatibilität mit Edge Runtime
        const jobGenerator = await import('./job-generator');
        // Generate 2-4 jobs daily
        const jobCount = Math.floor(Math.random() * 3) + 2; 
        const successCount = await jobGenerator.generateMultipleJobs(jobCount);
        console.log(`Scheduled job generation created ${successCount}/${jobCount} jobs`, new Date().toISOString());
      } catch (error) {
        console.error('Error in scheduled job generation:', error);
      }
      
      // Schedule next run
      const nextTime = getNextScheduleTime(cronExpression);
      const msUntilNext = getMillisecondsUntilNext(nextTime);
      console.log(`Next job generation scheduled for ${nextTime.toISOString()} (in ${Math.round(msUntilNext / 1000 / 60)} minutes)`);
      
      jobTimer = setTimeout(scheduleNextJob, msUntilNext);
    };
    
    // Initial schedule
    const nextTime = getNextScheduleTime(cronExpression);
    const msUntilNext = getMillisecondsUntilNext(nextTime);
    console.log(`First job generation scheduled for ${nextTime.toISOString()} (in ${Math.round(msUntilNext / 1000 / 60)} minutes)`);
    
    jobTimer = setTimeout(scheduleNextJob, msUntilNext);
    console.log('Job scheduler started with pattern:', cronExpression);
  } catch (error) {
    console.error('Failed to start job scheduler:', error);
  }
}

/**
 * Stop the article generation scheduler
 */
export function stopArticleScheduler() {
  if (articleTimer) {
    clearTimeout(articleTimer);
    articleTimer = null;
    console.log('Article scheduler stopped');
  } else {
    console.log('No article scheduler running');
  }
}

/**
 * Stop the job generation scheduler
 */
export function stopJobScheduler() {
  if (jobTimer) {
    clearTimeout(jobTimer);
    jobTimer = null;
    console.log('Job scheduler stopped');
  } else {
    console.log('No job scheduler running');
  }
}

/**
 * Get the status of all schedulers
 */
export function getSchedulerStatus() {
  return {
    articleScheduler: {
      isRunning: !!articleTimer,
    },
    jobScheduler: {
      isRunning: !!jobTimer,
    },
    environment: typeof window === 'undefined' ? (process.env.NEXT_RUNTIME === 'edge' ? 'edge' : 'server') : 'client',
  };
} 