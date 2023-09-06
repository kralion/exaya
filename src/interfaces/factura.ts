export interface IFactura {
  id: number;
  fecha_emision: string;
  tipo_cliente: "Persona" | "Empresa";
  nombre_cliente: string;
  ruc_cliente?: string; // Solo si el tipo de cliente es 'Empresa'
  direccion_cliente: string;
  productos: {
    nombre: string;
    cantidad: number;
    precio_unitario: number;
  }[];
  total: number;
}
