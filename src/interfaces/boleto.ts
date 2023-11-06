import type { ICliente } from "./cliente";
import type { IViaje } from "./viaje";

export interface IBoleto {
  id: string;
  cliente: ICliente;
  viaje: IViaje;
  asiento: number;
  telefonoCliente: number;
  precio: number;
  equipaje: string;
}
