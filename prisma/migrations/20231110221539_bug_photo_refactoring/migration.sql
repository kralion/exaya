/*
  Warnings:

  - You are about to drop the `Bus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Viaje" DROP CONSTRAINT "Viaje_busId_fkey";

-- DropTable
DROP TABLE "Bus";
