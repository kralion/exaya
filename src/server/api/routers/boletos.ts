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

  getBoletosByViajeTimeSchedule: publicProcedure
    .input(z.object({ scheduleTimeQuery: z.string() }))
    .query(async ({ input, ctx }) => {
      //TODO: I am querying to the entire salida, and not to the time of salida
      try {
        const boletos = await ctx.prisma.boleto.findMany({
          where: { viaje: { salida: input.scheduleTimeQuery } },
          include: {
            viaje: {
              include: {
                ruta: { select: { ciudadDestino: true, ciudadOrigen: true } },
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

  getBoletosByRutaDestiny: publicProcedure
    .input(z.object({ destino: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const boletos = await ctx.prisma.boleto.findMany({
          where: { viaje: { ruta: { ciudadDestino: input.destino } } },
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

  getBoletosById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const boleto = await ctx.prisma.boleto.findUnique({
          where: { id: input.id },
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

  getBoletosByStatus: publicProcedure
    .input(
      z.object({
        status: z.enum(["PAGADO", "RESERVADO", "DISPONIBLE"]),
      })
    )
    .query(async ({ input, ctx }) => {
      try {
        const boletos = await ctx.prisma.boleto.findMany({
          where: { estado: input.status },
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
