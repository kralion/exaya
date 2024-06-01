import { z } from "zod";

const conductorSchema = z.object({
  foto: z.string().optional(),
  conductorDni: z.string().min(8).max(8),
  numeroLicencia: z.string(),
  nombres: z.string(),
  apellidos: z.string(),
  viajeId: z.string().optional(),
  claseLicencia: z.string(),
  telefono: z.string().min(9).max(9),
  disponibilidad: z.boolean(),
});

export default conductorSchema;
