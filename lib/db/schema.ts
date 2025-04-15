// Database schema for the recruiting-agency application
// We'll use Prisma ORM for database interactions

import { PrismaClient } from '../../lib/generated/prisma';

// Check if we're in a Node.js environment (not Edge Runtime)
const isNodeEnv = typeof window === 'undefined' && 
  process.env.NEXT_RUNTIME !== 'edge';

// Vermeide mehrere Instanzen des PrismaClient in Entwicklungsumgebungen
// https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;

// Safely export generated Prisma types
try {
  // Only attempt to export if in Node environment
  if (isNodeEnv) {
    // Export client in try-catch to avoid errors in certain environments
    module.exports = { ...module.exports, ...require('../generated/prisma') };
  }
} catch (error) {
  console.warn('Could not export Prisma generated types:', error);
} 