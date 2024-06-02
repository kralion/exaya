import { z } from "zod";
const boletoSchema = z.object({
  id: z.string().optional(),
  usuarioId: z.string(),
  destino: z.string(),
  metodoPago: z.string(),
  asiento: z.number().nonnegative().min(1),
  estado: z.enum(["DISPONIBLE", "PAGADO", "RESERVADO"]),
  pasajeroDni: z.string().min(8).max(8),
  serie: z.enum([
    "AG001",
    "AG002",
    "AG003",
    "AG004",
    "AG005",
    "AG006",
    "AG007",
    "AG008",
    "AG009",
    "AG010",
  ]),
  pasajeroNombres: z.string().default("No Registrado"),
  pasajeroApellidos: z.string(),
  viajeId: z.string(),
  precio: z.number().nonnegative().min(1),
});

export default boletoSchema;
