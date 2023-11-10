import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { busSchema } from "@/schemas";

export const busesRouter = createTRPCRouter({
  getAllBuses: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.bus.findMany();
  }),
  createBus: publicProcedure
    .input(busSchema.omit({ id: true, createdAt: true }))
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
