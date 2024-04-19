/*
  Warnings:

  - The `codigo` column on the `Encomienda` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "Encomienda_codigo_key";

-- AlterTable
ALTER TABLE "Encomienda" ADD COLUMN     "serie" "Serie" NOT NULL DEFAULT 'AG001',
DROP COLUMN "codigo",
ADD COLUMN     "codigo" SERIAL NOT NULL;
