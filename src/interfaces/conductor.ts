export interface IConductor {
  id: number;
  created_at: string;
  nombres: string;
  apellidos: string;
  dni: string;
  telefono: string;
  licencia_conducir: string;
  disponibilidad: boolean;
  foto_perfil: string;
  estado_documentario: "Documentos Actualizados" | "En Trámite" | "Rechazado";
  nivel: 0 | 1 | 2;
}
