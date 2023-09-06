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
    <SessionProvider session={session}>
      <Head>
        <title>Exaya</title>
        <meta name="Exaya" content="Transportations management service" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider locale={esEs}>
          <Component {...pageProps} />
        </ConfigProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
