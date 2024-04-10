import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/server/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";

type TUser = {
  id: string;
  username: string;
  rol: string;
  password: string;
  foto: string | null;
};

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: TUser;
  }
}

export const authOptions: NextAuthOptions = {
  debug: true,
  pages: {
    signIn: "/login",
    signOut: "/login",
  },

  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<TUser | null> {
        if (!credentials?.username || !credentials.password) {
          return null;
        }
        try {
          const userFound = await prisma.usuario.findUnique({
            where: {
              username: credentials.username,
            },
          });

          if (!userFound) throw new Error("Error al encontrar usuario");
          if (credentials.password !== userFound.password)
            throw new Error("Contraseña Incorrecta");

          return {
            id: userFound.id,
            username: userFound.username,
            rol: userFound.rol,
            password: userFound.password,
            foto: userFound.foto,
          };
        } catch (error) {
          console.error("Error de Autorización:", error);
          return null;
        }
      },
    }),
  ],
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
