import { z } from "zod";

const encomiendaSchema = z.object({
  id: z.number(),
  dniRemitente: z.string().length(8),
  dniDestinatario: z.string().length(8),
  origen: z.string(),
  destino: z.string(),
  precio: z.number().nonnegative().min(1),
  fechaEnvio: z.date(),
  comprobante: z.string(),
  estado: z.boolean(),
  descripcion: z.string(),
  viaje: z.string(),
});

export default encomiendaSchema;
