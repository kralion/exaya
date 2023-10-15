import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";

export const rutaRouter = createTRPCRouter({
  getAllRutas: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.ruta.findMany();
  }),
  getRutasById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.ruta.findUnique({ where: { id: input.id } });
    }),
});
