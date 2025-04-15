import { NextRequest, NextResponse } from 'next/server';
import { generateSampleJobs } from '@/lib/job-generator';
import { generateAndSaveArticle } from '@/lib/article-generator';
import { prisma } from '@/lib/db/schema';

/**
 * API-Route zum Initialisieren von Beispieldaten
 */
export async function GET(_request: NextRequest) {
  try {
    // Generiere Beispiel-Jobs, wenn noch keine vorhanden sind
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
      message: `Es wurden ${jobCount} Jobs und ${articleCount + articlesGenerated} Artikel in der Datenbank gefunden oder erstellt.`,
      jobCount,
      articleCount: articleCount + articlesGenerated
    });
  } catch (error) {
    console.error("Fehler beim Setup-Prozess:", error);
    return NextResponse.json(
      { success: false, error: "Fehler beim Setup-Prozess" },
      { status: 500 }
    );
  }
} 