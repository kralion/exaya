export interface IConductor {
  id: number; //! Cambia esto a un tipo de dato adecuado UUID por ejemplo, porque el id de la base de datos es un no es UUID
  created_at: string; // Cambia esto a un tipo de fecha adecuado si estás utilizando una biblioteca de manejo de fechas en TypeScript
  nombres: string;
  apellidos: string;
  dni: string;
  telefono: string;
  licencia_conducir: string;
  disponibilidad: boolean;
  foto_perfil: string;
  estado_documentario: "Documentos Actulizados" | "En Trámite" | "Rechazado";
}
