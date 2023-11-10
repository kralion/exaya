import type { ICliente } from "./cliente";

export interface IConductor {
  id: string;
  foto?: string;
  cliente: ICliente;
  numeroLicencia: string;
  claseLicencia: string;
  telefono: string;
  estadoDocumentario: string;
  disponibilidad: boolean;
}

export interface ConductorContextProps {
  conductoresRegistrados: IConductor[];
  handleAddConductor: (conductor: IConductor) => void;
  handleDeleteConductor: (id: number) => void;
  handleUpdateConductor: (conductor: IConductor) => void;
}
