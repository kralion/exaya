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
  getBoletosByCode: publicProcedure
    .input(z.object({ codigo: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.boleto.findUnique({ where: { id: input.codigo } });
    }),
  deleteBoletosByCode: protectedProcedure
    //todo: change id to string
    .input(z.object({ codigo: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.boleto.delete({ where: { id: input.codigo } });
    }),
  createBoletos: protectedProcedure
    .input(boletoSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.boleto.create({ data: input });
    }),
  updateBoletoByCode: protectedProcedure
    .input(boletoSchema)
    .mutation(({ input, ctx }) => {
      return ctx.prisma.boleto.update({
        where: { id: input.codigo },
        data: input,
      });
    }),
});
