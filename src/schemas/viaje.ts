import { z } from "zod";

const viajeSchema = z.object({
  id: z.number(),
  origen: z.string(),
  destino: z.string(),
  fechaSalida: z.date(),
  tarifas: z.array(z.number().nonnegative().min(1)),
  estado: z.boolean(),
  horaSalida: z.string(),
  bus: z.string(),
});

export default viajeSchema;
