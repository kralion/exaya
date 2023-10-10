import type { ICliente } from "./cliente";
import type { IEncomienda } from "./encomienda";
import type { IViaje } from "./viaje";

export interface IManifiesto {
  id: string;
  viaje: IViaje;
  pasajeros: ICliente[];
  encomiendas: IEncomienda[];
  conductores: ICliente[];
}
