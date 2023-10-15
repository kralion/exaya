import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const versionRouter = createTRPCRouter({
  // Example of a public procedure
  exayaVersion: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        currentVersion: `v ${input.text}`,
      };
    }),

  getUserById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.usuario.findUnique({ where: { id: input.id } });
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
