/*
  Warnings:

  - You are about to drop the column `destinatarioTelefono` on the `Encomienda` table. All the data in the column will be lost.
  - You are about to drop the column `remitenteTelefono` on the `Encomienda` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Encomienda" DROP COLUMN "destinatarioTelefono",
DROP COLUMN "remitenteTelefono";
