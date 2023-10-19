import { z } from "zod";

const personasSchema = z.object({
  id: z.number(),
  dni: z.string().length(8),
  //TODO: Changes those below to plural
  nombre: z.string(),
  apellido: z.string(),
  telefono: z.string().length(9),
});

export default personasSchema;
