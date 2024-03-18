import { z } from "zod";
import viajeSchema from "./viaje";

const conductorSchema = z.object({
  id: z.string(),
  foto: z.string(),
  conductorDni: z.string(),
  viaje: viajeSchema,
  numeroLicencia: z.string(),
  claseLicencia: z.string(),
  telefono: z.string(),
  estadoDocumentario: z.string(),
  disponibilidad: z.boolean(),
});

export default conductorSchema;
