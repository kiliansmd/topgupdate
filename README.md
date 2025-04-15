# GetExperts - Premium Recruiting-Agentur

A modern recruiting agency website built with Next.js 14, React, Prisma, and Tailwind CSS.

## Deployment to Vercel

### Manual Deployment

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```

### Automatic Deployment via GitHub

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Vercel will automatically deploy your application

### Environment Variables

Make sure to set the following environment variables in your Vercel project:

- `DATABASE_URL`: Your database connection string
- `OPENAI_API_KEY`: Your OpenAI API key for article generation

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Features

- Modern, responsive design
- Blog with automatically generated articles
- Expert profiles and search
- Contact forms
- SEO optimization
- Dark mode support

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion for animations
- Prisma ORM
- OpenAI integration for content generation 