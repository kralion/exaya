import type { ICliente } from "./cliente";
import type { IViaje } from "./viaje";

export interface IBoleto {
  id: string;
  createdAt: Date;
  cliente: ICliente;
  viaje: IViaje;
  asiento: number;
  reservado?: boolean;
  precio: number;
}
