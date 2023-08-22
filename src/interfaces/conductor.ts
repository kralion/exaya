import { Cliente } from "./cliente";

export interface Conductor extends Cliente {
  licencia_conducir: string;
  disponibilidad: boolean;
}
