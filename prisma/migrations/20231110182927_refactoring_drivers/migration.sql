/*
  Warnings:

  - You are about to drop the `Conductor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Conductor" DROP CONSTRAINT "Conductor_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Conductor" DROP CONSTRAINT "Conductor_viajeId_fkey";

-- DropTable
DROP TABLE "Conductor";
