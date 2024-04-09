/*
  Warnings:

  - The `estado` column on the `Viaje` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `pasajeroApellidos` to the `Boleto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pasajeroNombres` to the `Boleto` table without a default value. This is not possible if the table is not empty.
  - Made the column `equipaje` on table `Boleto` required. This step will fail if there are existing NULL values in that column.
  - Made the column `foto` on table `Bus` required. This step will fail if there are existing NULL values in that column.
  - Made the column `foto` on table `Conductor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `foto` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "ViajeEstado" AS ENUM ('DISPONIBLE', 'CANCELADO', 'LLENO');

-- AlterTable
ALTER TABLE "Boleto" ADD COLUMN     "pasajeroApellidos" TEXT NOT NULL,
ADD COLUMN     "pasajeroNombres" TEXT NOT NULL,
ALTER COLUMN "equipaje" SET NOT NULL,
ALTER COLUMN "equipaje" SET DEFAULT 'Sin Equipaje';

-- AlterTable
ALTER TABLE "Bus" ALTER COLUMN "foto" SET NOT NULL,
ALTER COLUMN "foto" SET DEFAULT 'https://img.freepik.com/premium-vector/bus-flat-color-icon-long-shadow-vector-illustration_755164-9961.jpg?w=740';

-- AlterTable
ALTER TABLE "Conductor" ALTER COLUMN "foto" SET NOT NULL,
ALTER COLUMN "foto" SET DEFAULT 'https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1712692756~exp=1712696356~hmac=b3d33e282723c8433bd6139a8135acb77bb9f233f203215517ff5da551250ac7&w=740';

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "foto" SET NOT NULL,
ALTER COLUMN "foto" SET DEFAULT 'https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1712692756~exp=1712696356~hmac=b3d33e282723c8433bd6139a8135acb77bb9f233f203215517ff5da551250ac7&w=740';

-- AlterTable
ALTER TABLE "Viaje" DROP COLUMN "estado",
ADD COLUMN     "estado" "ViajeEstado" NOT NULL DEFAULT 'DISPONIBLE';
