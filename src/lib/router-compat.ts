/**
 * Compatibility layer for components that used next/navigation.
 * Use TanStack Router's useNavigate and useParams instead.
 */
import { useNavigate as useTanstackNavigate, useParams } from "@tanstack/react-router";

export function useRouter() {
  const navigate = useTanstackNavigate();
  return {
    push: (url: string) => navigate({ to: url }),
    back: () => window.history.back(),
  };
}

export { useParams };
