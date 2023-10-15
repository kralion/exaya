import { z } from "zod";

const rutaSchema = z.object({
  id: z.number(),
  ciudadOrigen: z.string(),
  ciudadDestino: z.string(),
  duracionEstimada: z.number().nonnegative().min(1),
});

export default rutaSchema;
