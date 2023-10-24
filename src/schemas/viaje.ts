import { z } from "zod";
import { rutaSchema, busSchema } from "@/schemas";

const viajeSchema = z.object({
  id: z.string(),
  fechaSalida: z.date(),
  tarifas: z.array(z.number().nonnegative().min(1)),
  estado: z.string(),
  horaSalida: z.string(),
  activo: z.boolean(),
  bus: busSchema,
  ruta: rutaSchema,
});

export default viajeSchema;
