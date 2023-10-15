import { z } from "zod";

const boletoSchema = z.object({
  //todo: change all the properties
  id: z.string(),
  dni: z.string().length(8, { message: "El DNI debe tener 8 dígitos" }),
  asiento: z.number().nonnegative().min(1).int(),
  origen: z.string(),
  destino: z.string(),
  precio: z.number().nonnegative().min(1),
});

export default boletoSchema;
