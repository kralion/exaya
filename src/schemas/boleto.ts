import { z } from "zod";

const boletoSchema = z.object({
  //todo: change all the properties and types with the new ones from the database model
  id: z.number(),
  dni: z.string(),
  asiento: z.string(),
  origen: z.string().default("Lima"),
  destino: z.string().default("Arequipa"),
  precio: z.number().nonnegative().min(1),
  pasajeroId: z.number(),
  fechaCompra: z.date(),
  viajeId: z.number(),
});

export default boletoSchema;
