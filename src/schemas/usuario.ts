import { z } from "zod";

const usuarioSchema = z.object({
  id: z.string(),
  username: z.string(),
  nombres: z.string(),
  apellidos: z.string(),
  password: z.string(),
  usuarioDni: z.string().min(8).max(8),
  rol: z.string().default("USER"),
  sedeDelegacion: z.string(),
  foto: z
    .string()
    .optional()
    .default(
      "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1712692756~exp=1712696356~hmac=b3d33e282723c8433bd6139a8135acb77bb9f233f203215517ff5da551250ac7&w=740"
    ),
  telefono: z.string().min(9).max(9),
});

export default usuarioSchema;
