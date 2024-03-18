/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Boleto` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Bus` table. All the data in the column will be lost.
  - You are about to drop the column `estadoDocumentario` on the `Conductor` table. All the data in the column will be lost.
  - You are about to drop the column `comprobante` on the `Encomienda` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Encomienda` table. All the data in the column will be lost.
  - You are about to drop the column `destinatarioId` on the `Encomienda` table. All the data in the column will be lost.
  - You are about to drop the column `precioEnvio` on the `Encomienda` table. All the data in the column will be lost.
  - You are about to drop the column `remitenteId` on the `Encomienda` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Ruta` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `rol` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `sedeDelegacion` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `telefono` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Viaje` table. All the data in the column will be lost.
  - You are about to drop the column `fechaSalida` on the `Viaje` table. All the data in the column will be lost.
  - You are about to drop the column `horaSalida` on the `Viaje` table. All the data in the column will be lost.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[usuarioDni]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pasajeroDni` to the `Boleto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conductorDni` to the `Conductor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinatarioDni` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remitenteDni` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Made the column `duracionEstimada` on table `Ruta` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `apellidos` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombres` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioDni` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salida` to the `Viaje` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'GUEST');

-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "Boleto" DROP COLUMN "createdAt",
ADD COLUMN     "fechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pasajeroDni" TEXT NOT NULL,
ALTER COLUMN "reservado" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Bus" DROP COLUMN "createdAt",
ADD COLUMN     "fechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Conductor" DROP COLUMN "estadoDocumentario",
ADD COLUMN     "conductorDni" TEXT NOT NULL,
ALTER COLUMN "disponibilidad" SET DEFAULT true;

-- AlterTable
ALTER TABLE "Encomienda" DROP COLUMN "comprobante",
DROP COLUMN "createdAt",
DROP COLUMN "destinatarioId",
DROP COLUMN "precioEnvio",
DROP COLUMN "remitenteId",
ADD COLUMN     "destinatarioDni" TEXT NOT NULL,
ADD COLUMN     "factura" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "precio" INTEGER NOT NULL,
ADD COLUMN     "remitenteDni" TEXT NOT NULL,
ALTER COLUMN "fechaEnvio" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "pagado" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Ruta" DROP COLUMN "createdAt",
ALTER COLUMN "duracionEstimada" SET NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "createdAt",
DROP COLUMN "rol",
DROP COLUMN "sedeDelegacion",
DROP COLUMN "telefono",
ADD COLUMN     "apellidos" TEXT NOT NULL,
ADD COLUMN     "nombres" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "usuarioDni" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Viaje" DROP COLUMN "createdAt",
DROP COLUMN "fechaSalida",
DROP COLUMN "horaSalida",
ADD COLUMN     "salida" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "VerificationToken";

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_usuarioDni_key" ON "Usuario"("usuarioDni");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
