/*
  Warnings:

  - You are about to drop the `Equipaje` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Equipaje" DROP CONSTRAINT "Equipaje_boletoId_fkey";

-- AlterTable
ALTER TABLE "Boleto" ADD COLUMN     "equipaje" TEXT[];

-- DropTable
DROP TABLE "Equipaje";
