import { z } from "zod";

const encomiendaSchema = z.object({
  remitenteDni: z.string(),
  destinatarioDni: z.string(),
  precio: z.number().nonnegative().min(1),
  viajeId: z.string(),
  fechaEnvio: z.date(),
  factura: z.boolean().default(false),
  pagado: z.boolean().default(false),
  descripcion: z.string(),
  codigo: z.string(),
});

export default encomiendaSchema;
