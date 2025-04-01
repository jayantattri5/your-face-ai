/*
  Warnings:

  - You are about to drop the column `userId` on the `Model` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Model" DROP COLUMN "userId",
ADD COLUMN     "userID" TEXT;
