import { NextRequest, NextResponse } from 'next/server';
import { generateSampleJobs } from '@/lib/job-generator';
import { generateAndSaveArticle } from '@/lib/article-generator';
import { prisma } from '@/lib/db/schema';

export async function GET(request: NextRequest) {
  try {
    // Generiere Sample-Jobs, falls noch keine vorhanden sind
    const jobCount = await generateSampleJobs();
    
    // Prüfe, ob Artikel vorhanden sind
    const articleCount = await prisma.article.count();
    
    // Generiere einen Artikel, falls noch keiner vorhanden ist
    let articlesGenerated = 0;
    if (articleCount === 0) {
      const success = await generateAndSaveArticle();
      if (success) {
        articlesGenerated = 1;
      }
    }
    
    return NextResponse.json({ 
      success: true,
      message: `Setup erfolgreich abgeschlossen. ${jobCount} Jobs und ${articleCount + articlesGenerated} Artikel sind in der Datenbank verfügbar.`,
      jobCount,
      articleCount: articleCount + articlesGenerated
    });
  } catch (error) {
    console.error('Fehler bei der Setup-Routine:', error);
    return NextResponse.json(
      { success: false, message: 'Setup fehlgeschlagen', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 