# Vercel Deployment Guide

## Deploying to Vercel via Web Interface

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Go to [Vercel's website](https://vercel.com/)
3. Sign up or log in
4. Click on "Add New..." > "Project"
5. Import your repository
6. Configure your project:
   - Framework Preset: Next.js
   - Root Directory: ./ (default)
   - Build Command: npm run build
   - Output Directory: .next
   - Install Command: npm install

7. Configure environment variables:
   - Add all variables from your `.env` file:
     - `DATABASE_URL`
     - `OPENAI_API_KEY`
     - Any other environment variables your project requires

8. Click "Deploy"

## Setting up a custom domain

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your domain
3. Follow the instructions to configure your DNS

## Setting up Vercel Cron Jobs

The `vercel.json` file already includes the necessary cron job configuration. After deployment:

1. Go to your project in the Vercel dashboard
2. Navigate to "Settings" > "Cron Jobs"
3. Verify that the cron job for `/api/cron` is properly configured
4. The job should run on Mondays and Thursdays at 10:00 AM (UTC)

## Post-Deployment Checks

After deployment, verify that:

1. The website loads properly
2. All pages and components render correctly
3. API endpoints work as expected
4. The database connection is functioning
5. The cron job is scheduled correctly

## Deployment Troubleshooting

If you encounter issues during deployment:

1. Check the Vercel build logs
2. Ensure all environment variables are correctly set
3. Verify that the database is accessible from Vercel
4. Check for any dependencies that might not be compatible with Vercel's environment

## Production Monitoring

1. Set up monitoring in the Vercel dashboard
2. Configure alerts for abnormal behavior
3. Regularly check logs and metrics to ensure optimal performance 