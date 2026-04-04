-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN "supabaseUserId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_supabaseUserId_key" ON "Usuario"("supabaseUserId");
