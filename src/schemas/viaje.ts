import { z } from "zod";

const viajeSchema = z.object({
  id: z.string().optional(),
  estado: z.enum(["DISPONIBLE", "CANCELADO", "LLENO"]),
  busId: z.string(),
  rutaId: z.string(),
  salida: z.date(),
  tarifas: z.array(z.number().int().nonnegative()),
});

export default viajeSchema;
