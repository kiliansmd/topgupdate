import OpenAI from 'openai';
import { prisma } from './db/schema';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// List of SEO-relevant recruiting topics
const RECRUITING_TOPICS = [
  'Personalbeschaffung Strategien für Unternehmen',
  'Employer Branding für mittelständische Unternehmen',
  'Digitale Methoden zur Mitarbeitergewinnung',
  'Remote Work und moderne Recruiting-Prozesse',
  'Personalentwicklung in Zeiten des Fachkräftemangels',
  'KI im Recruiting-Prozess',
  'Candidate Experience Optimierung',
  'Diversity und Inclusion bei der Personalgewinnung',
  'Mitarbeiterbindung und Fluktuation vermeiden',
  'Active Sourcing Strategien für spezialisierte Fachkräfte',
  'Onboarding-Prozesse optimieren',
  'Social Media Recruiting Trends',
  'Personalmarketing und Zielgruppenansprache',
  'Assessment Center in modernen Bewerbungsprozessen',
  'Die Bedeutung von Cultural Fit im Recruiting',
  'Nachhaltiges Recruiting und Corporate Social Responsibility',
  'Agile HR Prozesse',
  'Die Zukunft der Personalvermittlung',
  'Recruiting-KPIs und Performance Measurement',
  'Arbeitsrecht und Recruiting'
];

// Function to generate a slug from a title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[äöüß]/g, match => {
      const umlautMap: { [key: string]: string } = {
        'ä': 'ae',
        'ö': 'oe',
        'ü': 'ue',
        'ß': 'ss'
      };
      return umlautMap[match] || match;
    })
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');
};

// Function to get a random author for the article
const getRandomAuthor = () => {
  const authors = [
    { name: 'Dr. Markus Weber', role: 'CEO & Gründer', image: '/placeholder.svg?height=80&width=80&text=MW' },
    { name: 'Julia Schmidt', role: 'Head of Recruiting', image: '/placeholder.svg?height=80&width=80&text=JS' },
    { name: 'Thomas Müller', role: 'Senior Consultant', image: '/placeholder.svg?height=80&width=80&text=TM' },
    { name: 'Sarah Becker', role: 'Diversity Specialist', image: '/placeholder.svg?height=80&width=80&text=SB' },
    { name: 'Dr. Michael Schneider', role: 'Data Analyst', image: '/placeholder.svg?height=80&width=80&text=MS' },
  ];
  
  return authors[Math.floor(Math.random() * authors.length)];
};

// Function to get a random category
const getRandomCategory = () => {
  const categories = [
    'Trends', 
    'HR-Strategien', 
    'Employer Branding', 
    'Diversity', 
    'Daten & Analysen', 
    'Onboarding', 
    'Candidate Experience',
    'Tech-Recruiting'
  ];
  
  return categories[Math.floor(Math.random() * categories.length)];
};

// Generate article content using OpenAI API
async function generateArticleContent(topic: string): Promise<{ title: string, content: string, excerpt: string }> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        { 
          role: "system", 
          content: "Du bist ein SEO-Experte und Content-Ersteller für eine Personalvermittlungsagentur. Erstelle einen umfassenden, informativen Artikel zu dem angegebenen Thema. Der Artikel sollte SEO-optimiert sein und aktuelle Best Practices im Recruiting behandeln. Nutze eine professionelle, aber zugängliche Sprache. Strukturiere den Artikel mit Überschriften und Unterüberschriften." 
        },
        { 
          role: "user", 
          content: `Erstelle einen SEO-optimierten Artikel zum Thema "${topic}". Liefere eine Ausgabe im folgenden JSON-Format:
          {
            "title": "Ein SEO-optimierter Titel zum Thema",
            "excerpt": "Ein kurzer Teaser-Text von etwa 2 Sätzen, der den Artikel beschreibt und Interesse weckt",
            "content": "Der vollständige HTML-formatierte Artikel mit Überschriften (h2, h3), Absätzen und eventuell Listen"
          }`
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const responseContent = completion.choices[0].message.content;
    if (!responseContent) {
      throw new Error("No content in API response");
    }
    
    const parsedContent = JSON.parse(responseContent);
    return {
      title: parsedContent.title,
      content: parsedContent.content,
      excerpt: parsedContent.excerpt
    };
  } catch (error) {
    console.error("Error generating article content:", error);
    throw error;
  }
}

// Function to generate reading time estimate
function calculateReadingTime(content: string): string {
  // Average reading speed: 225 words per minute
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / 225);
  return `${minutes} min`;
}

// Function to generate tags from content
function generateTags(title: string, content: string): string {
  const relevantTags = [
    'Recruiting', 'HR', 'Personalgewinnung', 'Fachkräfte', 'Talente', 
    'Bewerbungsprozess', 'Personalvermittlung', 'Employer Branding',
    'Karriere', 'Mitarbeiter', 'Bewerbungsmanagement', 'Personalauswahl',
    'HR-Technologie', 'Arbeitsmarkt', 'Personalbeschaffung', 'HR-Management',
    'Personalberatung', 'Stellenangebote', 'Headhunting', 'Active Sourcing'
  ];
  
  // Select 3-5 relevant tags that might appear in the content
  const selectedTags = relevantTags
    .filter(tag => title.includes(tag) || content.includes(tag))
    .slice(0, 5);
  
  // Add at least 3 tags if we don't have enough
  while (selectedTags.length < 3) {
    const randomTag = relevantTags[Math.floor(Math.random() * relevantTags.length)];
    if (!selectedTags.includes(randomTag)) {
      selectedTags.push(randomTag);
    }
  }
  
  return selectedTags.join(',');
}

// Main function to generate and save an article
export async function generateAndSaveArticle(): Promise<boolean> {
  try {
    // Select a random topic
    const topic = RECRUITING_TOPICS[Math.floor(Math.random() * RECRUITING_TOPICS.length)];
    
    // Generate article content
    const { title, content, excerpt } = await generateArticleContent(topic);
    
    // Generate article metadata
    const author = getRandomAuthor();
    const category = getRandomCategory();
    const slug = generateSlug(title);
    const readTime = calculateReadingTime(content);
    const tags = generateTags(title, content);
    const featured = Math.random() > 0.8; // 20% chance of being featured
    
    // Check if an article with this slug already exists
    const existingArticle = await prisma.article.findUnique({
      where: { slug },
    });
    
    if (existingArticle) {
      console.log(`Article with slug "${slug}" already exists, skipping`);
      return false;
    }
    
    // Create the article in the database
    await prisma.article.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        imageUrl: `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(title.substring(0, 20))}`,
        author: author.name,
        authorRole: author.role,
        authorImage: author.image,
        category,
        tags,
        readTime,
        featured,
        published: true,
      },
    });
    
    console.log(`Successfully generated and saved article: "${title}"`);
    return true;
  } catch (error) {
    console.error("Error in generateAndSaveArticle:", error);
    return false;
  }
} 