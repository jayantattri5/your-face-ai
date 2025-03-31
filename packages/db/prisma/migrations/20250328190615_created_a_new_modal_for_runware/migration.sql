-- AlterTable
ALTER TABLE "OutputImages" ADD COLUMN     "generatedImageId" TEXT;

-- CreateTable
CREATE TABLE "GeneratedImage" (
    "id" TEXT NOT NULL,
    "imageUUID" TEXT NOT NULL,
    "taskUUID" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "seed" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GeneratedImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GeneratedImage_imageUUID_key" ON "GeneratedImage"("imageUUID");

-- AddForeignKey
ALTER TABLE "OutputImages" ADD CONSTRAINT "OutputImages_generatedImageId_fkey" FOREIGN KEY ("generatedImageId") REFERENCES "GeneratedImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
