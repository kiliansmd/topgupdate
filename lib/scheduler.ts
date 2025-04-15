// Einfacher Timer-basierter Scheduler für Edge und Node.js Umgebungen
type SchedulerTimer = NodeJS.Timeout | null;
type CronExpression = '0 10 * * 1,4' | '0 7 * * *' | string;

interface SchedulerStatus {
  isRunning: boolean;
}

let articleTimer: SchedulerTimer = null;
let jobTimer: SchedulerTimer = null;

// Hilfsfunktion zur Berechnung des Zeitpunkts der nächsten geplanten Ausführung
function getNextScheduleTime(cronExpression: CronExpression): Date {
  // Vereinfachte Implementierung für die häufigsten Cron-Muster
  const now = new Date();
  const nextTime = new Date(now);
  
  if (cronExpression === '0 10 * * 1,4') {
    // Montag und Donnerstag um 10:00 Uhr
    const currentDay = now.getDay(); // 0 = Sonntag, 1 = Montag, ..., 6 = Samstag
    let daysToAdd = 0;
    
    if (currentDay === 1) { // Montag
      daysToAdd = now.getHours() >= 10 ? 3 : 0; // Nächster Donnerstag oder heute
    } else if (currentDay === 4) { // Donnerstag
      daysToAdd = now.getHours() >= 10 ? 4 : 0; // Nächster Montag oder heute
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

// Generische Funktion für das Erstellen und Verwalten von Schedulern
function createScheduler(
  schedulerName: string,
  timerRef: { current: SchedulerTimer },
  taskFunction: () => Promise<void>,
  cronExpression: CronExpression
): void {
  if (timerRef.current) {
    console.log(`${schedulerName} scheduler is already running`);
    return;
  }

  try {
    const scheduleNextTask = async () => {
      console.log(`Scheduled ${schedulerName} generation started`, new Date().toISOString());
      try {
        await taskFunction();
      } catch (error) {
        console.error(`Error in scheduled ${schedulerName} generation:`, error);
      }
      
      // Schedule next run
      const nextTime = getNextScheduleTime(cronExpression);
      const msUntilNext = getMillisecondsUntilNext(nextTime);
      console.log(`Next ${schedulerName} generation scheduled for ${nextTime.toISOString()} (in ${Math.round(msUntilNext / 1000 / 60)} minutes)`);
      
      timerRef.current = setTimeout(scheduleNextTask, msUntilNext);
    };
    
    // Initial schedule
    const nextTime = getNextScheduleTime(cronExpression);
    const msUntilNext = getMillisecondsUntilNext(nextTime);
    console.log(`First ${schedulerName} generation scheduled for ${nextTime.toISOString()} (in ${Math.round(msUntilNext / 1000 / 60)} minutes)`);
    
    timerRef.current = setTimeout(scheduleNextTask, msUntilNext);
    console.log(`${schedulerName} scheduler started with pattern:`, cronExpression);
  } catch (error) {
    console.error(`Failed to start ${schedulerName} scheduler:`, error);
  }
}

// Generische Funktion zum Stoppen eines Schedulers
function stopScheduler(schedulerName: string, timerRef: { current: SchedulerTimer }): void {
  if (timerRef.current) {
    clearTimeout(timerRef.current);
    timerRef.current = null;
    console.log(`${schedulerName} scheduler stopped`);
  } else {
    console.log(`No ${schedulerName} scheduler running`);
  }
}

/**
 * Start the article generation scheduler
 * Default schedule is every Monday and Thursday at 10:00 AM (twice a week)
 * This frequency is good for SEO as it provides regular fresh content without 
 * overwhelming search engines with too many new pages too quickly
 */
export function startArticleScheduler(cronExpression: CronExpression = '0 10 * * 1,4'): void {
  const timerRef = { current: articleTimer };
  
  createScheduler('article', timerRef, async () => {
    const articleGenerator = await import('./article-generator');
    const success = await articleGenerator.generateAndSaveArticle();
    console.log('Scheduled article generation', success ? 'succeeded' : 'skipped or failed', new Date().toISOString());
  }, cronExpression);
  
  articleTimer = timerRef.current;
}

/**
 * Start the job listing generation scheduler
 * Default schedule is every day at 7:00 AM
 * This creates 2-4 new job postings daily for maximum SEO exposure
 */
export function startJobScheduler(cronExpression: CronExpression = '0 7 * * *'): void {
  const timerRef = { current: jobTimer };
  
  createScheduler('job', timerRef, async () => {
    const jobGenerator = await import('./job-generator');
    // Generate 2-4 jobs daily
    const jobCount = Math.floor(Math.random() * 3) + 2; 
    const successCount = await jobGenerator.generateMultipleJobs(jobCount);
    console.log(`Scheduled job generation created ${successCount}/${jobCount} jobs`, new Date().toISOString());
  }, cronExpression);
  
  jobTimer = timerRef.current;
}

/**
 * Stop the article generation scheduler
 */
export function stopArticleScheduler(): void {
  stopScheduler('article', { current: articleTimer });
  articleTimer = null;
}

/**
 * Stop the job generation scheduler
 */
export function stopJobScheduler(): void {
  stopScheduler('job', { current: jobTimer });
  jobTimer = null;
}

/**
 * Get the status of all schedulers
 */
export function getSchedulerStatus(): {
  articleScheduler: SchedulerStatus;
  jobScheduler: SchedulerStatus;
  environment: 'edge' | 'server' | 'client';
} {
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