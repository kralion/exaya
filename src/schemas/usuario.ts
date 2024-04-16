import { z } from "zod";

const usuarioSchema = z.object({
  username: z.string(),
  nombres: z.string(),
  apellidos: z.string(),
  password: z.string(),
  usuarioDni: z.string().min(8).max(8),
  rol: z.enum(["USER", "ADMIN", "GUEST"]),
  sedeDelegacion: z.string(),
  foto: z.string().optional(),
  telefono: z.string().min(9).max(9),
});

export default usuarioSchema;
