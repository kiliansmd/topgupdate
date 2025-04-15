// Database schema for the recruiting-agency application
// We'll use Prisma ORM for database interactions

import { PrismaClient } from '@prisma/client'

// Export a single instance of PrismaClient to be used throughout the application
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma 

// Exportiere den generierten Prisma Client für die Verwendung in der Anwendung
export * from '../generated/prisma' 