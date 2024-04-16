import type { IViaje } from "./viaje";

export interface IEncomienda {
  id: string;
  remitenteDni: string;
  destinatarioDni: string;
  createdAt: Date;
  fechaEnvio: Date;
  comprobante: string;
  pagado: boolean;
  descripcion: string;
  viaje: IViaje;
  codigo: string;
  precioEnvio: number;
}
