import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  // Example of a public procedure
  exayaVersion: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        currentVersion: `v ${input.text}`,
      };
    }),

  obtenerViajes: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.viajes.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
