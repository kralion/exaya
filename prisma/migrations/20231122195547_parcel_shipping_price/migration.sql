/*
  Warnings:

  - Added the required column `precioEnvio` to the `Encomienda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Encomienda" ADD COLUMN     "precioEnvio" INTEGER NOT NULL;
