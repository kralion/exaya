import { createServerClient } from "@supabase/ssr";
import { parse, serialize } from "cookie";

import { env } from "@/env.mjs";

export function createSupabaseServerClient(req: Request, resHeaders: Headers) {
  return createServerClient(
    env.VITE_SUPABASE_URL,
    env.VITE_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          const raw = req.headers.get("cookie") ?? "";
          const parsed = parse(raw);
          return Object.entries(parsed).map(([name, value]) => ({
            name,
            value: value ?? "",
          }));
        },
        setAll(cookiesToSet, headersFromSupabase) {
          for (const [key, value] of Object.entries(headersFromSupabase)) {
            resHeaders.set(key, value);
          }
          for (const { name, value, options } of cookiesToSet) {
            resHeaders.append("Set-Cookie", serialize(name, value, options));
          }
        },
      },
    }
  );
}
