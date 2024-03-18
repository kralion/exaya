import { z } from "zod";
import viajeSchema from "./viaje";

const encomiendaSchema = z.object({
  id: z.string(),
  remitenteDni: z.string(),
  destinatarioDni: z.string(),
  viaje: viajeSchema,
  precio: z.number().nonnegative().min(1),
  fechaEnvio: z.date(),
  createdAt: z.date(),
  comprobante: z.string(),
  pagado: z.boolean(),
  descripcion: z.string(),
  codigo: z.string(),
});

export default encomiendaSchema;
