/*
  Warnings:

  - The primary key for the `Boleto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pasajeroId` on the `Boleto` table. All the data in the column will be lost.
  - The primary key for the `Bus` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Conductor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `personaId` on the `Conductor` table. All the data in the column will be lost.
  - The primary key for the `Encomienda` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `contenido` on the `Encomienda` table. All the data in the column will be lost.
  - The primary key for the `Manifiesto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `encomiendas` on the `Manifiesto` table. All the data in the column will be lost.
  - You are about to drop the column `pasajeros` on the `Manifiesto` table. All the data in the column will be lost.
  - The primary key for the `Persona` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `apellido` on the `Persona` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Persona` table. All the data in the column will be lost.
  - The primary key for the `Ruta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tarifas` on the `Ruta` table. All the data in the column will be lost.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Usuario` table. All the data in the column will be lost.
  - The primary key for the `Viaje` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fechaLlegada` on the `Viaje` table. All the data in the column will be lost.
  - You are about to drop the `Pasajero` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ConductorToViaje` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[clienteId]` on the table `Boleto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clienteId]` on the table `Conductor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dni]` on the table `Persona` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clienteId]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clienteId` to the `Boleto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio` to the `Boleto` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `asiento` on the `Boleto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `foto` to the `Bus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clienteId` to the `Conductor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disponibilidad` to the `Conductor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estadoDocumentario` to the `Conductor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `licencia` to the `Conductor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoLicencia` to the `Conductor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comprobante` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descripcion` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaEnvio` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Made the column `viajeId` on table `Encomienda` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `apellidos` to the `Persona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dni` to the `Persona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombres` to the `Persona` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terminalDestino` to the `Ruta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terminalOrigen` to the `Ruta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clienteId` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rol` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sedeDelegacion` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Made the column `username` on table `Usuario` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `busId` to the `Viaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destino` to the `Viaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora` to the `Viaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origen` to the `Viaje` table without a default value. This is not possible if the table is not empty.
  - Made the column `rutaId` on table `Viaje` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Boleto" DROP CONSTRAINT "Boleto_pasajeroId_fkey";

-- DropForeignKey
ALTER TABLE "Boleto" DROP CONSTRAINT "Boleto_viajeId_fkey";

-- DropForeignKey
ALTER TABLE "Conductor" DROP CONSTRAINT "Conductor_personaId_fkey";

-- DropForeignKey
ALTER TABLE "Encomienda" DROP CONSTRAINT "Encomienda_destinatarioId_fkey";

-- DropForeignKey
ALTER TABLE "Encomienda" DROP CONSTRAINT "Encomienda_remitenteId_fkey";

-- DropForeignKey
ALTER TABLE "Encomienda" DROP CONSTRAINT "Encomienda_viajeId_fkey";

-- DropForeignKey
ALTER TABLE "Manifiesto" DROP CONSTRAINT "Manifiesto_viajeId_fkey";

-- DropForeignKey
ALTER TABLE "Pasajero" DROP CONSTRAINT "Pasajero_personaId_fkey";

-- DropForeignKey
ALTER TABLE "Viaje" DROP CONSTRAINT "Viaje_rutaId_fkey";

-- DropForeignKey
ALTER TABLE "_ConductorToViaje" DROP CONSTRAINT "_ConductorToViaje_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConductorToViaje" DROP CONSTRAINT "_ConductorToViaje_B_fkey";

-- DropIndex
DROP INDEX "Boleto_pasajeroId_key";

-- DropIndex
DROP INDEX "Conductor_personaId_key";

-- DropIndex
DROP INDEX "Usuario_email_key";

-- DropIndex
DROP INDEX "Usuario_username_key";

-- AlterTable
ALTER TABLE "Boleto" DROP CONSTRAINT "Boleto_pkey",
DROP COLUMN "pasajeroId",
ADD COLUMN     "clienteId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "manifiestoId" TEXT,
ADD COLUMN     "precio" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "viajeId" SET DATA TYPE TEXT,
DROP COLUMN "asiento",
ADD COLUMN     "asiento" INTEGER NOT NULL,
ADD CONSTRAINT "Boleto_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Boleto_id_seq";

-- AlterTable
ALTER TABLE "Bus" DROP CONSTRAINT "Bus_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "foto" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Bus_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Bus_id_seq";

-- AlterTable
ALTER TABLE "Conductor" DROP CONSTRAINT "Conductor_pkey",
DROP COLUMN "personaId",
ADD COLUMN     "clienteId" TEXT NOT NULL,
ADD COLUMN     "disponibilidad" BOOLEAN NOT NULL,
ADD COLUMN     "estadoDocumentario" TEXT NOT NULL,
ADD COLUMN     "foto" TEXT,
ADD COLUMN     "licencia" TEXT NOT NULL,
ADD COLUMN     "manifiestoId" TEXT,
ADD COLUMN     "tipoLicencia" TEXT NOT NULL,
ADD COLUMN     "viajeId" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Conductor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Conductor_id_seq";

-- AlterTable
ALTER TABLE "Encomienda" DROP CONSTRAINT "Encomienda_pkey",
DROP COLUMN "contenido",
ADD COLUMN     "comprobante" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "descripcion" TEXT NOT NULL,
ADD COLUMN     "estado" BOOLEAN NOT NULL,
ADD COLUMN     "fechaEnvio" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "manifiestoId" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "remitenteId" SET DATA TYPE TEXT,
ALTER COLUMN "destinatarioId" SET DATA TYPE TEXT,
ALTER COLUMN "viajeId" SET NOT NULL,
ALTER COLUMN "viajeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Encomienda_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Encomienda_id_seq";

-- AlterTable
ALTER TABLE "Manifiesto" DROP CONSTRAINT "Manifiesto_pkey",
DROP COLUMN "encomiendas",
DROP COLUMN "pasajeros",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "viajeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Manifiesto_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Manifiesto_id_seq";

-- AlterTable
ALTER TABLE "Persona" DROP CONSTRAINT "Persona_pkey",
DROP COLUMN "apellido",
DROP COLUMN "nombre",
ADD COLUMN     "apellidos" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dni" TEXT NOT NULL,
ADD COLUMN     "nombres" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Persona_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Persona_id_seq";

-- AlterTable
ALTER TABLE "Ruta" DROP CONSTRAINT "Ruta_pkey",
DROP COLUMN "tarifas",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "terminalDestino" TEXT NOT NULL,
ADD COLUMN     "terminalOrigen" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Ruta_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Ruta_id_seq";

-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
DROP COLUMN "email",
DROP COLUMN "updatedAt",
ADD COLUMN     "clienteId" TEXT NOT NULL,
ADD COLUMN     "foto" TEXT,
ADD COLUMN     "rol" TEXT NOT NULL,
ADD COLUMN     "sedeDelegacion" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "username" SET NOT NULL,
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Usuario_id_seq";

-- AlterTable
ALTER TABLE "Viaje" DROP CONSTRAINT "Viaje_pkey",
DROP COLUMN "fechaLlegada",
ADD COLUMN     "busId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "destino" TEXT NOT NULL,
ADD COLUMN     "hora" TEXT NOT NULL,
ADD COLUMN     "origen" TEXT NOT NULL,
ADD COLUMN     "tarifas" INTEGER[],
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "rutaId" SET NOT NULL,
ALTER COLUMN "rutaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Viaje_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Viaje_id_seq";

-- DropTable
DROP TABLE "Pasajero";

-- DropTable
DROP TABLE "_ConductorToViaje";

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL,
    "personaId" TEXT NOT NULL,
    "manifiestoId" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_personaId_key" ON "Cliente"("personaId");

-- CreateIndex
CREATE UNIQUE INDEX "Boleto_clienteId_key" ON "Boleto"("clienteId");

-- CreateIndex
CREATE UNIQUE INDEX "Conductor_clienteId_key" ON "Conductor"("clienteId");

-- CreateIndex
CREATE UNIQUE INDEX "Persona_dni_key" ON "Persona"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_clienteId_key" ON "Usuario"("clienteId");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encomienda" ADD CONSTRAINT "Encomienda_remitenteId_fkey" FOREIGN KEY ("remitenteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encomienda" ADD CONSTRAINT "Encomienda_destinatarioId_fkey" FOREIGN KEY ("destinatarioId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encomienda" ADD CONSTRAINT "Encomienda_viajeId_fkey" FOREIGN KEY ("viajeId") REFERENCES "Viaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encomienda" ADD CONSTRAINT "Encomienda_manifiestoId_fkey" FOREIGN KEY ("manifiestoId") REFERENCES "Manifiesto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conductor" ADD CONSTRAINT "Conductor_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conductor" ADD CONSTRAINT "Conductor_viajeId_fkey" FOREIGN KEY ("viajeId") REFERENCES "Viaje"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conductor" ADD CONSTRAINT "Conductor_manifiestoId_fkey" FOREIGN KEY ("manifiestoId") REFERENCES "Manifiesto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boleto" ADD CONSTRAINT "Boleto_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boleto" ADD CONSTRAINT "Boleto_viajeId_fkey" FOREIGN KEY ("viajeId") REFERENCES "Viaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viaje" ADD CONSTRAINT "Viaje_busId_fkey" FOREIGN KEY ("busId") REFERENCES "Bus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viaje" ADD CONSTRAINT "Viaje_rutaId_fkey" FOREIGN KEY ("rutaId") REFERENCES "Ruta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Manifiesto" ADD CONSTRAINT "Manifiesto_viajeId_fkey" FOREIGN KEY ("viajeId") REFERENCES "Viaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
