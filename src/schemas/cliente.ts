import { z } from "zod";

const clienteSchema = z.object({
  id: z.string(),
  dni: z.string().length(8),
  nombres: z.string(),
  apellidoMaterno: z.string(),
  apellidoPaterno: z.string(),
});

export default clienteSchema;
