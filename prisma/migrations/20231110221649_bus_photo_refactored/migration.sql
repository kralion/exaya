-- CreateTable
CREATE TABLE "Bus" (
    "id" TEXT NOT NULL,
    "modelo" TEXT DEFAULT 'Scania Touring',
    "foto" TEXT[],
    "placa" TEXT NOT NULL,
    "asientos" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bus_placa_key" ON "Bus"("placa");

-- AddForeignKey
ALTER TABLE "Viaje" ADD CONSTRAINT "Viaje_busId_fkey" FOREIGN KEY ("busId") REFERENCES "Bus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
