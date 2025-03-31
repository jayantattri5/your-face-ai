/*
  Warnings:

  - The values [SEGMIND] on the enum `ImageProviderEnum` will be removed. If these variants are still used in the database, this will fail.
  - The values [Others] on the enum `ModelTypeEnum` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `segmindRequestId` on the `OutputImages` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ImageProviderEnum_new" AS ENUM ('FALAI', 'RUNWARE');
ALTER TABLE "OutputImages" ALTER COLUMN "provider" DROP DEFAULT;
ALTER TABLE "OutputImages" ALTER COLUMN "provider" TYPE "ImageProviderEnum_new" USING ("provider"::text::"ImageProviderEnum_new");
ALTER TYPE "ImageProviderEnum" RENAME TO "ImageProviderEnum_old";
ALTER TYPE "ImageProviderEnum_new" RENAME TO "ImageProviderEnum";
DROP TYPE "ImageProviderEnum_old";
ALTER TABLE "OutputImages" ALTER COLUMN "provider" SET DEFAULT 'FALAI';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "ModelTypeEnum_new" AS ENUM ('Man', 'Woman', 'Other');
ALTER TABLE "Model" ALTER COLUMN "type" TYPE "ModelTypeEnum_new" USING ("type"::text::"ModelTypeEnum_new");
ALTER TYPE "ModelTypeEnum" RENAME TO "ModelTypeEnum_old";
ALTER TYPE "ModelTypeEnum_new" RENAME TO "ModelTypeEnum";
DROP TYPE "ModelTypeEnum_old";
COMMIT;

-- DropIndex
DROP INDEX "OutputImages_segmindRequestId_idx";

-- AlterTable
ALTER TABLE "OutputImages" DROP COLUMN "segmindRequestId",
ADD COLUMN     "runwareRequestId" TEXT;

-- CreateIndex
CREATE INDEX "OutputImages_runwareRequestId_idx" ON "OutputImages"("runwareRequestId");
