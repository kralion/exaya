import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { rutaSchema, viajeSchema } from "@/schemas";
import { busSchema } from "@/schemas/bus";
const createViajeSchema = z.object({
  ...viajeSchema.omit({ id: true }).shape,
  bus: busSchema.pick({ id: true }),
  ruta: rutaSchema.pick({ id: true }),
});

export const viajesRouter = createTRPCRouter({
  getAllViajes: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.viaje.findMany({
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
    .input(createViajeSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.viaje.create({
          data: {
            ...input,
            bus: {
              connect: {
                id: input.busId,
              },
            },
          },
        });
      } catch (error) {
        // handle error
      }
    }),

  deleteViaje: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.viaje.delete({ where: { id: input.id } });
    }),
});
