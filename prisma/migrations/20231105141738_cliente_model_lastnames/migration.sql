/*
  Warnings:

  - You are about to drop the column `apellidos` on the `Cliente` table. All the data in the column will be lost.
  - Added the required column `apellidoMaterno` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apellidoPaterno` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "apellidos",
ADD COLUMN     "apellidoMaterno" TEXT NOT NULL,
ADD COLUMN     "apellidoPaterno" TEXT NOT NULL;
