import { z } from "zod";

const encomiendaSchema = z.object({
  remitenteDni: z.string(),
  usuarioId: z.string(),
  destinatarioDni: z.string(),
  destinatarioNombres: z.string(),
  destinatarioApellidos: z.string(),
  destinatarioTelefono: z.string(),
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
  serie: z.enum([
    "E-AG001",
    "E-AG002",
    "E-AG003",
    "E-AG004",
    "E-AG005",
    "E-AG006",
    "E-AG007",
    "E-AG008",
    "E-AG009",
    "E-AG010",
  ]),
  codigo: z.number(),
});

export default encomiendaSchema;
