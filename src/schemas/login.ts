import { z } from "zod";
const loginSchema = z.object({
  email: z.string().min(3),
  password: z.string().min(8),
});
export default loginSchema;
