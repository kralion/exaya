import type { Rol } from "@/types/auth";

export type AppSessionUser = {
  id: string;
  nombres: string;
  apellidos: string;
  rol: Rol;
  sedeId: string;
  foto: string;
};

/** Same shape previously carried by NextAuth JWT/session. */
export type AppSession = { user: AppSessionUser } | null;
