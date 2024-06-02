import { z } from "zod";

const viajeSchema = z.object({
  estado: z.enum(["DISPONIBLE", "CANCELADO", "LLENO"]),
  usuarioId: z.string(),
  busId: z.string(),
  rutaId: z.string(),
  conductores: z.array(z.string()),
  salida: z.date(),
  tarifaGeneral: z.number().int().nonnegative(),
  tarifas: z.array(z.number().int().nonnegative()),
});

export default viajeSchema;
