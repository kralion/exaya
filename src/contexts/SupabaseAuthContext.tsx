import { createBrowserClient } from "@supabase/ssr";
import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

import type { SupabaseClient } from "@supabase/supabase-js";

const SupabaseContext = createContext<SupabaseClient | null>(null);

export function SupabaseAuthProvider({ children }: { children: ReactNode }) {
  const client = useMemo(
    () =>
      createBrowserClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_ANON_KEY
      ),
    []
  );

  return (
    <SupabaseContext.Provider value={client}>{children}</SupabaseContext.Provider>
  );
}

export function useSupabaseBrowser(): SupabaseClient {
  const ctx = useContext(SupabaseContext);
  if (!ctx) {
    throw new Error("useSupabaseBrowser must be used within SupabaseAuthProvider");
  }
  return ctx;
}
