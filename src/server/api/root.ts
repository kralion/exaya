import { createTRPCRouter } from "@/server/api/trpc";
import {
  boletosRouter,
  clientesRouter,
  viajesRouter,
  rutasRouter,
  busesRouter,
  usuariosRouter,
  conductoresRouter,
  encomiendasRouter,
  sedesRouter,
} from "@/server/api/routers";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  boletos: boletosRouter,
  viajes: viajesRouter,
  rutas: rutasRouter,
  usuarios: usuariosRouter,
  encomiendas: encomiendasRouter,
  sedes: sedesRouter,
  buses: busesRouter,
  clientes: clientesRouter,
  conductores: conductoresRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
