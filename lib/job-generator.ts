import OpenAI from 'openai';
import { prisma } from './db/schema';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// List of job categories with industry-specific information
const JOB_CATEGORIES = [
  { 
    category: 'it', 
    name: 'IT & Software Development',
    industries: ['Tech', 'SaaS', 'E-Commerce', 'FinTech', 'HealthTech', 'InsurTech'],
    positions: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'DevOps Engineer', 'Data Scientist', 'Product Manager', 'UX/UI Designer', 'QA Engineer', 'Scrum Master', 'IT Project Manager']
  },
  { 
    category: 'marketing', 
    name: 'Marketing & Kommunikation',
    industries: ['Agentur', 'E-Commerce', 'FMCG', 'Medien', 'Beratung'],
    positions: ['Marketing Manager', 'Content Manager', 'SEO Specialist', 'Social Media Manager', 'Brand Manager', 'Performance Marketing Manager', 'PR Manager', 'Online Marketing Manager']
  },
  { 
    category: 'sales', 
    name: 'Vertrieb & Business Development',
    industries: ['SaaS', 'Consulting', 'Manufacturing', 'Retail', 'B2B', 'Healthcare'],
    positions: ['Account Manager', 'Business Development Manager', 'Sales Manager', 'Key Account Manager', 'Inside Sales Representative', 'Sales Director', 'Customer Success Manager']
  },
  { 
    category: 'finance', 
    name: 'Finance & Accounting',
    industries: ['Banking', 'Insurance', 'Corporate Finance', 'Consulting', 'FinTech'],
    positions: ['Financial Controller', 'Accountant', 'Finance Manager', 'Financial Analyst', 'Tax Consultant', 'Auditor', 'Compliance Manager', 'Risk Manager']
  },
  { 
    category: 'hr', 
    name: 'HR & Recruiting',
    industries: ['HR Services', 'Corporate HR', 'Recruiting', 'Training & Development'],
    positions: ['HR Manager', 'Recruiter', 'Talent Acquisition Specialist', 'HR Business Partner', 'Employer Branding Manager', 'HR Generalist', 'Learning & Development Manager']
  },
  { 
    category: 'engineering', 
    name: 'Engineering & Manufacturing',
    industries: ['Automotive', 'Aerospace', 'Manufacturing', 'Energy', 'Construction'],
    positions: ['Mechanical Engineer', 'Electrical Engineer', 'Process Engineer', 'Quality Manager', 'Production Manager', 'R&D Engineer', 'Project Engineer']
  },
  { 
    category: 'legal', 
    name: 'Legal & Compliance',
    industries: ['Law Firm', 'Corporate Legal', 'FinTech', 'Insurance', 'Consulting'],
    positions: ['Legal Counsel', 'Lawyer', 'Compliance Officer', 'Data Protection Officer', 'Legal Advisor', 'Contract Manager']
  },
  { 
    category: 'healthcare', 
    name: 'Healthcare & Life Sciences',
    industries: ['Pharma', 'Biotech', 'Medical Technology', 'Healthcare Provider', 'Research'],
    positions: ['Medical Advisor', 'Clinical Research Associate', 'Regulatory Affairs Manager', 'Healthcare Consultant', 'Quality Manager', 'Product Specialist']
  }
];

// Location options for job listings
const LOCATIONS = [
  'Berlin', 'München', 'Hamburg', 'Frankfurt', 'Köln', 'Düsseldorf', 
  'Stuttgart', 'Leipzig', 'Dresden', 'Hannover', 'Nürnberg', 'Remote Deutschland'
];

// Employment types
const EMPLOYMENT_TYPES = [
  'Vollzeit', 'Teilzeit', 'Befristet', 'Unbefristet', 'Werkstudent', 'Praktikum', 'Freelance'
];

// Work models
const WORK_MODELS = [
  'Remote', 'Hybrid', 'Vor Ort'
];

// Function to generate a slug from a title
const generateSlug = (title: string, company: string): string => {
  // Combine job title and company for better SEO in the URL
  const combinedSlug = `${title}-${company}`;
  
  return combinedSlug
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
    .replace(/[^\w\s-]/gi, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

// Function to get a random item from an array
const getRandomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Generate job content using OpenAI API
async function generateJobContent(params: {
  category: string;
  position: string;
  industry: string;
  location: string;
  employmentType: string;
  workModel: string;
}): Promise<{
  title: string;
  company: string;
  description: string;
  responsibilities: string;
  requirements: string;
  benefits: string;
  salary: string;
  tags: string[];
}> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        { 
          role: "system", 
          content: "Du bist ein HR-Experte und erstellst überzeugende, SEO-optimierte Stellenausschreibungen für diverse Unternehmen. Die Beschreibungen sollen professionell, detailliert und ansprechend sein. Sie sollen suchmaschinenoptimiert sein und die passenden Keywords für die Jobsuche enthalten." 
        },
        { 
          role: "user", 
          content: `Erstelle eine SEO-optimierte Stellenanzeige für die Position "${params.position}" in der Branche "${params.industry}" im Bereich "${params.category}" am Standort "${params.location}" (${params.employmentType}, ${params.workModel}). 

          Liefere eine Ausgabe im folgenden JSON-Format:
          {
            "title": "Ein attraktiver, SEO-optimierter Jobtitel, der die Position und ggf. Erfahrungslevel enthält",
            "company": "Ein fiktiver, realistischer Unternehmensname mit GmbH, AG, etc.",
            "description": "Eine ausführliche HTML-formatierte Jobbeschreibung mit 3-4 Absätzen, die das Unternehmen und die Position beschreibt",
            "responsibilities": "Eine HTML-Liste (<ul><li>...</li></ul>) mit 5-7 Hauptaufgaben der Position",
            "requirements": "Eine HTML-Liste (<ul><li>...</li></ul>) mit 5-7 Anforderungen an den idealen Kandidaten",
            "benefits": "Eine HTML-Liste (<ul><li>...</li></ul>) mit 5-7 attraktiven Benefits des Unternehmens",
            "salary": "Eine realistische Gehaltsrange für die Position in Euro",
            "tags": ["5-8 relevante Keywords/Skills für die Position als Array"]
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
      company: parsedContent.company,
      description: parsedContent.description,
      responsibilities: parsedContent.responsibilities,
      requirements: parsedContent.requirements,
      benefits: parsedContent.benefits,
      salary: parsedContent.salary,
      tags: parsedContent.tags
    };
  } catch (error) {
    console.error("Error generating job content:", error);
    throw error;
  }
}

// Main function to generate and save a job listing
export async function generateAndSaveJob(): Promise<boolean> {
  try {
    // 1. Select random job category and details
    const jobCategory = getRandomItem(JOB_CATEGORIES);
    const position = getRandomItem(jobCategory.positions);
    const industry = getRandomItem(jobCategory.industries);
    const location = getRandomItem(LOCATIONS);
    const employmentType = getRandomItem(EMPLOYMENT_TYPES);
    const workModel = getRandomItem(WORK_MODELS);
    
    // 2. Generate job content
    const jobContent = await generateJobContent({
      category: jobCategory.name,
      position,
      industry,
      location,
      employmentType,
      workModel
    });
    
    // 3. Process the generated content
    const title = jobContent.title;
    const company = jobContent.company;
    const slug = generateSlug(title, company);
    
    // 4. Check if a job with this slug already exists
    const existingJob = await prisma.job.findUnique({
      where: { slug },
    });
    
    if (existingJob) {
      console.log(`Job with slug "${slug}" already exists, skipping`);
      return false;
    }
    
    // 5. Calculate expiration (30 days from now)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);
    
    // 6. Random featured flag (10% chance)
    const featured = Math.random() < 0.1;
    
    // 7. Random urgent flag (15% chance)
    const urgent = Math.random() < 0.15;
    
    // 8. Create the job in the database
    await prisma.job.create({
      data: {
        title,
        slug,
        company,
        location,
        employmentType,
        workModel,
        salary: jobContent.salary,
        description: jobContent.description,
        responsibilities: jobContent.responsibilities,
        requirements: jobContent.requirements,
        benefits: jobContent.benefits,
        industry,
        category: jobCategory.category,
        tags: jobContent.tags.join(','),
        logoUrl: `/placeholder.svg?height=80&width=80&text=${encodeURIComponent(company.substring(0, 2))}`,
        featured,
        urgent,
        published: true,
        expiresAt,
      },
    });
    
    console.log(`Successfully generated and saved job: "${title}" at "${company}"`);
    return true;
  } catch (error) {
    console.error("Error in generateAndSaveJob:", error);
    return false;
  }
}

// Function to get multiple random jobs (used for daily batch generation)
export async function generateMultipleJobs(count: number = 3): Promise<number> {
  let successCount = 0;
  
  for (let i = 0; i < count; i++) {
    try {
      const success = await generateAndSaveJob();
      if (success) successCount++;
      
      // Pause between requests to avoid rate limits
      if (i < count - 1) {
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    } catch (error) {
      console.error(`Error generating job ${i+1}/${count}:`, error);
    }
  }
  
  return successCount;
} 