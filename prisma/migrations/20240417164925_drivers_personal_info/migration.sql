/*
  Warnings:

  - Added the required column `apellidos` to the `Conductor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombres` to the `Conductor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Conductor" ADD COLUMN     "apellidos" TEXT NOT NULL,
ADD COLUMN     "nombres" TEXT NOT NULL;
