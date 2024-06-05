/*
  Warnings:

  - Added the required column `destino` to the `Encomienda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Encomienda" ADD COLUMN     "destino" TEXT NOT NULL;
