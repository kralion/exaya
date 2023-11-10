-- CreateTable
CREATE TABLE "Conductor" (
    "id" TEXT NOT NULL,
    "foto" TEXT,
    "clienteId" TEXT NOT NULL,
    "viajeId" TEXT,
    "numeroLicencia" TEXT NOT NULL,
    "claseLicencia" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "estadoDocumentario" TEXT NOT NULL,
    "disponibilidad" BOOLEAN NOT NULL,

    CONSTRAINT "Conductor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Conductor_clienteId_key" ON "Conductor"("clienteId");

-- AddForeignKey
ALTER TABLE "Conductor" ADD CONSTRAINT "Conductor_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conductor" ADD CONSTRAINT "Conductor_viajeId_fkey" FOREIGN KEY ("viajeId") REFERENCES "Viaje"("id") ON DELETE SET NULL ON UPDATE CASCADE;
