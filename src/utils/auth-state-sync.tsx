import { useSupabaseBrowser } from "@/contexts/SupabaseAuthContext";
import { api } from "@/utils/api";
import { useEffect } from "react";

/** Keeps tRPC `auth.session` in sync after Supabase token refresh / sign-in / sign-out. */
export function AuthStateSync() {
  const supabase = useSupabaseBrowser();
  const utils = api.useUtils();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      void utils.auth.session.invalidate();
    });
    return () => subscription.unsubscribe();
  }, [supabase, utils]);

  return null;
}
