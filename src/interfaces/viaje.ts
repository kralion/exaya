import type { IBoleto } from "./boleto";
import type { IBus } from "./bus";
import type { IEncomienda } from "./encomienda";
import type { IRuta } from "./ruta";
import { z } from "zod";

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

export const viajeValuesSchema = z.object({
  fechaSalida: z.date(),
  tarifas: z.array(z.number().nonnegative().min(1)),
  estado: z.string(),
  horaSalida: z.string(),
  activo: z.boolean(),
  busId: z.string(),
  rutaId: z.string(),
});
