/**
 * tRPC client for TanStack Start.
 * Uses @trpc/react-query with httpBatchLink (replaces @trpc/next).
 */
import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink } from "@trpc/client";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import superjson from "superjson";
import { type AppRouter } from "@/server/api/root";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser uses relative URL
  return import.meta.env.VITE_APP_URL ?? "http://localhost:3000";
};

export const api = createTRPCReact<AppRouter>();

export const getTRPCClientConfig = () => ({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
