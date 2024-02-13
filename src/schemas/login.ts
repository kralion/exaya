import { z } from "zod";
const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});
export default loginSchema;
