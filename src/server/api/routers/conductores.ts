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
  deleteConductor: publicProcedure.mutation({
    input: conductorSchema.pick({ id: true }),
    resolve: async ({ ctx, input }) => {
      return ctx.prisma.conductor.delete({
        where: {
          id: input.id,
        },
      });
    },
  }),
  createConductor: publicProcedure.mutation({
    input: conductorSchema.pick({
      modelo: true,
      foto: true,
      placa: true,
      asientos: true,
    }),
    resolve: async ({ ctx, input }) => {
      return ctx.prisma.conductor.create({
        data: {
          modelo: input.modelo,
          foto: input.foto,
          placa: input.placa,
          asientos: input.asientos,
        },
      });
    },
  }),
});
