import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { boletoSchema } from "@/schemas";

export const boletosRouter = createTRPCRouter({
  getAllBoletos: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.boleto.findMany();
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

  getBoletosByCode: publicProcedure
    .input(z.object({ codigo: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const boleto = await ctx.prisma.boleto.findUnique({
          where: { id: input.codigo },
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
  deleteBoletosByCode: protectedProcedure
    .input(z.object({ codigo: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        await ctx.prisma.boleto.delete({ where: { id: input.codigo } });
        return {
          status: "success",
          message: "Boleto eliminado exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al eliminar el boleto",
        };
      }
    }),
  createBoletos: protectedProcedure
    .input(boletoSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.boleto.create({
          data: input,
        });
        return {
          status: "success",
          message: "Boleto creado exitosamente",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al crear el boleto",
        };
      }
    }),
  updateBoletoByCode: protectedProcedure
    .input(boletoSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.boleto.update({
          where: { id: input.codigo },
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
