/*
  Warnings:

  - You are about to drop the column `fechaCompra` on the `Boleto` table. All the data in the column will be lost.
  - You are about to drop the column `manifiestoId` on the `Boleto` table. All the data in the column will be lost.
  - You are about to drop the column `manifiestoId` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `manifiestoId` on the `Conductor` table. All the data in the column will be lost.
  - You are about to drop the column `manifiestoId` on the `Encomienda` table. All the data in the column will be lost.
  - You are about to drop the column `destino` on the `Viaje` table. All the data in the column will be lost.
  - You are about to drop the column `hora` on the `Viaje` table. All the data in the column will be lost.
  - You are about to drop the column `origen` on the `Viaje` table. All the data in the column will be lost.
  - You are about to drop the `Manifiesto` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `horaSalida` to the `Viaje` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Conductor" DROP CONSTRAINT "Conductor_manifiestoId_fkey";

-- DropForeignKey
ALTER TABLE "Encomienda" DROP CONSTRAINT "Encomienda_manifiestoId_fkey";

-- DropForeignKey
ALTER TABLE "Manifiesto" DROP CONSTRAINT "Manifiesto_viajeId_fkey";

-- AlterTable
ALTER TABLE "Boleto" DROP COLUMN "fechaCompra",
DROP COLUMN "manifiestoId";

-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "manifiestoId";

-- AlterTable
ALTER TABLE "Conductor" DROP COLUMN "manifiestoId";

-- AlterTable
ALTER TABLE "Encomienda" DROP COLUMN "manifiestoId";

-- AlterTable
ALTER TABLE "Viaje" DROP COLUMN "destino",
DROP COLUMN "hora",
DROP COLUMN "origen",
ADD COLUMN     "horaSalida" TEXT NOT NULL;

-- DropTable
DROP TABLE "Manifiesto";
