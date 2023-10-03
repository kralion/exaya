-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Persona" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "Persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pasajero" (
    "id" SERIAL NOT NULL,
    "personaId" INTEGER NOT NULL,

    CONSTRAINT "Pasajero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conductor" (
    "id" SERIAL NOT NULL,
    "personaId" INTEGER NOT NULL,

    CONSTRAINT "Conductor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boleto" (
    "id" SERIAL NOT NULL,
    "pasajeroId" INTEGER NOT NULL,
    "viajeId" INTEGER NOT NULL,
    "asiento" TEXT NOT NULL,
    "fechaCompra" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Boleto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Viaje" (
    "id" SERIAL NOT NULL,
    "origen" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "fechaSalida" TIMESTAMP(3) NOT NULL,
    "fechaLlegada" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Viaje_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Encomienda" (
    "id" SERIAL NOT NULL,
    "remitenteId" INTEGER NOT NULL,
    "destinatarioId" INTEGER NOT NULL,
    "contenido" TEXT NOT NULL,
    "viajeId" INTEGER,

    CONSTRAINT "Encomienda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manifiesto" (
    "id" SERIAL NOT NULL,
    "viajeId" INTEGER NOT NULL,
    "pasajeros" TEXT NOT NULL,
    "encomiendas" TEXT NOT NULL,

    CONSTRAINT "Manifiesto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bus" (
    "id" SERIAL NOT NULL,
    "modelo" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "asientos" INTEGER NOT NULL,

    CONSTRAINT "Bus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ConductorToViaje" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Pasajero_personaId_key" ON "Pasajero"("personaId");

-- CreateIndex
CREATE UNIQUE INDEX "Conductor_personaId_key" ON "Conductor"("personaId");

-- CreateIndex
CREATE UNIQUE INDEX "Boleto_pasajeroId_key" ON "Boleto"("pasajeroId");

-- CreateIndex
CREATE UNIQUE INDEX "Boleto_viajeId_key" ON "Boleto"("viajeId");

-- CreateIndex
CREATE UNIQUE INDEX "Manifiesto_viajeId_key" ON "Manifiesto"("viajeId");

-- CreateIndex
CREATE UNIQUE INDEX "Bus_placa_key" ON "Bus"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "_ConductorToViaje_AB_unique" ON "_ConductorToViaje"("A", "B");

-- CreateIndex
CREATE INDEX "_ConductorToViaje_B_index" ON "_ConductorToViaje"("B");

-- AddForeignKey
ALTER TABLE "Pasajero" ADD CONSTRAINT "Pasajero_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conductor" ADD CONSTRAINT "Conductor_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boleto" ADD CONSTRAINT "Boleto_pasajeroId_fkey" FOREIGN KEY ("pasajeroId") REFERENCES "Pasajero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boleto" ADD CONSTRAINT "Boleto_viajeId_fkey" FOREIGN KEY ("viajeId") REFERENCES "Viaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encomienda" ADD CONSTRAINT "Encomienda_remitenteId_fkey" FOREIGN KEY ("remitenteId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encomienda" ADD CONSTRAINT "Encomienda_destinatarioId_fkey" FOREIGN KEY ("destinatarioId") REFERENCES "Persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encomienda" ADD CONSTRAINT "Encomienda_viajeId_fkey" FOREIGN KEY ("viajeId") REFERENCES "Viaje"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Manifiesto" ADD CONSTRAINT "Manifiesto_viajeId_fkey" FOREIGN KEY ("viajeId") REFERENCES "Viaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConductorToViaje" ADD CONSTRAINT "_ConductorToViaje_A_fkey" FOREIGN KEY ("A") REFERENCES "Conductor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConductorToViaje" ADD CONSTRAINT "_ConductorToViaje_B_fkey" FOREIGN KEY ("B") REFERENCES "Viaje"("id") ON DELETE CASCADE ON UPDATE CASCADE;
