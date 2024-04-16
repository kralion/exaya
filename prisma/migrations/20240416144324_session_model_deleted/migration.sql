/*
  Warnings:

  - You are about to drop the column `reservado` on the `Boleto` table. All the data in the column will be lost.
  - The `rol` column on the `Usuario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('ADMIN', 'USER', 'GUEST');

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "Boleto" DROP COLUMN "reservado";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "rol",
ADD COLUMN     "rol" "Rol" NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "Session";

-- DropEnum
DROP TYPE "Role";
