import { z } from "zod";

const busSchema = z.object({
  id: z.string(),
  modelo: z.string(),
  foto: z.string(),
  placa: z.string(),
  asientos: z.number(),
  createdAt: z.date(),
});

export default busSchema;
