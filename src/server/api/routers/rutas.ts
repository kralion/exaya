import { rutaSchema } from "@/schemas";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";

export const rutasRouter = createTRPCRouter({
  getAllRutas: publicProcedure.query(async ({ ctx }) => {
    const rutas = await ctx.prisma.ruta.findMany();
    return rutas;
  }),
  getRutasByOrigin: publicProcedure
    .input(z.object({ ciudadOrigen: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const rutas = await ctx.prisma.ruta.findFirst({
          where: { ciudadOrigen: input.ciudadOrigen },
        });
        return {
          status: "success",
          response: rutas,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener las rutas",
        };
      }
    }),
  createRuta: protectedProcedure
    .input(rutaSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.ruta.create({
          data: input,
        });
        return {
          status: "success",
          message: "Ruta creada exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al crear la ruta",
        };
      }
    }),
  deleteRuta: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.ruta.delete({
          where: { id: input.id },
        });
        return {
          status: "success",
          message: "Ruta eliminada exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al eliminar la ruta",
        };
      }
    }),
  updateRuta: protectedProcedure
    .input(rutaSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.ruta.update({
          where: { id: input.id },
          data: input,
        });
        return {
          status: "success",
          message: "Ruta actualizada exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al actualizar la ruta",
        };
      }
    }),
});
