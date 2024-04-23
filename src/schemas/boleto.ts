import { z } from "zod";
const boletoSchema = z.object({
  telefonoCliente: z.string(),
  usuarioId: z.string(),
  asiento: z.number().nonnegative().min(1),
  estado: z.enum(["DISPONIBLE", "PAGADO", "RESERVADO"]).default("DISPONIBLE"),
  pasajeroDni: z.string(),
  serie: z
    .enum([
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
    ])
    .default("AG001"),
  pasajeroNombres: z.string().default("No Registrado"),
  pasajeroApellidos: z.string(),
  equipaje: z.string(),
  viajeId: z.string(),
  precio: z.number().nonnegative().min(1),
});

export default boletoSchema;
