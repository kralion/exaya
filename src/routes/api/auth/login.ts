import { createFileRoute } from "@tanstack/react-router";
import {
  authorizeUser,
  createSessionToken,
  createSessionCookie,
} from "@/server/session";

export const Route = createFileRoute("/api/auth/login")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (request.method !== "POST") {
          return new Response(JSON.stringify({ error: "Method not allowed" }), {
            status: 405,
            headers: { "Content-Type": "application/json" },
          });
        }

        let body: { username?: string; password?: string };
        try {
          body = (await request.json()) as { username?: string; password?: string };
        } catch {
          return new Response(
            JSON.stringify({ error: "Invalid JSON body" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
          );
        }

        const { username, password } = body;
        if (!username || !password) {
          return new Response(
            JSON.stringify({
              error: "Debes ingresar un usuario y una contraseña",
            }),
            { status: 400, headers: { "Content-Type": "application/json" } }
          );
        }

        const user = await authorizeUser(username, password);
        if (!user) {
          return new Response(
            JSON.stringify({
              error:
                "Usuario no encontrado o credenciales incorrectas. Verifica las credenciales ingresadas.",
            }),
            { status: 401, headers: { "Content-Type": "application/json" } }
          );
        }

        const token = await createSessionToken(user);
        const cookie = createSessionCookie(token);

        return new Response(
          JSON.stringify({ ok: true, user: { id: user.id, name: user.name } }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
              "Set-Cookie": cookie,
            },
          }
        );
      },
    },
  },
});
