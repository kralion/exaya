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
  foto_bus?: string;
  estado_documentario: string;
  nivel: number;
}

export interface ConductorContextProps {
  conductoresRegistrados: IConductor[];
  handleAddConductor: (conductor: IConductor) => void;
  handleDeleteConductor: (id: number) => void;
  handleUpdateConductor: (conductor: IConductor) => void;
}
