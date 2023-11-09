/*
  Warnings:

  - You are about to drop the column `licencia` on the `Conductor` table. All the data in the column will be lost.
  - You are about to drop the column `tipoLicencia` on the `Conductor` table. All the data in the column will be lost.
  - Added the required column `claseLicencia` to the `Conductor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numerolicencia` to the `Conductor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefono` to the `Conductor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Conductor" DROP COLUMN "licencia",
DROP COLUMN "tipoLicencia",
ADD COLUMN     "claseLicencia" TEXT NOT NULL,
ADD COLUMN     "numerolicencia" TEXT NOT NULL,
ADD COLUMN     "telefono" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "telefono" TEXT;
