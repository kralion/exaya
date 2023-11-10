/*
  Warnings:

  - The `foto` column on the `Bus` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Bus" DROP COLUMN "foto",
ADD COLUMN     "foto" TEXT[];
