import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { busSchema } from "@/schemas";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const busesRouter = createTRPCRouter({
  getAllBuses: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.bus.findMany({
      //TODO: Rewrite this include
      include: {
        viaje: true,
      },
    });
  }),

  getBusById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const bus = await ctx.prisma.bus.findUnique({
          where: { id: input.id },
        });
        return {
          status: "success",
          response: bus,
        };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error al obtener el bus",
        });
      }
    }),

  createBus: publicProcedure
    .input(busSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.bus.create({
          data: input,
        });
        return {
          status: "success",
          message: "Bus creado",
        };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error al crear bus",
        });
      }
    }),

  updateBus: publicProcedure
    .input(
      busSchema.extend({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.bus.update({
          where: { id: input.id },
          data: input,
        });
        return {
          status: "success",
          message: "Bus actualizado",
        };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error al actualizar el bus",
        });
      }
    }),

  deleteBus: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.bus.delete({
          where: { id: input.id },
        });
        return {
          status: "success",
          message: "Bus eliminado",
        };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error al eliminar el bus",
        });
      }
    }),
});
