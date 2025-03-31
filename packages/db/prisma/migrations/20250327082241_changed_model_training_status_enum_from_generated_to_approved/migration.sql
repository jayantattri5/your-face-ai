/*
  Warnings:

  - The values [GENERATED] on the enum `ModelTrainingStatusEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ModelTrainingStatusEnum_new" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');
ALTER TABLE "Model" ALTER COLUMN "trainingStatus" DROP DEFAULT;
ALTER TABLE "Model" ALTER COLUMN "trainingStatus" TYPE "ModelTrainingStatusEnum_new" USING ("trainingStatus"::text::"ModelTrainingStatusEnum_new");
ALTER TYPE "ModelTrainingStatusEnum" RENAME TO "ModelTrainingStatusEnum_old";
ALTER TYPE "ModelTrainingStatusEnum_new" RENAME TO "ModelTrainingStatusEnum";
DROP TYPE "ModelTrainingStatusEnum_old";
ALTER TABLE "Model" ALTER COLUMN "trainingStatus" SET DEFAULT 'PENDING';
COMMIT;
