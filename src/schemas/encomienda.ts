import { z } from "zod";

const encomiendaSchema = z.object({
  remitenteDni: z.string(),
  destinatarioDni: z.string(),
  destinatarioNombres: z.string(),
  destinatarioApellidos: z.string(),
  destinatarioTelefono: z.string(),
  ciudadOrigen: z.string(),
  ciudadDestino: z.string(),
  remitenteNombres: z.string(),
  remitenteApellidos: z.string(),
  remitenteTelefono: z.string(),
  precio: z.number().nonnegative().min(1),
  viajeId: z.string(),
  empresa: z.string().optional(),
  ruc: z.string().optional(),
  fechaEnvio: z.date(),
  factura: z.boolean(),
  pagado: z.boolean(),
  descripcion: z.string(),
  codigo: z.string(),
});

export default encomiendaSchema;
