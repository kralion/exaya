export interface IConductor {
  id: string;
  conductorDni: string;
  claseLicencia: string;
  disponibilidad: boolean;
  foto?: string;
  numeroLicencia: string;
  telefono: string;
  viajeId?: string;
}
export interface ConductorContextProps {
  conductoresRegistrados: IConductor[];
  handleAddConductor: (conductor: IConductor) => void;
  handleDeleteConductor: (id: number) => void;
  handleUpdateConductor: (conductor: IConductor) => void;
}
