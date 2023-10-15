import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const viajesRouter = createTRPCRouter({
  getAllViajes: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.viaje.findMany();
  }),
  getViajesById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.viaje.findUnique({ where: { id: input.id } });
    }),
});
