export interface IUsuario {
  id: number;
  nombres: string;
  apellidos: string;
  email: string;
  password: string;
  telefono: string;
  dni: string;
  sede: "Lima" | "Ayacucho" | "Huancayo" | "Selva Central";
  rol: "usuario" | "administrador" | "supervisor";
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}
