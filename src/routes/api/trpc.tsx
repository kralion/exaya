import { createFileRoute } from "@tanstack/react-router";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";

function trpcHandler(request: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req: request,
    createContext: ({ req, resHeaders }) =>
      createTRPCContext({ req, resHeaders }),
  });
}

export const Route = createFileRoute("/api/trpc")({
  server: {
    handlers: {
      GET: ({ request }: { request: Request }) => trpcHandler(request),
      POST: ({ request }: { request: Request }) => trpcHandler(request),
    },
  },
});
