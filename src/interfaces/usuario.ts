import type { ICliente } from "./cliente";

export interface IUsuario {
  id: string;
  createdAt: string;
  usuario: string;
  password: string;
  nombres: string;
  apellidoMaterno: string;
  apellidoPaterno: string;
  dni: string;
  cliente: ICliente;
  sedeDelegacion: "Lima" | "Ayacucho" | "Huancayo" | "Selva Central";
  rol: "usuario" | "administrador" | "supervisor";
}
