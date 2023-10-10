import type { IBoleto } from "./boleto";
import type { IEncomienda } from "./encomienda";
import type { IRuta } from "./ruta";

export interface IViaje {
  id: string;
  fechaSalida: string;
  fechaLlegada: string;
  boletos: IBoleto[];
  encomiendas: IEncomienda[];
  ruta: IRuta;
}
