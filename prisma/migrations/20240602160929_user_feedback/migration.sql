/*
  Warnings:

  - You are about to drop the column `equipaje` on the `Boleto` table. All the data in the column will be lost.
  - You are about to drop the column `telefonoCliente` on the `Boleto` table. All the data in the column will be lost.
  - Added the required column `metodoPago` to the `Boleto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tarifaGeneral` to the `Viaje` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Boleto" DROP COLUMN "equipaje",
DROP COLUMN "telefonoCliente",
ADD COLUMN     "destino" TEXT NOT NULL DEFAULT 'Sin Destino',
ADD COLUMN     "metodoPago" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Viaje" ADD COLUMN     "tarifaGeneral" INTEGER NOT NULL;
