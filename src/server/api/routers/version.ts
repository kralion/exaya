import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const versionRouter = createTRPCRouter({
  exayaVersion: publicProcedure
    .input(z.object({ version: z.number() }))
    .query(({ input }) => {
      return {
        currentVersion: input.version,
      };
    }),
});
