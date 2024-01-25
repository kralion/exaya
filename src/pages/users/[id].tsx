import { useSession } from "next-auth/react";
import Login from "@/pages/login";
import { getServerAuthSession } from "@/server/auth";
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  return {
    props: { session },
  };
};
export const User = () => {
  const { data: session } = useSession();

  if (!session) {
    // Handle unauthenticated state, e.g. render a SignIn component
    return <Login />;
  }

  return <div>Bienvenido User Name!</div>;
};
