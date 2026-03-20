import { createFileRoute } from "@tanstack/react-router";
import { getSessionFromRequest } from "@/server/session";

export const Route = createFileRoute("/api/auth/session")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const session = await getSessionFromRequest(request);
        return new Response(
          JSON.stringify(session ? { session } : { session: null }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        );
      },
    },
  },
});
