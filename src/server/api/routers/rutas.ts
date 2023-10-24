import { rutaSchema } from "@/schemas";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";

export const rutasRouter = createTRPCRouter({
  getAllRutas: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.ruta.findMany();
  }),
  getRutasByOrigin: publicProcedure
    .input(z.object({ ciudadOrigen: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.ruta.findFirst({
        where: { ciudadOrigen: input.ciudadOrigen },
      });
    }),
  createRuta: protectedProcedure.input(rutaSchema).query(({ input, ctx }) => {
    return ctx.prisma.ruta.create({ data: input });
  }),
  deleteRuta: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.ruta.delete({ where: { id: input.id } });
    }),
  updateRuta: protectedProcedure.input(rutaSchema).query(({ input, ctx }) => {
    return ctx.prisma.ruta.update({
      where: { id: input.id },
      data: input,
    });
  }),
});
