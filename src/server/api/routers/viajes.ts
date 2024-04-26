import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { viajeSchema } from "@/schemas";
import moment from "moment-timezone";
import { TRPCError } from "@trpc/server";

export const viajesRouter = createTRPCRouter({
  getAllViajes: publicProcedure.query(async ({ ctx }) => {
    const viajes = await ctx.prisma.viaje.findMany({
      include: {
        ruta: true,
        bus: true,
      },
    });
    return {
      status: "success",
      response: viajes,
    };
  }),

  getConductoresByViajeId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const conductores = await ctx.prisma.conductor.findMany({
          where: { viajeId: input.id },
        });
        return {
          status: "success",
          response: conductores,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener los conductores",
        };
      }
    }),

  getMisBoletosByViajeId: publicProcedure
    .input(
      z.object({
        id: z.string(),

        userId: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      try {
        const boletos = await ctx.prisma.boleto.findMany({
          where: {
            viajeId: input.id,
            usuarioId: input.userId,
          },
          include: {
            viaje: {
              include: {
                bus: true,
              },
            },
          },
        });
        return {
          status: "success",
          response: boletos,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener los boletos",
        };
      }
    }),

  getBoletosByViajeId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const boletos = await ctx.prisma.boleto.findMany({
          where: { viajeId: input.id },
        });
        return {
          status: "success",
          response: boletos,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener los boletos",
        };
      }
    }),

  getViajesForToday: publicProcedure.query(async ({ ctx }) => {
    const today = moment.tz("America/Lima").startOf("day");
    const tomorrow = moment.tz("America/Lima").startOf("day").add(1, "days");
    try {
      const viajesDiarios = await ctx.prisma.viaje.findMany({
        where: {
          salida: {
            gte: today.toDate(),
            lt: tomorrow.toDate(),
          },
        },
        include: {
          ruta: true,
          bus: true,
          boletos: true,
        },
      });
      return {
        status: "success",
        response: viajesDiarios,
      };
    } catch (error) {
      return {
        status: "error",
        message: "Error al obtener los viajes",
      };
    }
  }),

  getViajesByScheduleTime: publicProcedure
    .input(z.object({ time: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const time = new Date(input.time);
        const viajes = await ctx.prisma.viaje.findMany({
          where: {
            salida: {
              gte: new Date(
                time.getFullYear(),
                time.getMonth(),
                time.getDate(),
                time.getHours(),
                time.getMinutes(),
                time.getSeconds()
              ),
              lt: new Date(
                time.getFullYear(),
                time.getMonth(),
                time.getDate(),
                time.getHours(),
                time.getMinutes(),
                time.getSeconds() + 1
              ),
            },
          },
          include: {
            ruta: true,
            bus: true,
            boletos: true,
            encomiendas: true,
          },
        });
        return {
          status: "success",
          response: viajes,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener los viajes",
        };
      }
    }),

  getViajesByDate: publicProcedure
    .input(z.object({ date: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const date = moment(input.date, "YYYY-MM-DD");
        const startOfTheDay = date.startOf("day").toDate();
        const endOfTheDay = date.add(1, "day").startOf("day").toDate();
        try {
          const viajes = await ctx.prisma.viaje.findMany({
            where: {
              salida: {
                gte: startOfTheDay,
                lt: endOfTheDay,
              },
            },
            include: {
              ruta: true,
              boletos: true,
              encomiendas: true,
              bus: true,
            },
          });
          return {
            status: "success",
            response: viajes,
          };
        } catch (error) {
          return {
            status: "error",
            message: "Error al obtener los viajes",
          };
        }
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener los viajes",
        };
      }
    }),
  getViajesByDateAndRutaId: publicProcedure
    .input(z.object({ date: z.string(), id: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const date = new Date(input.date);
        const viajes = await ctx.prisma.viaje.findMany({
          where: {
            AND: [
              {
                salida: {
                  gte: new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate(),
                    0,
                    0,
                    0
                  ),
                },
              },
              {
                salida: {
                  lt: new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate(),
                    23,
                    59,
                    59
                  ),
                },
              },
              {
                rutaId: input.id,
              },
            ],
          },
          include: {
            ruta: true,
            boletos: true,
            encomiendas: true,
            bus: true,
          },
        });
        return {
          status: "success",
          response: viajes,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener los viajes",
        };
      }
    }),
  getViajeById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const viaje = await ctx.prisma.viaje.findUnique({
          where: { id: input.id },
          include: {
            bus: true,
            boletos: true,
            encomiendas: true,
            conductores: true,
            ruta: true,
          },
        });
        return {
          status: "success",
          response: viaje,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener el viaje",
        };
      }
    }),

  getViajesByRutaDestinyAndStatus: publicProcedure
    .input(z.object({ destiny: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const viajes = await ctx.prisma.viaje.findMany({
          where: {
            ruta: {
              ciudadDestino: input.destiny,
            },
            estado: "DISPONIBLE",
          },
          include: {
            ruta: true,
          },
        });
        return {
          status: "success",
          response: viajes,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener los viajes",
        };
      }
    }),
  createViaje: publicProcedure
    .input(viajeSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.viaje.create({
          data: input,
        });
        return {
          status: "success",
          message: "Viaje creado exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Ocurrió un error al registrar el viaje",
        };
      }
    }),
  deleteViajeById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const viaje = await ctx.prisma.viaje.findUnique({
        where: { id: input.id },
        include: { boletos: true },
      });

      if (!viaje) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "El viaje no existe",
        });
      }

      if (viaje.boletos.length > 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            "Error, el viaje tiene boletos vendidos, elimine los boletos primero",
        });
      }

      await ctx.prisma.viaje.delete({
        where: { id: input.id },
      });

      return {
        status: "success",
        message: "Viaje Eliminado correctamente",
      };
    }),
  updateViajeById: publicProcedure
    .input(viajeSchema.extend({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.viaje.update({
          where: { id: input.id },
          data: input,
        });
        return {
          status: "success",
          message: "Viaje actualizado exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al actualizar el viaje",
        };
      }
    }),
});
