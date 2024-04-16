/* eslint-disable @typescript-eslint/require-await */
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/server/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "@/env.mjs";
import { compare } from "bcrypt";

declare module "next-auth" {
  interface User {
    nombres: string;
    apellidos: string;
    rol: string;
    foto: string;
  }
  interface Session {
    user: User & DefaultSession["user"];
    token: {
      name: string;
      nombres: string;
      apellidos: string;
      foto: string;
      rol: string;
    };
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  secret: env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.username || !credentials.password) {
          return null;
        }
        const userFound = await prisma.usuario.findUnique({
          where: {
            username: credentials.username,
          },
        });
        if (!userFound) {
          return null;
        }

        const matchPassword = await compare(
          credentials.password,
          userFound.password
        );

        if (!matchPassword) {
          return null;
        }

        return {
          id: userFound.id,
          nombres: userFound.nombres,
          apellidos: userFound.apellidos,
          rol: userFound.rol,
          foto: userFound.foto,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          nombres: user.nombres,
          apellidos: user.apellidos,
          foto: user.foto,
          rol: user.rol,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          nombres: token.nombres,
          apellidos: token.apellidos,
          foto: token.foto,
          rol: token.rol,
        },
      };
    },
  },
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
