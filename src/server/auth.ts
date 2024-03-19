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
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user,
    }),
  },
  pages: {
    signIn: "/login",
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

          if (!userFound) throw new Error("Usuario no Encontrado");

          // const matchPassword = await compare(
          //   credentials.password,
          //   userFound.password
          // );

          // if (!matchPassword) throw new Error("Contraseña Incorrecta");

          console.log("userFound", userFound);
          return {
            id: userFound.id,
            username: userFound.username,
            rol: userFound.rol,
            password: userFound.password,
            foto: userFound.foto,
          };
        } catch (error) {
          console.error("Error during authorization:", error);
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
