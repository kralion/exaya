-- AlterTable
ALTER TABLE "Encomienda" ADD COLUMN     "codigoRastreo" TEXT NOT NULL DEFAULT 'Sin Codigo',
ADD COLUMN     "ubicacion" TEXT NOT NULL DEFAULT 'Origen';
