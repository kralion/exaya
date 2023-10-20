import { z } from "zod";

const rutaSchema = z.object({
  id: z.string(),
  ciudadOrigen: z.string(),
  ciudadDestino: z.string(),
  terminalDestino: z.string(),
  terminalOrigen: z.string(),
  duracionEstimada: z.number().nonnegative().min(1),
});

export default rutaSchema;
