import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { busSchema } from "@/schemas";
import { z } from "zod";

export const busesRouter = createTRPCRouter({
  getAllBuses: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.bus.findMany();
  }),
  createBus: publicProcedure
    .input(
      z.object({
        ...busSchema.shape,
        id: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.bus.create({
          data: input,
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
