-- CreateEnum
CREATE TYPE "ImageProviderEnum" AS ENUM ('FALAI', 'SEGMIND');

-- AlterTable
ALTER TABLE "OutputImages" ADD COLUMN     "provider" "ImageProviderEnum" NOT NULL DEFAULT 'FALAI';
