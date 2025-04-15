/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
  // Füge experimentelle Flags hinzu für ESM-Kompatibilität
  experimental: {
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['prisma', '@prisma/client'],
  },
  // Stelle sicher, dass Umgebungsvariablen verfügbar sind
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || "OPENAI_API_KEY_PLACEHOLDER",
    API_KEY: process.env.API_KEY || "recruiting-agency-secret-key",
  },
};

module.exports = nextConfig; 