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
  pasajeroNombres: z.string(),
  pasajeroApellidos: z.string(),
  codigo: z.string().regex(/^S[1-9]-\d{5}$/),
  equipaje: z.string(),
  viajeId: z.string(),
  precio: z.number().nonnegative().min(1),
});

export default boletoSchema;
