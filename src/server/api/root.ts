import { createTRPCRouter } from "@/server/api/trpc";
import {
  versionRouter,
  boletosRouter,
  clientesRouter,
  viajesRouter,
  rutasRouter,
  busesRouter,
  conductoresRouter,
} from "@/server/api/routers";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  version: versionRouter,
  boletos: boletosRouter,
  viajes: viajesRouter,
  rutas: rutasRouter,
  buses: busesRouter,
  clientes: clientesRouter,
  conductores: conductoresRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
