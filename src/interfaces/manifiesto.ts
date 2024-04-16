import type { IConductor } from "./conductor";
import type { IEncomienda } from "./encomienda";
import type { IViaje } from "./viaje";

export interface IManifiesto {
  id: string;
  viaje: IViaje;
  pasajeros: any[];
  encomiendas: IEncomienda[];
  conductores: IConductor[];
}
