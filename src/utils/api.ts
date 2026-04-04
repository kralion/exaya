/**
 * Client-side tRPC + React Query hooks for TanStack Start (replaces @trpc/next).
 */
import { createTRPCReact } from "@trpc/react-query";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import type { TRPCClientErrorLike } from "@trpc/client";

import { type AppRouter } from "@/server/api/root";

export const api = createTRPCReact<AppRouter>();

export type AppTRPCClientError = TRPCClientErrorLike<AppRouter>;

export type RouterInputs = inferRouterInputs<AppRouter>;

export type RouterOutputs = inferRouterOutputs<AppRouter>;
