import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";
import Head from 'next/head'
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Exaya</title>
        <meta name="description" content="This is my app's description." />
        <link rel="icon" href="https://img.icons8.com/?size=1x&id=l6Tcv6hLPzY9&format=png" />
      </Head>

      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
