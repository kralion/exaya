/*
  Warnings:

  - Added the required column `activo` to the `Viaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Viaje` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Viaje" ADD COLUMN     "activo" BOOLEAN NOT NULL,
ADD COLUMN     "estado" TEXT NOT NULL;
