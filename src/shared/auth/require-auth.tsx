import { useSession } from "@/hooks/use-session";
import { Navigate } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function RequireAuth({ children }: { children: ReactNode }) {
  const { status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (status === "unauthenticated") {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
