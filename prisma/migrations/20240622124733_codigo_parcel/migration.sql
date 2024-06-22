/*
  Warnings:

  - Added the required column `serie` to the `Encomienda` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SerieEncomienda" AS ENUM ('B001', 'F001');

-- AlterTable
ALTER TABLE "Encomienda" ADD COLUMN     "serie" "SerieEncomienda" NOT NULL;
