import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

import { encomiendaSchema } from "@/schemas";

export const encomiendasRouter = createTRPCRouter({
  getAllEncomiendas: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.encomienda.findMany();
  }),

  getEncomiendaByCodigo: publicProcedure
    .input(
      encomiendaSchema.pick({
        codigo: true,
      })
    )
    .query(async ({ input, ctx }) => {
      try {
        const encomienda = await ctx.prisma.encomienda.findUnique({
          where: { codigo: input.codigo },
        });
        return {
          status: "success",
          response: encomienda,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener la encomienda",
        };
      }
    }),
  deleteEncomienda: publicProcedure
    .input(
      encomiendaSchema.pick({
        codigo: true,
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.encomienda.delete({
          where: { codigo: input.codigo },
        });
        return {
          status: "success",
          message: "Encomienda eliminada exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al eliminar la encomienda",
        };
      }
    }),

  createEncomienda: publicProcedure
    .input(encomiendaSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.encomienda.create({
          data: input,
        });
        return {
          status: "success",
          message: "Encomienda creada exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al crear la encomienda",
        };
      }
    }),

  updateEncomienda: publicProcedure
    .input(
      encomiendaSchema.pick({
        codigo: true,
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.encomienda.update({
          where: { codigo: input.codigo },
          data: input,
        });
        return {
          status: "success",
          message: "Encomienda actualizada exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al actualizar la encomienda",
        };
      }
    }),
});
