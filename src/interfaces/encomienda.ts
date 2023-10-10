import type { ICliente } from "./cliente";
import type { IViaje } from "./viaje";

export interface IEncomienda {
  id: string;
  remitente: ICliente;
  destinatario: ICliente;
  viaje: IViaje;
  guia: string;
  precio: number;
  contenido: string;
  descripcion: string;
  comprobante: "Boleto" | "Factura";
  estado: boolean;
}

export interface EncomiendasContextProps {
  encomiendasRegistradas: IEncomienda[];
  handleAddEncomienda: (encomienda: IEncomienda) => void;
  handleDeleteEncomienda: (key: string) => void;
}
