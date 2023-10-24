-- CreateTable
CREATE TABLE "Equipaje" (
    "id" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "boletoId" TEXT NOT NULL,

    CONSTRAINT "Equipaje_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Equipaje" ADD CONSTRAINT "Equipaje_boletoId_fkey" FOREIGN KEY ("boletoId") REFERENCES "Boleto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
