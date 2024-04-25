import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

import { encomiendaSchema } from "@/schemas";

export const encomiendasRouter = createTRPCRouter({
  getAllEncomiendas: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.encomienda.findMany({
      include: { viaje: { include: { ruta: true } } },
      orderBy: { fechaEnvio: "desc" },
    });
  }),
  getAllBoletosEncomiendas: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.encomienda.findMany({
      where: { factura: false },
      include: { viaje: { include: { ruta: true, usuario: true } } },
      orderBy: { fechaEnvio: "desc" },
    });
  }),
  getAllFacturasEncomiendas: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.encomienda.findMany({
      where: { factura: true },
      include: { viaje: { include: { ruta: true, usuario: true } } },
      orderBy: { fechaEnvio: "desc" },
    });
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
            viaje: {
              include: {
                ruta: true,
                usuario: true,
              },
            },
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
          message:
            "Todos los datos relacionados con la encomienda han sido eliminados de la base de datos",
        };
      } catch (error) {
        return {
          status: "error",
          message:
            "Ocurrió un error al eliminar la encomienda, por favor recargue la página e intente nuevamente",
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
          message:
            "Puedes ver los detalles de la encomien en la tabla de encomiendas",
        };
      } catch (error) {
        return {
          status: "error",
          message:
            "Ocurrió un error inesperado al crear la encomienda, por favor recarge la página e intente nuevamente",
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
          message:
            "Los detalles de la encomienda fueron actualizados con los nuevos valores",
        };
      } catch (error) {
        return {
          status: "error",
          message:
            "Ocurrió un error inesperado al actualizar la encomienda, por favor recarge la página e intente nuevamente",
        };
      }
    }),

  updateEncomiendaStatus: publicProcedure
    .input(
      z.object({
        id: z.string(),
        pagado: z.boolean(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.encomienda.update({
          where: { id: input.id },
          data: { pagado: input.pagado },
        });
        return {
          status: "success",
          message: "El estado de la encomienda ha sido actualizado con éxito",
        };
      } catch (error) {
        return {
          status: "error",
          message:
            "Ocurrió un error inesperado al actualizar el estado de la encomienda, por favor recarge la página e intente nuevamente",
        };
      }
    }),
});
