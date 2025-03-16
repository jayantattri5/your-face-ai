-- CreateEnum
CREATE TYPE "ModelTrainingEnumStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "Model" ADD COLUMN     "falAiRequestId" TEXT,
ADD COLUMN     "tensorPath" TEXT,
ADD COLUMN     "trainingStatus" "ModelTrainingEnumStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "triggerWord" TEXT;

-- AlterTable
ALTER TABLE "OutputImages" ADD COLUMN     "falAiREquestId" TEXT,
ALTER COLUMN "imageUrl" SET DEFAULT '';
