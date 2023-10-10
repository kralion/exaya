import type { IConductor } from "./conductor";
import type { IPersona } from "./persona";
import type { IUsuario } from "./usuario";

export interface ICliente extends IPersona {
  id: string;
  conductor?: IConductor;
  usuario?: IUsuario;
}
