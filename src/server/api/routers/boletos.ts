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
  getBoletosById: publicProcedure
    //todo: change id to string
    .input(z.object({ id: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.boleto.findUnique({ where: { id: input.id } });
    }),
  deleteBoletosById: protectedProcedure
    //todo: change id to string
    .input(z.object({ id: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.boleto.delete({ where: { id: input.id } });
    }),
  createBoletos: protectedProcedure
    .input(boletoSchema)
    .query(({ input, ctx }) => {
      return ctx.prisma.boleto.create({ data: input });
    }),
  updateBoletos: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
        description: z.string(),
        price: z.number(),
        category: z.string(),
        image: z.string(),
        stock: z.number(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.boleto.update({
        where: { id: input.id },
        data: input,
      });
    }),
});
