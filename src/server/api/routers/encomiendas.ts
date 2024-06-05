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
  getCountOfMonthlyBoletosEncomiendas: publicProcedure.query(
    async ({ ctx }) => {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      const result = await ctx.prisma.encomienda.count({
        where: {
          factura: false,
          fechaEnvio: {
            gte: new Date(currentYear, currentMonth, 1),
            lt: new Date(currentYear, currentMonth + 1, 1),
          },
        },
      });

      return result;
    }
  ),
  getMonthlyBoletosEncomiendas: publicProcedure.query(async ({ ctx }) => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const encomiendas = await ctx.prisma.encomienda.findMany({
      where: {
        factura: false,
        fechaEnvio: {
          gte: new Date(currentYear, currentMonth, 1),
          lt: new Date(currentYear, currentMonth + 1, 1),
        },
      },
    });
    return encomiendas;
  }),

  getCountOfMonthlyFacturasEncomiendas: publicProcedure.query(
    async ({ ctx }) => {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      await ctx.prisma.encomienda.count({
        where: {
          factura: true,
          fechaEnvio: {
            gte: new Date(currentYear, currentMonth, 1),
            lt: new Date(currentYear, currentMonth + 1, 1),
          },
        },
      });
    }
  ),
  getMonthlyFacturasEncomiendas: publicProcedure.query(async ({ ctx }) => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const data = await ctx.prisma.encomienda.findMany({
      where: {
        factura: true,
        fechaEnvio: {
          gte: new Date(currentYear, currentMonth, 1),
          lt: new Date(currentYear, currentMonth + 1, 1),
        },
      },
    });
    return data;
  }),
  getAllFacturasEncomiendas: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.encomienda.findMany({
      where: { factura: true },
      include: { viaje: { include: { ruta: true, usuario: true } } },
      orderBy: { fechaEnvio: "desc" },
    });
  }),

  getCountOfEncomiendasInLatest6Months: publicProcedure.query(
    async ({ ctx }) => {
      try {
        const counts = [];
        for (let i = 5; i >= 0; i--) {
          const date = new Date();
          date.setMonth(date.getMonth() - i);
          const year = date.getFullYear().toString();
          const month = ("0" + (date.getMonth() + 1).toString()).slice(-2);
          const nextMonth = ("0" + (date.getMonth() + 2).toString()).slice(-2);

          const encomiendas = await ctx.prisma.encomienda.findMany({
            where: {
              fechaEnvio: {
                gte: new Date(year + "-" + month + "-01"),
                lt: new Date(Number(year), Number(nextMonth), 1),
              },
            },
          });
          counts.push(encomiendas.length);
        }
        return {
          status: "success",
          response: counts,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener el conteo de boletos",
        };
      }
    }
  ),

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
            usuario: true,
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
        where: {
          usuario: {
            id: ctx.session?.user.id,
          },
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

  getEncomiendaByTrackingCode: publicProcedure
    .input(
      z.object({
        codigoRastreo: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      try {
        const encomienda = await ctx.prisma.encomienda.findFirst({
          where: {
            codigoRastreo: input.codigoRastreo,
          },
          include: {
            viaje: {
              include: {
                ruta: true,
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
    .input(encomiendaSchema.extend({ id: z.string() }))
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
          message: "Estado de la encomienda actualizado",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Ocurrió un error, actualiza la pagina",
        };
      }
    }),
});
