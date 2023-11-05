import { z } from "zod";
import { env } from "@/env.mjs";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { clienteSchema } from "@/schemas";
import type { ICliente } from "@/interfaces";
export const clientesRouter = createTRPCRouter({
  getAllClientes: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.cliente.findMany();
  }),
  getClienteById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.cliente.findUnique({ where: { id: input.id } });
    }),
  creatCliente: publicProcedure.input(clienteSchema).query(({ ctx, input }) => {
    return ctx.prisma.cliente.create({ data: input });
  }),
  validateDni: publicProcedure
    .input(
      z.object({
        dni: z.string().length(8, "El DNI debe tener 8 dígitos"),
      })
    )
    .query(async ({ input }) => {
      try {
        const response = await fetch(`${env.API_RENIEC_URL}${input.dni}`, {
          headers: {
            Authorization: `Bearer ${env.API_RENIEC_TOKEN}`,
          },
        });
        if (response.status === 200) {
          return {
            status: "success",
            help: "DNI Encontrado",
            data: (await response.json()) as ICliente,
          };
        } else {
          return { status: "error", help: "DNI no existe" };
        }
      } catch (error) {
        return { status: "error", help: "Error al validar DNI" };
      }
    }),
});
