import {
  Outlet,
  createRootRoute,
  HeadContent,
  Link,
  Scripts,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import locale from "antd/locale/es_ES";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { api, getTRPCClientConfig } from "@/utils/api";
import EmptyCustomized from "@/components/common/empty";
import ThemeToggle from "@/components/common/theme-toggle";
import { MenuProvider } from "@/context/MenuContext";
import { SessionProvider } from "@/context/SessionContext";
import "@/styles/globals.css";

dayjs.locale("es");

const queryClient = new QueryClient();
const trpcClient = api.createClient(getTRPCClientConfig());

function NotFoundComponent() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="px-4 lg:py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-9xl font-bold text-orange-600">404</h1>
          <p className="mb-2 text-center text-2xl font-bold text-gray-800">
            Página no encontrada
          </p>
          <Link
            to="/"
            className="mt-4 rounded-lg bg-orange-100 px-6 py-2 text-orange-600 hover:bg-orange-200"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [theming, setTheming] = useState<"defaultAlgorithm" | "dark">("defaultAlgorithm");

  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <api.Provider client={trpcClient} queryClient={queryClient}>
          <SessionProvider>
          <ConfigProvider
            locale={locale}
            renderEmpty={() => <EmptyCustomized />}
            theme={{
              components: {
                Slider: {
                  handleColor: "#d9d9d9",
                  handleActiveColor: "#8c8c8c",
                  handleSizeHover: 10,
                },
              },
              token: { colorPrimary: "#FAAD14" },
              algorithm: theming === "dark" ? darkAlgorithm : defaultAlgorithm as typeof defaultAlgorithm,
            }}
          >
            <MenuProvider>
              <ThemeToggle setTheme={setTheming} />
              <Outlet />
            </MenuProvider>
          </ConfigProvider>
          </SessionProvider>
        </api.Provider>
      </QueryClientProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
