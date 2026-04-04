import { MenuProvider } from "@/contexts/MenuContext";
import { MessageProvider } from "@/contexts/MessageContext";
import Notification from "@/contexts/notification";
import ThemeToggle from "@/components/common/theme-toggle";
import EmptyCustomized from "@/components/common/empty";
import { TrpcProvider } from "@/utils/trpc-provider";
import "../styles/globals.css";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { ConfigProvider, theme } from "antd";
import locale from "antd/locale/es_ES";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { useState, type ReactNode } from "react";
dayjs.locale("es");

function RootLayout({ children }: { children: ReactNode }) {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [theming, setTheming] = useState("defaultAlgorithm");

  return (
    <>
      <HeadContent />
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
          token: {
            colorPrimary: "#FAAD14",
          },
          algorithm: theming === "dark" ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        <TrpcProvider>
          <MenuProvider>
            <MessageProvider>
              <Notification />
              <ThemeToggle setTheme={setTheming} />
              {children}
            </MessageProvider>
          </MenuProvider>
        </TrpcProvider>
      </ConfigProvider>
      <Scripts />
    </>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        title:
          "Exaya - Tu Solución Integral de Gestión de Transportes",
      },
      {
        name: "description",
        content:
          "Optimiza la gestión de transporte de tu empresa con Exaya. Analíticas en tiempo real, seguridad, actualizaciones, soporte de primera e integrado con Inteligencia Artificial",
      },
      {
        property: "og:title",
        content: "Exaya - Solución de Gestión Empresarial a Medida",
      },
      {
        property: "og:description",
        content:
          "Optimiza la gestión de transporte de pasajeros con Exaya. Analíticas en tiempo real, seguridad, actualizaciones y soporte de primera.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://i.ibb.co/MftqMm5/Exaya-OG-Image.jpg",
      },
      { property: "og:url", content: "https://exaya.vercel.app" },
    ],
    links: [
      {
        rel: "icon",
        href: "https://cdn-icons-png.flaticon.com/128/10351/10351661.png",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Dancing+Script:wght@700&family=Inter:wght@300;600;800&display=swap",
      },
    ],
  }),
  component: () => (
    <RootLayout>
      <Outlet />
    </RootLayout>
  ),
});
