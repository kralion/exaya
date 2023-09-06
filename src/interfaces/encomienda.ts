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
  password: string;
  descripcion: string;
  claveRastreo?: string;
  comprobante: "Boleto" | "Factura";
  estado: "Pagado" | "Por pagar";
}
