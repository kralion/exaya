import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const versionRouter = createTRPCRouter({
  exayaVersion: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        currentVersion: `v ${input.text}`,
      };
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
