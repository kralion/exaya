import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "@/utils/api";
import { useState } from "react";
import Head from "next/head";
import "@/styles/globals.css";
import locale from "antd/locale/es_ES";
import dayjs from "dayjs";
import "dayjs/locale/es";
import NextTopLoader from "nextjs-toploader";
import { ConfigProvider, theme } from "antd";
import ThemeToggle from "@/components/theme-toggle";
import { MenuProvider } from "@/context/MenuContext";
import { MessageProvider } from "@/context/MessageContext";
import EmptyCustomized from "@/components/ui/empty";
dayjs.locale("es");

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [theming, setTheming] = useState("defaultAlgorithm");
  return (
    <>
      <Head>
        <title>Exaya - Tu Solución Integral de Gestión de Transportes</title>
        <meta
          name="description"
          content="Optimiza la gestión de transporte de tu empresa con Exaya. Analíticas en tiempo real, seguridad, actualizaciones, soporte de primera e integrado con Inteligencia Artificial"
        />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
        />
        <meta
          property="og:title"
          content="Exaya - Solución de Gestión Empresarial a Medida"
        />
        <meta
          property="og:description"
          content="Optimiza la gestión de transporte de pasajeros con Exaya. Analíticas en tiempo real, seguridad, actualizaciones y soporte de primera."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.ibb.co/MftqMm5/Exaya-OG-Image.jpg"
        />
        <meta property="og:url" content="https://exaya.netlify.app" />
      </Head>
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
        <MenuProvider>
          <ThemeToggle setTheme={setTheming} />
          <SessionProvider session={session}>
            <NextTopLoader showSpinner={false} color="#f97316" />
            <Component {...pageProps} />
          </SessionProvider>
        </MenuProvider>
      </ConfigProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
