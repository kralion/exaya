import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const boletosRouter = createTRPCRouter({
  getAllBoletos: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.boletos.findMany();
  }),
  getBoletosById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.boletos.findUnique({ where: { id: input.id } });
    }),
  deleteBoletosById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.boletos.delete({ where: { id: input.id } });
    }),
  createBoletos: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
        category: z.string(),
        image: z.string(),
        stock: z.number(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.boletos.create({ data: input });
    }),
  updateBoletos: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        price: z.number(),
        category: z.string(),
        image: z.string(),
        stock: z.number(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.boletos.update({
        where: { id: input.id },
        data: input,
      });
    }),
});
