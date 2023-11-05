/*
  Warnings:

  - You are about to drop the column `personaId` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the `Persona` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[dni]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `telefonoCliente` to the `Boleto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apellidos` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dni` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombres` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cliente" DROP CONSTRAINT "Cliente_personaId_fkey";

-- DropIndex
DROP INDEX "Cliente_personaId_key";

-- AlterTable
ALTER TABLE "Boleto" ADD COLUMN     "telefonoCliente" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "personaId",
ADD COLUMN     "apellidos" TEXT NOT NULL,
ADD COLUMN     "dni" TEXT NOT NULL,
ADD COLUMN     "nombres" TEXT NOT NULL;

-- DropTable
DROP TABLE "Persona";

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_dni_key" ON "Cliente"("dni");
