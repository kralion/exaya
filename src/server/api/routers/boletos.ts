import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { boletoSchema } from "@/schemas";
import { TRPCError } from "@trpc/server";

export const boletosRouter = createTRPCRouter({
  getAllBoletos: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.boleto.findMany({
      include: {
        viaje: {
          include: {
            ruta: true,
            usuario: {
              select: { sedeDelegacion: true },
            },
          },
        },
      },
      orderBy: { fechaRegistro: "desc" },
    });
  }),
  getCountOfBoletosByMonth: publicProcedure.query(async ({ ctx }) => {
    try {
      const counts = [];
      const today = new Date();

      for (let i = 0; i < 6; i++) {
        const month = today.getMonth() - i;
        const year = today.getFullYear() + (month < 0 ? -1 : 0);
        const monthStr = `${year}-${((month % 12) + 1)
          .toString()
          .padStart(2, "0")}`;

        const boletos = await ctx.prisma.boleto.findMany({
          where: {
            fechaRegistro: {
              gte: new Date(monthStr + "-01"),
              lt: new Date(
                new Date(monthStr + "-01").setMonth(
                  new Date(monthStr + "-01").getMonth() + 1
                )
              ),
            },
          },
        });

        counts.unshift(boletos.length);
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
  }),

  getCountOfBoletosInLatest6Months: publicProcedure.query(async ({ ctx }) => {
    try {
      const counts = [];
      for (let i = 5; i >= 0; i--) {
        const date = new Date();
        date.setMonth(date.getMonth() - i);
        const year = date.getFullYear().toString();
        const month = ("0" + (date.getMonth() + 1).toString()).slice(-2);
        const nextMonth = ("0" + (date.getMonth() + 2).toString()).slice(-2);
        const boletos = await ctx.prisma.boleto.findMany({
          where: {
            fechaRegistro: {
              gte: new Date(year + "-" + month + "-01"),
              lt: new Date(Number(year), Number(nextMonth), 1),
            },
          },
        });
        counts.push(boletos.length);
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
  }),
  getLatestCodeOfBoleto: publicProcedure.query(async ({ ctx }) => {
    try {
      const boleto = await ctx.prisma.boleto.findFirst({
        orderBy: { id: "desc" },
      });
      return {
        status: "success",
        response: boleto?.codigo,
      };
    } catch (error) {
      return {
        status: "error",
        message: "Error al obtener el codigo del último boleto generado",
      };
    }
  }),

  getBoletosById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const boleto = await ctx.prisma.boleto.findUnique({
          where: { id: input.id },
          include: {
            viaje: {
              include: {
                ruta: true,
              },
            },
            usuario: true,
          },
        });
        return {
          status: "success",
          response: boleto,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener el boleto",
        };
      }
    }),

  getBoletosByStatusAndViajeId: publicProcedure
    .input(
      z.object({
        status: z.enum(["PAGADO", "RESERVADO", "DISPONIBLE"]),
        viajeId: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      try {
        const boletos = await ctx.prisma.boleto.findMany({
          where: { estado: input.status, viajeId: input.viajeId },
        });
        return {
          status: "success",
          response: boletos,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener el boleto",
        };
      }
    }),

  getBoletosByViaje: publicProcedure
    .input(z.object({ viajeId: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        return ctx.prisma.boleto.findMany({
          where: { viajeId: input.viajeId },
        });
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener los boletos",
        };
      }
    }),
  deleteBoletosById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const boleto = await ctx.prisma.boleto.delete({
        where: { id: input.id },
      });
      if (!boleto) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Boleto no encontrado",
        });
      }
      return {
        status: "sucess",
        message: "Se lleva un registro de todos los boletos eliminados",
      };
    }),
  createBoleto: publicProcedure
    .input(boletoSchema)
    .mutation(async ({ input, ctx }) => {
      const existingBoleto = await ctx.prisma.boleto.findFirst({
        where: {
          asiento: input.asiento,
          viajeId: input.viajeId,
        },
      });
      if (existingBoleto) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "El asiento ya ha sido registrado",
        });
      }
      try {
        await ctx.prisma.boleto.create({
          data: input,
        });
        return {
          status: "success",
          message: `Asiento : ${input.asiento} registrado exitosamente`,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Ocurrió un error al registrar el boleto",
        };
      }
    }),

  updateBoletoById: protectedProcedure
    .input(boletoSchema.extend({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.boleto.update({
          where: { id: input.id },
          data: input,
        });
        return {
          status: "success",
          message: "Boleto actualizado exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al actualizar el boleto",
        };
      }
    }),
});
