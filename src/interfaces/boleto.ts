export interface IBoleto {
  id: number;
  created_at: Date;
  id_viaje: number;
  id_cliente: number;
  numero_asiento: number;
  estado: string;
  precio: number;
}
