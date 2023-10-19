import { z } from "zod";

const usuarioSchema = z.object({
  id: z.number(),
  dni: z.string().length(8),
  nombres: z.string(),
  apellidos: z.string(),
  password: z.string(),
  telefono: z.string().length(9),
  email: z.string().email(),
  rol: z.string(),
  sedeDelegacion: z.string(),
  foto: z.string(),
});

export default usuarioSchema;
