/**
 * tRPC context for TanStack Start (Fetch API).
 * Session resolved from JWT cookie via getSessionFromRequest.
 */
import { prisma } from "@/server/db";
import { getSessionFromRequest } from "@/server/session";

export const createTRPCContext = async (opts: { request: Request }) => {
  const { request } = opts;
  const session = await getSessionFromRequest(request);

  return {
    session,
    prisma,
  };
};
