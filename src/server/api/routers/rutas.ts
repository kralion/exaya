import { rutaSchema } from "@/schemas";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";

export const rutasRouter = createTRPCRouter({
  getAllRutas: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.ruta.findFirst();
  }),
  getRutasById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.ruta.findUnique({ where: { id: input.id } });
    }),
  createRuta: protectedProcedure.input(rutaSchema).query(({ input, ctx }) => {
    return ctx.prisma.ruta.create({ data: input });
  }),
  deleteRuta: protectedProcedure
    .input(z.object({ id: z.number() }))
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
