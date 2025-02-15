import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const sedesRouter = createTRPCRouter({
  getAllSedes: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.sede.findMany();
  }),
  getSedeById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      try {
        const sede = await ctx.prisma.sede.findUnique({
          where: { id: input.id },
        });
        return {
          status: "success",
          response: sede,
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al obtener la sede",
        };
      }
    }),
  incrementBoletosCounterBySedeId: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.sede.update({
          where: { id: input.id },
          data: {
            contadorBoletos: {
              increment: 1,
            },
          },
        });

        return {
          status: "success",
          message: "Boletos incrementados",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al incrementar el boletos",
        };
      }
    }),
  incrementContadorFacturasBySedeId: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.sede.update({
          where: { id: input.id },
          data: {
            contadorFacturas: {
              increment: 1,
            },
          },
        });

        return {
          status: "success",
          message: "Contador de facturas incrementado",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al incrementar el contador de facturas",
        };
      }
    }),
  decreaseContadorFacturasBySedeId: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.sede.update({
          where: { id: input.id },
          data: {
            contadorFacturas: {
              decrement: 1,
            },
          },
        });

        return {
          status: "success",
          message: "Contador de facturas decrementado",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al decrementar el contador de facturas",
        };
      }
    }),
  decreaseContadorBoletosBySedeId: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.sede.update({
          where: { id: input.id },
          data: {
            contadorBoletos: {
              decrement: 1,
            },
          },
        });

        return {
          status: "success",
          message: "Contador de boletos decrementado",
        };
      } catch (error) {
        return {
          status: "error",
          message: "Error al decrementar el contador de boletos",
        };
      }
    }),
});
