import { z } from "zod";
const loginSchema = z.object({
  username: z.string().optional(),
  password: z.string().optional(),
});
export default loginSchema;
