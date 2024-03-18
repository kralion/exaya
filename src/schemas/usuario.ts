import { z } from "zod";

const usuarioSchema = z.object({
  id: z.string(),
  username: z.string(),
  nombres: z.string(),
  apellidos: z.string(),
  password: z.string(),
  usuarioDni: z.string(),
  rol: z.string().default("USER"),
  sedeDelegacion: z.string(),
  foto: z.string().optional(),
});

export default usuarioSchema;
