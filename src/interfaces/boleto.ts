import type { ICliente } from "./cliente";
import type { IViaje } from "./viaje";

export interface IBoleto {
  id: string;
  clienteId: string;
  viajeId: string;
  equipajes: string;
  asiento: number;
  codigo: string;
  telefonoCliente: string;
  precio: number;
  equipaje: string;
}
