/*
  Warnings:

  - You are about to drop the column `destino` on the `Viaje` table. All the data in the column will be lost.
  - You are about to drop the column `origen` on the `Viaje` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Viaje" DROP COLUMN "destino",
DROP COLUMN "origen",
ADD COLUMN     "rutaId" INTEGER;

-- CreateTable
CREATE TABLE "Ruta" (
    "id" SERIAL NOT NULL,
    "ciudadOrigen" TEXT NOT NULL,
    "ciudadDestino" TEXT NOT NULL,
    "duracionEstimada" INTEGER,
    "tarifas" INTEGER[],

    CONSTRAINT "Ruta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Viaje" ADD CONSTRAINT "Viaje_rutaId_fkey" FOREIGN KEY ("rutaId") REFERENCES "Ruta"("id") ON DELETE SET NULL ON UPDATE CASCADE;
