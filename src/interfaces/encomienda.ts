export interface IEncomienda {
  key: string;
  nombreRemitente: string;
  nombreReceptor: string;
  telefonoRemitente: number;
  telefonoReceptor: number;
  destino: string;
  precio: number;
  fechaEnvio: string;
  contenido: string;
  descripcion: string;
  claveRastreo?: string;
  comprobante: "Boleto" | "Factura";
  estado: "Pagado" | "Por pagar";
}

export interface EncomiendasContextProps {
  encomiendasRegistradas: IEncomienda[];
  handleAddEncomienda: (encomienda: IEncomienda) => void;
  handleDeleteEncomienda: (key: string) => void;
}
