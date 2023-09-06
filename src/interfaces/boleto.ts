export interface IBoleto {
  id: number;
  created_at: string;
  id_viaje: string;
  id_cliente: string;
  numero_asiento: number;
  estado: "Pagado" | "Reservado";
  precio: number;
}
