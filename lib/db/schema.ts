// Database schema for the recruiting-agency application
// We'll use Prisma ORM for database interactions

import { PrismaClient } from '@prisma/client'

// Check if we're in a Node.js environment (not Edge Runtime)
const isNodeEnv = typeof window === 'undefined' && 
  process.env.NEXT_RUNTIME !== 'edge';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit during hot reloads.
const globalForPrisma = global as unknown as { prisma: PrismaClient }

// Initialize PrismaClient with proper error handling
let prismaInstance: PrismaClient | null = null;

try {
  if (isNodeEnv) {
    if (process.env.NODE_ENV === 'production') {
      prismaInstance = new PrismaClient({
        log: ['error'],
      });
    } else {
      // In development, use global instance to prevent connection leaks
      if (!globalForPrisma.prisma) {
        globalForPrisma.prisma = new PrismaClient({
          log: ['query', 'error', 'warn'],
        });
      }
      prismaInstance = globalForPrisma.prisma;
    }
  } else {
    console.warn('PrismaClient not initialized: running in Edge Runtime or browser');
  }
} catch (error) {
  console.error('Failed to initialize Prisma client:', error);
}

export const prisma = prismaInstance as PrismaClient;

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