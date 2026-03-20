-- CreateEnum
CREATE TYPE "ArrivalDay" AS ENUM ('FRIDAY', 'SATURDAY');

-- CreateEnum
CREATE TYPE "MenuChoice" AS ENUM ('STANDARD', 'VEGETARIAN');

-- CreateTable
CREATE TABLE "Guest" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rsvp" (
    "id" TEXT NOT NULL,
    "guestId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "attending" BOOLEAN NOT NULL,
    "attendingBrunch" BOOLEAN NOT NULL DEFAULT false,
    "arrivalDay" "ArrivalDay",
    "menuChoice" "MenuChoice" NOT NULL DEFAULT 'STANDARD',
    "allergies" TEXT,
    "hasPlusOne" BOOLEAN NOT NULL DEFAULT false,
    "plusOneFirstName" TEXT,
    "plusOneLastName" TEXT,
    "plusOneMenu" "MenuChoice",
    "childrenCount" INTEGER NOT NULL DEFAULT 0,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rsvp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameEntry" (
    "id" TEXT NOT NULL,
    "guestId" TEXT,
    "playerName" TEXT NOT NULL,
    "answers" JSONB NOT NULL,
    "score" INTEGER,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GameEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guest_email_key" ON "Guest"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Guest_token_key" ON "Guest"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Rsvp_guestId_key" ON "Rsvp"("guestId");

-- AddForeignKey
ALTER TABLE "Rsvp" ADD CONSTRAINT "Rsvp_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
