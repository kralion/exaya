import { z } from "zod";

// Boleto Schema
export const boletoSchema = z.object({
  id: z.string().optional(),
  usuarioId: z.string(),
  destino: z.string(),
  metodoPago: z.string(),
  asiento: z.number().nonnegative().min(1),
  estado: z.enum(["DISPONIBLE", "PAGADO", "RESERVADO"]),
  pasajeroDni: z.string().min(8).max(8),
  codigo: z.string(),
  pasajeroNombres: z.string().default("No Registrado"),
  pasajeroApellidos: z.string(),
  viajeId: z.string(),
  precio: z.number().nonnegative().min(1),
});

// Bus Schema
export const busSchema = z.object({
  modelo: z.string(),
  foto: z.string().optional(),
  placa: z.string(),
  asientos: z.number(),
});

// Conductor Schema
export const conductorSchema = z.object({
  foto: z.string().optional(),
  conductorDni: z.string().min(8).max(8),
  numeroLicencia: z.string(),
  nombres: z.string(),
  apellidos: z.string(),
  viajeId: z.string().optional(),
  claseLicencia: z.string(),
  telefono: z.string().min(9).max(9),
  disponibilidad: z.boolean(),
});

// Encomienda Schema
export const encomiendaSchema = z.object({
  remitenteDni: z.string(),
  usuarioId: z.string(),
  serie: z.enum(["B001", "F001"]),
  destino: z.string(),
  destinatarioDni: z.string(),
  codigoRastreo: z.string(),
  destinatarioNombres: z.string(),
  destinatarioApellidos: z.string(),
  remitenteNombres: z.string(),
  remitenteApellidos: z.string(),
  precio: z.number().nonnegative().min(1),
  viajeId: z.string(),
  razonSocial: z.string().optional(),
  ruc: z.string().optional(),
  fechaEnvio: z.date(),
  factura: z.boolean(),
  pagado: z.boolean(),
  descripcion: z.string(),
});

// Ruta Schema
export const rutaSchema = z.object({
  id: z.string(),
  ciudadOrigen: z.string(),
  ciudadDestino: z.string(),
  terminalDestino: z.string(),
  terminalOrigen: z.string(),
  duracionEstimada: z.number().nonnegative().min(1),
  createdAt: z.date(),
});

// Usuario Schema
export const usuarioSchema = z.object({
  username: z.string(),
  isDeleted: z.boolean().optional(),
  nombres: z.string(),
  sedeId: z.string(),
  apellidos: z.string(),
  password: z.string(),
  usuarioDni: z.string().min(8).max(8),
  rol: z.enum(["USER", "ADMIN", "GUEST"]),
  foto: z.string().optional(),
  telefono: z.string().min(9).max(9),
});

// Viaje Schema
export const viajeSchema = z.object({
  estado: z.enum(["DISPONIBLE", "CANCELADO", "LLENO"]),
  usuarioId: z.string(),
  busId: z.string(),
  rutaId: z.string(),
  conductores: z.array(z.string()),
  salida: z.date(),
  tarifaGeneral: z.number().int().nonnegative(),
  tarifas: z.array(z.number().int().nonnegative()),
});

// Types derivados de los schemas
export type Boleto = z.infer<typeof boletoSchema>;
export type Bus = z.infer<typeof busSchema>;
export type Conductor = z.infer<typeof conductorSchema>;
export type Encomienda = z.infer<typeof encomiendaSchema>;
export type Ruta = z.infer<typeof rutaSchema>;
export type Usuario = z.infer<typeof usuarioSchema>;
export type Viaje = z.infer<typeof viajeSchema>;
