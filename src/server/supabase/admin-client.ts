import { createClient } from "@supabase/supabase-js";

import { env } from "@/env.mjs";

export function createSupabaseAdminClient() {
  return createClient(env.VITE_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
