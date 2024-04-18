/*
  Warnings:

  - Added the required column `ciudadDestino` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ciudadOrigen` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinatarioApellidos` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinatarioNombres` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinatarioTelefono` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remitenteApellidos` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remitenteNombres` to the `Encomienda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remitenteTelefono` to the `Encomienda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Encomienda" ADD COLUMN     "ciudadDestino" TEXT NOT NULL,
ADD COLUMN     "ciudadOrigen" TEXT NOT NULL,
ADD COLUMN     "destinatarioApellidos" TEXT NOT NULL,
ADD COLUMN     "destinatarioNombres" TEXT NOT NULL,
ADD COLUMN     "destinatarioTelefono" TEXT NOT NULL,
ADD COLUMN     "remitenteApellidos" TEXT NOT NULL,
ADD COLUMN     "remitenteNombres" TEXT NOT NULL,
ADD COLUMN     "remitenteTelefono" TEXT NOT NULL;
