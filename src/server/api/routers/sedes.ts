import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const sedesRouter = createTRPCRouter({
  getAllBuses: publicProcedure.query(({ ctx }) => {
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
          message: "Error al obtener el bus",
        };
      }
    }),
});
