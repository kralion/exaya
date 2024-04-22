import { z } from "zod";

const usuarioSchema = z.object({
  username: z.string(),
  nombres: z.string(),
  serieBoleto: z.enum([
    "AG001",
    "AG002",
    "AG003",
    "AG004",
    "AG005",
    "AG006",
    "AG007",
    "AG008",
    "AG009",
    "AG010",
  ]),
  serieEncomienda: z.enum([
    "EAG001",
    "EAG002",
    "EAG003",
    "EAG004",
    "EAG005",
    "EAG006",
    "EAG007",
    "EAG008",
    "EAG009",
    "EAG010",
  ]),
  apellidos: z.string(),
  password: z.string(),
  usuarioDni: z.string().min(8).max(8),
  rol: z.enum(["USER", "ADMIN", "GUEST"]),
  sedeDelegacion: z.string(),
  foto: z.string().optional(),
  telefono: z.string().min(9).max(9),
});

export default usuarioSchema;
