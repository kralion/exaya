import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const personasRouter = createTRPCRouter({
  getAllPersonas: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.persona.findMany();
  }),
  getPersonaById: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.persona.findUnique({ where: { id: input.id } });
    }),
});
