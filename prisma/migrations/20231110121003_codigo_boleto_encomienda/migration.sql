/*
  Warnings:

  - You are about to drop the column `estado` on the `Encomienda` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[codigo]` on the table `Boleto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[codigo]` on the table `Encomienda` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigo` to the `Boleto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reservado` to the `Boleto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codigo` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pagado` to the `Encomienda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Boleto" ADD COLUMN     "codigo" TEXT NOT NULL,
ADD COLUMN     "reservado" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Encomienda" DROP COLUMN "estado",
ADD COLUMN     "codigo" TEXT NOT NULL,
ADD COLUMN     "pagado" BOOLEAN NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Boleto_codigo_key" ON "Boleto"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Encomienda_codigo_key" ON "Encomienda"("codigo");
