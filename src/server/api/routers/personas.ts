import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { personasSchema } from "@/schemas";
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
  createPersona: publicProcedure
    .input(personasSchema)
    .query(({ ctx, input }) => {
      return ctx.prisma.persona.create({ data: input });
    }),
});
