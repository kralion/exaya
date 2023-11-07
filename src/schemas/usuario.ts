import { z } from "zod";
import clienteSchema from "./cliente";

const usuarioSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
  cliente: clienteSchema,
  rol: z.string(),
  sedeDelegacion: z.string(),
  foto: z.string(),
});

export default usuarioSchema;
