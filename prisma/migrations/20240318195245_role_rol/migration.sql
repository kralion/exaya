/*
  Warnings:

  - You are about to drop the column `role` on the `Usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "role",
ADD COLUMN     "rol" "Role" NOT NULL DEFAULT 'USER';
