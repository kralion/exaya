import AppLayout from "@/components/common/layout";
import { RequireAuth } from "@/shared/auth/require-auth";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: AppShellLayout,
});

function AppShellLayout() {
  return (
    <RequireAuth>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </RequireAuth>
  );
}
