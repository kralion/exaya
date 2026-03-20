import { createFileRoute } from "@tanstack/react-router";
import { createSessionClearCookie } from "@/server/session";

export const Route = createFileRoute("/api/auth/logout")({
  server: {
    handlers: {
      POST: async () => {
        const cookie = createSessionClearCookie();
        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Set-Cookie": cookie,
          },
        });
      },
    },
  },
});
