import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

import { encomiendaSchema } from "@/schemas";

export const encomiendasRouter = createTRPCRouter({
  getAllEncomiendas: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.encomienda.findMany();
  }),

  getEncomiendasByViajeId: publicProcedure
    .input(
      encomiendaSchema.pick({
        viajeId: true,
      })
    )
    .query(async ({ input, ctx }) => {
      try {
        const encomiendas = await ctx.prisma.encomienda.findMany({
          where: { viajeId: input.viajeId },
        });
        return {
          status: "success",
          response: encomiendas,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener las encomiendas",
        };
      }
    }),

  getEncomiendaById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      try {
        const encomienda = await ctx.prisma.encomienda.findUnique({
          where: { id: input.id },
          include: {
            viaje: true,
          },
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
  deleteEncomiendaById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.encomienda.delete({
          where: { id: input.id },
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

  getLatestCodeOfEncomienda: publicProcedure.query(async ({ ctx }) => {
    try {
      const encomienda = await ctx.prisma.encomienda.findFirst({
        orderBy: {
          fechaEnvio: "desc",
        },
      });
      return {
        status: "success",
        response: encomienda?.codigo,
      };
    } catch (error) {
      return {
        status: "error",
        message: "Error al obtener el último código de encomienda",
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
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.encomienda.update({
          where: { id: input.id },
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
