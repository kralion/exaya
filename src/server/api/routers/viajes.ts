import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { viajeSchema } from "@/schemas";

export const viajesRouter = createTRPCRouter({
  getAllViajes: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.viaje.findMany({
      include: {
        ruta: true,
        bus: true,
      },
    });
  }),
  getViajesForToday: publicProcedure.query(async ({ ctx }) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return ctx.prisma.viaje.findMany({
      where: {
        salida: {
          gte: today,
          lt: tomorrow,
        },
      },
      include: {
        ruta: true,
        bus: true,
      },
    });
  }),
  getViajesById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.viaje.findUnique({
        where: { id: input.id },
        include: {
          bus: true,
        },
      });
    }),
  createViaje: publicProcedure
    .input(viajeSchema)
    .mutation(async ({ input, ctx }) => {
      return ctx.prisma.viaje.create({
        data: {
          ...input,
          busId: input.busId,
          rutaId: input.rutaId,
        },
      });
    }),
  deleteViaje: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.viaje.delete({ where: { id: input.id } });
    }),
  updateViaje: publicProcedure
    .input(viajeSchema.extend({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { id, ...data } = input;
      return ctx.prisma.viaje.update({
        where: { id },
        data,
      });
    }),
});
