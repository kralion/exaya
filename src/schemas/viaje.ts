import { z } from "zod";

const viajeSchema = z.object({
  id: z.string(),
  activo: z.boolean(),
  busId: z.string(),
  estado: z.string(),
  salida: z.date(),
  rutaId: z.string(),
  tarifas: z.array(z.number().int().nonnegative()),
});

export default viajeSchema;
