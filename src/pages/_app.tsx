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
          href="https://img.icons8.com/?size=1x&id=l6Tcv6hLPzY9&format=png"
        />
      </Head>
      <ConfigProvider locale={esEs}>
        <Component {...pageProps} />
      </ConfigProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
