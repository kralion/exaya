/*
  Warnings:

  - The `serie` column on the `Boleto` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `serie` column on the `Encomienda` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `serie` on the `Usuario` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "SerieBoleto" AS ENUM ('AG001', 'AG002', 'AG003', 'AG004', 'AG005', 'AG006', 'AG007', 'AG008', 'AG009', 'AG010');

-- CreateEnum
CREATE TYPE "SerieEncomienda" AS ENUM ('EAG001', 'EAG002', 'EAG003', 'EAG004', 'EAG005', 'EAG006', 'EAG007', 'EAG008', 'EAG009', 'EAG010');

-- AlterTable
ALTER TABLE "Boleto" DROP COLUMN "serie",
ADD COLUMN     "serie" "SerieBoleto" NOT NULL DEFAULT 'AG001';

-- AlterTable
ALTER TABLE "Encomienda" DROP COLUMN "serie",
ADD COLUMN     "serie" "SerieEncomienda" NOT NULL DEFAULT 'EAG001';

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "serie",
ADD COLUMN     "serieBoleto" "SerieBoleto" NOT NULL DEFAULT 'AG001',
ADD COLUMN     "serieEncomienda" "SerieEncomienda" NOT NULL DEFAULT 'EAG001';

-- DropEnum
DROP TYPE "Serie";
