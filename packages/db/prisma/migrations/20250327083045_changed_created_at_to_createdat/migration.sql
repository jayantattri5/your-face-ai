/*
  Warnings:

  - You are about to drop the column `createdAt` on the `OutputImages` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OutputImages" DROP COLUMN "createdAt",
ADD COLUMN     "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
