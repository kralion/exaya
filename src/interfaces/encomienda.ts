import type { ICliente } from "./cliente";
import type { IViaje } from "./viaje";

export interface IEncomienda {
  id: string;
  remitente: ICliente;
  destinatario: ICliente;
  createdAt: Date;
  fechaEnvio: Date;
  comprobante: string;
  pagado: boolean;
  descripcion: string;
  viaje: IViaje;
  codigo: string;
  precioEnvio: number;
}

export interface EncomiendasContextProps {
  encomiendas: IEncomienda[];
  handleDeleteEncomienda: (id: string) => void;
}
