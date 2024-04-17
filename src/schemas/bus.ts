import { z } from "zod";

const busSchema = z.object({
  modelo: z.string(),
  foto: z.string().optional(),
  placa: z.string(),
  asientos: z.number(),
});

export default busSchema;
