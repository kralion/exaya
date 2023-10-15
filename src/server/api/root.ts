import { createTRPCRouter } from "@/server/api/trpc";
import { exampleRouter, boletosRouter } from "@/server/api/routers";
import { viajeRouter } from "./routers/viajes";
import { rutaRouter } from "./routers/rutas";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  boletos: boletosRouter,
  viajes: viajeRouter,
  ruta: rutaRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
