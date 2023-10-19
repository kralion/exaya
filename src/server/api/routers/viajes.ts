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
    .input(z.object({ id: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.viaje.findUnique({ where: { id: input.id } });
    }),
  createViaje: protectedProcedure.input(viajeSchema).query(({ input, ctx }) => {
    return ctx.prisma.viaje.create({ data: input });
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
