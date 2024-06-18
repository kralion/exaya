import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

import { encomiendaSchema } from "@/schemas";
import { TRPCError } from "@trpc/server";

export const encomiendasRouter = createTRPCRouter({
  getAllEncomiendas: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.encomienda.findMany({
      include: {
        viaje: {
          include: {
            ruta: true,
            usuario: {
              include: {
                sede: true,
              },
            },
          },
        },
      },
      orderBy: { fechaEnvio: "desc" },
    });
  }),
  getAllBoletosEncomiendas: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.encomienda.findMany({
      where: { factura: false },
      include: {
        viaje: {
          include: {
            ruta: true,
            usuario: {
              include: {
                sede: true,
              },
            },
          },
        },
      },
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
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const startDate = new Date(year, month - 1, 1);
          const endDate = new Date(year, month, 0);

          const encomiendas = await ctx.prisma.encomienda.findMany({
            where: {
              fechaEnvio: {
                gte: startDate,
                lt: endDate,
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
          message: "Error al obtener el conteo de encomiendas",
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
            usuario: {
              include: {
                sede: true,
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
          message: "Encomienda eliminada",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Ocurrió un error ",
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
          message: "Encomienda Registrada",
        };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error as string,
        });
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
          message: "Cambios Guardados",
        };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error al actualizar la encomienda",
        });
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
