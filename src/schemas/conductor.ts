import { z } from "zod";

const conductorSchema = z.object({
  id: z.string(),
  foto: z.string(),
  licencia: z.string(),
  tipoLicencia: z.string(),
  estadoDocumentario: z.string(),
  disponibilidad: z.boolean(),
});

export default conductorSchema;
