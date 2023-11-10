import { z } from "zod";
import clienteSchema from "./cliente";
import viajeSchema from "./viaje";

const conductorSchema = z.object({
  id: z.string(),
  foto: z.string(),
  cliente: clienteSchema,
  viaje: viajeSchema,
  numeroLicencia: z.string(),
  claseLicencia: z.string(),
  telefono: z.string(),
  estadoDocumentario: z.string(),
  disponibilidad: z.boolean(),
});

export default conductorSchema;
