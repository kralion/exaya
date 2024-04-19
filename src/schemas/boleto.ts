import { z } from "zod";

//THIS IS THE PATTERN FOR THE CODE
// "S1-00001";
// "S2-12345";
// "S3-67890";
// "S4-54321";
// "S9-99999";

const boletoSchema = z.object({
  telefonoCliente: z.string(),
  asiento: z.number().nonnegative().min(1),
  pasajeroDni: z.string(),
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
  pasajeroNombres: z.string(),
  pasajeroApellidos: z.string(),
  codigo: z.number(),
  equipaje: z.string(),
  viajeId: z.string(),
  precio: z.number().nonnegative().min(1),
});

export default boletoSchema;
