import type { Rol } from "./auth";

export interface SessionUser {
  id: string;
  nombres: string;
  apellidos: string;
  rol: Rol;
  sedeId: string;
  foto: string;
  name?: string;
  email?: string;
  image?: string;
}

export interface Session {
  user: SessionUser;
  expires: string;
}
