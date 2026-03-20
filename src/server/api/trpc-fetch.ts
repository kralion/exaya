/**
 * tRPC context for TanStack Start (Fetch API).
 * Session resolution will be implemented in Phase 2 (Auth migration).
 */
import { prisma } from "@/server/db";

export const createTRPCContext = async (opts: { request: Request }) => {
  const { request } = opts;

  // TODO Phase 2: Resolve session from Request (cookies/JWT)
  // For now, session is null until auth is migrated
  const session = null;

  return {
    session,
    prisma,
  };
};
