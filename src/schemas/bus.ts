import { z } from "zod";

const busSchema = z.object({
  //todo: change all the properties and types with the new ones from the database model
  id: z.string(),
  foto: z.string(),
  placa: z.string(),
  marca: z.string(),
  modelo: z.string().optional(),
  asientos: z.number().nonnegative().min(1),
});

export default busSchema;
