/*
  Warnings:

  - The primary key for the `GeneratedImage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `GeneratedImage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OutputImages" DROP CONSTRAINT "OutputImages_generatedImageId_fkey";

-- AlterTable
ALTER TABLE "GeneratedImage" DROP CONSTRAINT "GeneratedImage_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "GeneratedImage_pkey" PRIMARY KEY ("imageUUID");

-- AddForeignKey
ALTER TABLE "OutputImages" ADD CONSTRAINT "OutputImages_generatedImageId_fkey" FOREIGN KEY ("generatedImageId") REFERENCES "GeneratedImage"("imageUUID") ON DELETE SET NULL ON UPDATE CASCADE;
