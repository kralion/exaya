/*
  Warnings:

  - The `codigo` column on the `Boleto` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `ciudadDestino` on the `Encomienda` table. All the data in the column will be lost.
  - You are about to drop the column `ciudadOrigen` on the `Encomienda` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Serie" AS ENUM ('AG001', 'AG002', 'AG003', 'AG004', 'AG005', 'AG006', 'AG007', 'AG008', 'AG009', 'AG010');

-- DropIndex
DROP INDEX "Boleto_codigo_key";

-- AlterTable
ALTER TABLE "Boleto" ADD COLUMN     "serie" "Serie" NOT NULL DEFAULT 'AG001',
DROP COLUMN "codigo",
ADD COLUMN     "codigo" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "Encomienda" DROP COLUMN "ciudadDestino",
DROP COLUMN "ciudadOrigen";

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "serie" "Serie" NOT NULL DEFAULT 'AG001';
