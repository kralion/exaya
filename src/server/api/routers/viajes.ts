import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { viajeSchema } from "@/schemas";

export const viajesRouter = createTRPCRouter({
  getAllViajes: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.viaje.findMany();
  }),
  getViajesById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.viaje.findUnique({ where: { id: input.id } });
    }),
  createViaje: publicProcedure
    .input(
      z.object({
        fechaSalida: z.date(),
        tarifas: z.array(z.number().nonnegative().min(1)),
        estado: z.string(),
        horaSalida: z.string(),
        activo: z.boolean(),
        busId: z.string(),
        rutaId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.viaje.create({ data: input });
      } catch (error) {
        console.log(error);
      }
    }),
  deleteViaje: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.viaje.delete({ where: { id: input.id } });
    }),
  updateViaje: protectedProcedure.input(viajeSchema).query(({ input, ctx }) => {
    return ctx.prisma.viaje.update({
      where: { id: input.id },
      data: input,
    });
  }),
});
