/*
  Warnings:

  - The values [APPROVED] on the enum `OutputImageStatusEnum` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `falAiREquestId` on the `OutputImages` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OutputImageStatusEnum_new" AS ENUM ('PENDING', 'GENERATED', 'REJECTED');
ALTER TABLE "OutputImages" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "OutputImages" ALTER COLUMN "status" TYPE "OutputImageStatusEnum_new" USING ("status"::text::"OutputImageStatusEnum_new");
ALTER TYPE "OutputImageStatusEnum" RENAME TO "OutputImageStatusEnum_old";
ALTER TYPE "OutputImageStatusEnum_new" RENAME TO "OutputImageStatusEnum";
DROP TYPE "OutputImageStatusEnum_old";
ALTER TABLE "OutputImages" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "OutputImages" DROP COLUMN "falAiREquestId",
ADD COLUMN     "falAiRequestId" TEXT;

-- CreateIndex
CREATE INDEX "Model_falAiRequestId_idx" ON "Model"("falAiRequestId");

-- CreateIndex
CREATE INDEX "OutputImages_falAiRequestId_idx" ON "OutputImages"("falAiRequestId");
