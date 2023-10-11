import type { IBoleto } from "./boleto";
import type { IBus } from "./bus";
import type { IEncomienda } from "./encomienda";
import type { IRuta } from "./ruta";

export interface IViaje {
  id: string;
  estado: "venta" | "lleno";
  activo: boolean;
  tarifas: number[];
  fechaSalida: string;
  fechaLlegada: string;
  boletos: IBoleto[];
  encomiendas: IEncomienda[];
  bus: IBus;
  ruta: IRuta;
}
