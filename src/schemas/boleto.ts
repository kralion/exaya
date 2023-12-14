import { z } from "zod";

const boletoSchema = z.object({
  telefonoCliente: z.string(),
  asiento: z.number(),
  equipajes: z.string(),
  reservado: z.boolean().default(false),
  clienteId: z.string(),
  viajeId: z.string(),
  precio: z.number().nonnegative().min(1),
  codigo: z.string(),
});

export default boletoSchema;
