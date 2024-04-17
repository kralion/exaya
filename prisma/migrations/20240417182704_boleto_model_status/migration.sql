-- CreateEnum
CREATE TYPE "BoletoEstado" AS ENUM ('DISPONIBLE', 'RESERVADO', 'PAGADO');

-- AlterTable
ALTER TABLE "Boleto" ADD COLUMN     "estado" "BoletoEstado" NOT NULL DEFAULT 'DISPONIBLE';
