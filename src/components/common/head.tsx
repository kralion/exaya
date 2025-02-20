import Head from "next/head";
import React from "react";
type Props = {
  title: string;
};

export default function AppHead({ title }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Desarrollado por Brayan Joan" />
      <link
        rel="icon"
        href="https://cdn-icons-png.flaticon.com/128/10351/10351661.png"
      />
    </Head>
  );
}
