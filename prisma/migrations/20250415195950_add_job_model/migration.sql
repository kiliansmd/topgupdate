-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "employmentType" TEXT NOT NULL,
    "workModel" TEXT NOT NULL,
    "salary" TEXT,
    "description" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "benefits" TEXT NOT NULL,
    "applicationUrl" TEXT,
    "contactEmail" TEXT,
    "logoUrl" TEXT,
    "industry" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "urgent" BOOLEAN NOT NULL DEFAULT false,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "views" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "expiresAt" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "Job_slug_key" ON "Job"("slug");
