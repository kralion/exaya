import { useSupabaseBrowser } from "@/contexts/SupabaseAuthContext";
import { api } from "@/utils/api";

/** Replaces `next-auth/react` `useSession` for Supabase-backed sessions. */
export function useSession() {
  const { data: session, isLoading, isFetching } = api.auth.session.useQuery(
    undefined,
    { staleTime: 60_000 }
  );

  const status =
    isLoading || isFetching
      ? "loading"
      : session?.user
        ? "authenticated"
        : "unauthenticated";

  return { data: session, status };
}

export function useSignOut() {
  const supabase = useSupabaseBrowser();
  const utils = api.useUtils();

  return async () => {
    await supabase.auth.signOut();
    await utils.auth.session.invalidate();
    window.location.href = "/";
  };
}
