export type TConductor = {
  id: string;
  dni: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  numeroLicencia: string;
  claseLicencia: string;
  foto: string;
};
export type TBus = {
  id: string;
  placa: string;
  modelo: string;
  marca: string;
  capacidad: number;
  createdAt: Date;
  updatedAt: Date;
};
export type TRuta = {
  id: string;
  origen: string;
  destino: string;
  distancia: number;
  duracion: number;
  createdAt: Date;
  updatedAt: Date;
};
export type TViaje = {
  id: string;
  fecha: Date;
  horaSalida: string;
  horaLlegada: string;
  busId: string;
  rutaId: string;
  conductorId: string;
  createdAt: Date;
  updatedAt: Date;
};
export type TCliente = {
  id: string;
  dni: string;
  nombres: string;
  apellidos: string;
  telefono: string;
  createdAt: Date;
  updatedAt: Date;
};
export type TBoleto = {
  id: string;
  asiento: number;
  precio: number;
  viajeId: string;
  clienteId: string;
  createdAt: Date;
  updatedAt: Date;
};
export type TEncomienda = {
  id: string;
  codigo: string;
  descripcion: string;
  peso: number;
  viajeId: string;
  clienteId: string;
  createdAt: Date;
  updatedAt: Date;
};
