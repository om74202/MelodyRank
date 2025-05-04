/*
  Warnings:

  - You are about to drop the column `streamerId` on the `UpVotes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,streamId]` on the table `UpVotes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `streamId` to the `UpVotes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UpVotes" DROP CONSTRAINT "UpVotes_streamerId_fkey";

-- DropIndex
DROP INDEX "UpVotes_userId_streamerId_key";

-- AlterTable
ALTER TABLE "UpVotes" DROP COLUMN "streamerId",
ADD COLUMN     "streamId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UpVotes_userId_streamId_key" ON "UpVotes"("userId", "streamId");

-- AddForeignKey
ALTER TABLE "UpVotes" ADD CONSTRAINT "UpVotes_streamId_fkey" FOREIGN KEY ("streamId") REFERENCES "Streamer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
