import { z } from "zod";

const busSchema = z.object({
  id: z.string().optional(),
  modelo: z.string(),
  foto: z.string(),
  placa: z.string(),
  asientos: z.number(),
});

export { busSchema };
