import type { ICliente } from "./cliente";

export interface IConductor extends ICliente {
  licencia_conducir: string;
  disponibilidad: boolean;
}
