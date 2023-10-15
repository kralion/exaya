import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";

export const rutasRouter = createTRPCRouter({
  getAllRutas: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.ruta.findFirst();
  }),
  getRutasById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.ruta.findUnique({ where: { id: input.id } });
    }),
});
