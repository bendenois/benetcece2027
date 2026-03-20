/*
  Warnings:

  - You are about to drop the column `guestId` on the `GameEntry` table. All the data in the column will be lost.
  - You are about to drop the column `guestId` on the `Rsvp` table. All the data in the column will be lost.
  - You are about to drop the `Guest` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Rsvp` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Rsvp" DROP CONSTRAINT "Rsvp_guestId_fkey";

-- DropIndex
DROP INDEX "Rsvp_guestId_key";

-- AlterTable
ALTER TABLE "GameEntry" DROP COLUMN "guestId";

-- AlterTable
ALTER TABLE "Rsvp" DROP COLUMN "guestId";

-- DropTable
DROP TABLE "Guest";

-- CreateIndex
CREATE UNIQUE INDEX "Rsvp_email_key" ON "Rsvp"("email");
