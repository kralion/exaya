-- CreateEnum
CREATE TYPE "BoletoEstado" AS ENUM ('DISPONIBLE', 'RESERVADO', 'PAGADO');

-- CreateEnum
CREATE TYPE "SerieFactura" AS ENUM ('F001', 'F002', 'F003', 'F004');

-- CreateEnum
CREATE TYPE "SerieBoleto" AS ENUM ('B001', 'B002', 'B003', 'B004');

-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('ADMIN', 'USER', 'GUEST');

-- CreateEnum
CREATE TYPE "ViajeEstado" AS ENUM ('DISPONIBLE', 'CANCELADO', 'LLENO');

-- CreateTable
CREATE TABLE "Sede" (
    "id" TEXT NOT NULL,
    "agenciaUbicacion" TEXT NOT NULL,
    "agencia" TEXT NOT NULL,
    "serieBoleto" "SerieBoleto" NOT NULL,
    "serieFactura" "SerieFactura" NOT NULL,
    "contadorBoletos" INTEGER NOT NULL,
    "contadorFacturas" INTEGER NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Sede_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boleto" (
    "asiento" INTEGER NOT NULL,
    "metodoPago" TEXT NOT NULL,
    "pasajeroDni" TEXT NOT NULL,
    "estado" "BoletoEstado" NOT NULL DEFAULT 'DISPONIBLE',
    "pasajeroNombres" TEXT NOT NULL,
    "pasajeroApellidos" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "destino" TEXT NOT NULL DEFAULT 'Sin Destino',
    "fechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "precio" INTEGER NOT NULL,
    "viajeId" TEXT NOT NULL,

    CONSTRAINT "Boleto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bus" (
    "id" TEXT NOT NULL,
    "asientos" INTEGER NOT NULL,
    "fechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "foto" TEXT NOT NULL DEFAULT 'https://res.cloudinary.com/diqe1byxy/image/upload/v1713285529/exaya/bus-placeholder_o1yclo.avif',
    "modelo" TEXT NOT NULL DEFAULT 'Scania Touring',
    "placa" TEXT NOT NULL,

    CONSTRAINT "Bus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conductor" (
    "claseLicencia" TEXT NOT NULL,
    "conductorDni" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "disponibilidad" BOOLEAN NOT NULL DEFAULT true,
    "foto" TEXT NOT NULL DEFAULT 'https://res.cloudinary.com/diqe1byxy/image/upload/v1713286238/exaya/driver-placeholder_lizdxg.avif',
    "id" TEXT NOT NULL,
    "numeroLicencia" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "viajeId" TEXT,

    CONSTRAINT "Conductor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Encomienda" (
    "destino" TEXT NOT NULL,
    "numero" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "codigoRastreo" TEXT NOT NULL DEFAULT 'Sin Codigo',
    "destinatarioDni" TEXT NOT NULL,
    "destinatarioNombres" TEXT NOT NULL,
    "destinatarioApellidos" TEXT NOT NULL,
    "remitenteNombres" TEXT NOT NULL,
    "remitenteDni" TEXT NOT NULL,
    "remitenteApellidos" TEXT NOT NULL,
    "factura" BOOLEAN NOT NULL DEFAULT false,
    "razonSocial" TEXT,
    "ruc" TEXT,
    "fechaEnvio" TIMESTAMP(3) NOT NULL,
    "fechaRecepcion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "pagado" BOOLEAN NOT NULL DEFAULT false,
    "precio" INTEGER NOT NULL,
    "viajeId" TEXT NOT NULL,

    CONSTRAINT "Encomienda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ruta" (
    "ciudadDestino" TEXT NOT NULL,
    "ciudadOrigen" TEXT NOT NULL,
    "duracionEstimada" INTEGER NOT NULL,
    "id" TEXT NOT NULL,
    "terminalDestino" TEXT NOT NULL,
    "terminalOrigen" TEXT NOT NULL,

    CONSTRAINT "Ruta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "username" TEXT NOT NULL,
    "sedeId" TEXT NOT NULL,
    "usuarioDni" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "foto" TEXT NOT NULL DEFAULT 'https://res.cloudinary.com/diqe1byxy/image/upload/v1713285660/exaya/user-placeholder_d7njq8.png',
    "telefono" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "rol" "Rol" NOT NULL DEFAULT 'USER',
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Viaje" (
    "busId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "estado" "ViajeEstado" NOT NULL DEFAULT 'DISPONIBLE',
    "salida" TIMESTAMP(3) NOT NULL,
    "id" TEXT NOT NULL,
    "rutaId" TEXT NOT NULL,
    "tarifas" INTEGER[],
    "tarifaGeneral" INTEGER NOT NULL,

    CONSTRAINT "Viaje_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Boleto_codigo_key" ON "Boleto"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Bus_placa_key" ON "Bus"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_usuarioDni_key" ON "Usuario"("usuarioDni");

-- AddForeignKey
ALTER TABLE "Boleto" ADD CONSTRAINT "Boleto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boleto" ADD CONSTRAINT "Boleto_viajeId_fkey" FOREIGN KEY ("viajeId") REFERENCES "Viaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conductor" ADD CONSTRAINT "Conductor_viajeId_fkey" FOREIGN KEY ("viajeId") REFERENCES "Viaje"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encomienda" ADD CONSTRAINT "Encomienda_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encomienda" ADD CONSTRAINT "Encomienda_viajeId_fkey" FOREIGN KEY ("viajeId") REFERENCES "Viaje"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_sedeId_fkey" FOREIGN KEY ("sedeId") REFERENCES "Sede"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viaje" ADD CONSTRAINT "Viaje_busId_fkey" FOREIGN KEY ("busId") REFERENCES "Bus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viaje" ADD CONSTRAINT "Viaje_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viaje" ADD CONSTRAINT "Viaje_rutaId_fkey" FOREIGN KEY ("rutaId") REFERENCES "Ruta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
