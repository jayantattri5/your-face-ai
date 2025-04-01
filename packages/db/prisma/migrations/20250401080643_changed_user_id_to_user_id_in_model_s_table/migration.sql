/*
  Warnings:

  - You are about to drop the column `userID` on the `Model` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Model" DROP COLUMN "userID",
ADD COLUMN     "userId" TEXT;
