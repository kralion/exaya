import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "@/utils/api";
import Head from "next/head";
import "@/styles/globals.css";
import esEs from "antd/locale/es_ES";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { ConfigProvider } from "antd";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

dayjs.locale("es");

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
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
          content="Exaya - Tu Solución de Gestión de Transporte"
        />
        <meta
          property="og:description"
          content="Optimiza la gestión de transporte de pasajeros con Exaya. Analíticas en tiempo real, seguridad, actualizaciones y soporte de primera."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
        />
        <meta property="og:url" content="https://github.com/Dv-Joan/exaya" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          locale={esEs}
          theme={{
            token: {
              colorPrimary: "#FAAD14",
            },
          }}
        >
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </ConfigProvider>
      </QueryClientProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
