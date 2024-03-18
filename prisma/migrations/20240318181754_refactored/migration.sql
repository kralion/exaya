/*
  Warnings:

  - You are about to drop the column `clienteId` on the `Boleto` table. All the data in the column will be lost.
  - You are about to drop the column `clienteId` on the `Conductor` table. All the data in the column will be lost.
  - You are about to drop the column `clienteId` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `modelo` on table `Bus` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Boleto" DROP CONSTRAINT "Boleto_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Conductor" DROP CONSTRAINT "Conductor_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Encomienda" DROP CONSTRAINT "Encomienda_destinatarioId_fkey";

-- DropForeignKey
ALTER TABLE "Encomienda" DROP CONSTRAINT "Encomienda_remitenteId_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_clienteId_fkey";

-- DropIndex
DROP INDEX "Boleto_clienteId_key";

-- DropIndex
DROP INDEX "Conductor_clienteId_key";

-- DropIndex
DROP INDEX "Usuario_clienteId_key";

-- AlterTable
ALTER TABLE "Boleto" DROP COLUMN "clienteId",
ALTER COLUMN "equipaje" DROP NOT NULL,
ALTER COLUMN "equipaje" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Bus" ALTER COLUMN "modelo" SET NOT NULL,
ALTER COLUMN "foto" DROP NOT NULL,
ALTER COLUMN "foto" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Conductor" DROP COLUMN "clienteId";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "clienteId",
ALTER COLUMN "rol" SET DEFAULT 'CLIENTE';

-- DropTable
DROP TABLE "Cliente";

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
