import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { busSchema } from "@/schemas";
import { z } from "zod";

export const busesRouter = createTRPCRouter({
  getAllBuses: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.bus.findMany({
      //TODO: Rewrite this include
      include: {
        Viaje: true,
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
        return {
          status: "error",
          message: "Error al obtener el bus",
        };
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
          message: "Bus created successfully",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al crear el bus",
        };
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
          message: "Bus updated successfully",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al actualizar el bus",
        };
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
          message: "Bus deleted successfully",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al eliminar el bus",
        };
      }
    }),
});
