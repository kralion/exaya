import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { conductorSchema } from "@/schemas";

export const conductoresRouter = createTRPCRouter({
  getAllConductores: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.conductor.findMany({
      include: {
        cliente: true,
      },
    });
  }),
  getConductorById: publicProcedure
    .input(conductorSchema.pick({ id: true }))
    .query(({ input, ctx }) => {
      return ctx.prisma.conductor.findUnique({ where: { id: input.id } });
    }),

  deleteConductor: publicProcedure
    .input(conductorSchema.pick({ id: true }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.conductor.delete({ where: { id: input.id } });
    }),
});
