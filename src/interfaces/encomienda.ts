export interface IEncomienda {
  id: number;
  id_remitente: number;
  id_receptor: number;
  destino: string;
  precio: number;
  fecha_envio: string;
  contenido: string;
  descripcion: string;
  clave_envio?: string | null;
}
