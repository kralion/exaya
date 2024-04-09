import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { conductorSchema } from "@/schemas";
import { z } from "zod";

export const conductoresRouter = createTRPCRouter({
  getAllConductores: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.conductor.findMany();
  }),
  getConductorById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const conductor = await ctx.prisma.conductor.findUnique({
          where: { id: input.id },
        });
        return {
          status: "success",
          response: conductor,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener el conductor",
        };
      }
    }),

  deleteConductor: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.conductor.delete({
          where: { id: input.id },
        });
        return {
          status: "success",
          message: "Conductor eliminado exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al eliminar el conductor",
        };
      }
    }),

  createConductor: publicProcedure
    .input(conductorSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.conductor.create({
          data: input,
        });
        return {
          status: "success",
          message: "Conductor creado exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al crear el conductor",
        };
      }
    }),

  updateConductor: publicProcedure
    .input(
      conductorSchema.extend({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.conductor.update({
          where: { id: input.id },
          data: input,
        });
        return {
          status: "success",
          message: "Conductor actualizado exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al actualizar el conductor",
        };
      }
    }),
});
