export interface IUsuario {
  id: string;
  createdAt: string;
  usuario: string;
  password: string;
  nombres: string;
  apellidos: string;
  usuarioDni: string;
  sedeDelegacion: "Lima" | "Ayacucho" | "Huancayo" | "Selva Central";
  rol: "USER" | "ADMIN";
}
