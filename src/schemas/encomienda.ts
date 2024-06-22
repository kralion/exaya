import { z } from "zod";

const encomiendaSchema = z.object({
  remitenteDni: z.string(),
  usuarioId: z.string(),
  serie: z.enum(["B001", "F001"]),
  destino: z.string(),
  destinatarioDni: z.string(),
  codigoRastreo: z.string(),
  destinatarioNombres: z.string(),
  destinatarioApellidos: z.string(),
  remitenteNombres: z.string(),
  remitenteApellidos: z.string(),
  precio: z.number().nonnegative().min(1),
  viajeId: z.string(),
  razonSocial: z.string().optional(),
  ruc: z.string().optional(),
  fechaEnvio: z.date(),
  factura: z.boolean(),
  pagado: z.boolean(),
  descripcion: z.string(),
});

export default encomiendaSchema;
