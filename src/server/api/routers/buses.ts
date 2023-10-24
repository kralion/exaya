import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { busSchema } from "@/schemas";

export const busesRouter = createTRPCRouter({
  getAllBuses: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.bus.findMany();
  }),
});
