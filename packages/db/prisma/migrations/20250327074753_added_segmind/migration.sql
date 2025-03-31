/*
  Warnings:

  - The values [Other] on the enum `ModelTypeEnum` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `userID` on the `Model` table. All the data in the column will be lost.
  - The `trainingStatus` column on the `Model` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `createdat` on the `OutputImages` table. All the data in the column will be lost.
  - Changed the type of `ethinicity` on the `Model` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ModelTrainingStatusEnum" AS ENUM ('PENDING', 'GENERATED', 'REJECTED');

-- CreateEnum
CREATE TYPE "EthenecityEnum" AS ENUM ('White', 'Black', 'Asian_American', 'East_Asian', 'South_East_Asian', 'South_Asian', 'Middle_Eastern', 'Pacific', 'Hispanic');

-- AlterEnum
BEGIN;
CREATE TYPE "ModelTypeEnum_new" AS ENUM ('Man', 'Woman', 'Others');
ALTER TABLE "Model" ALTER COLUMN "type" TYPE "ModelTypeEnum_new" USING ("type"::text::"ModelTypeEnum_new");
ALTER TYPE "ModelTypeEnum" RENAME TO "ModelTypeEnum_old";
ALTER TYPE "ModelTypeEnum_new" RENAME TO "ModelTypeEnum";
DROP TYPE "ModelTypeEnum_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "OutputImages" DROP CONSTRAINT "OutputImages_modelId_fkey";

-- AlterTable
ALTER TABLE "Model" DROP COLUMN "userID",
ADD COLUMN     "userId" TEXT,
DROP COLUMN "ethinicity",
ADD COLUMN     "ethinicity" "EthenecityEnum" NOT NULL,
DROP COLUMN "trainingStatus",
ADD COLUMN     "trainingStatus" "ModelTrainingStatusEnum" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "OutputImages" DROP COLUMN "createdat",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "segmindRequestId" TEXT,
ALTER COLUMN "modelId" DROP NOT NULL;

-- DropEnum
DROP TYPE "EthinicityEnum";

-- DropEnum
DROP TYPE "ModelTrainingEnumStatus";

-- CreateIndex
CREATE INDEX "OutputImages_segmindRequestId_idx" ON "OutputImages"("segmindRequestId");

-- AddForeignKey
ALTER TABLE "OutputImages" ADD CONSTRAINT "OutputImages_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE SET NULL ON UPDATE CASCADE;
