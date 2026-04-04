import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const authRouter = createTRPCRouter({
  session: publicProcedure.query(({ ctx }) => ctx.session),
});
