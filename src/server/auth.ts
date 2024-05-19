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
import type { SerieBoleto, SerieEncomienda, Rol } from "@/types/auth";

declare module "next-auth" {
  interface User {
    nombres: string;
    apellidos: string;
    id: string;
    rol: Rol;
    serieBoleto: SerieBoleto;
    serieEncomienda: SerieEncomienda;
    foto: string;
  }
  interface JWT {
    id: string;
    nombres: string;
    apellidos: string;
    rol: Rol;
    serieBoleto: SerieBoleto;
    serieEncomienda: SerieEncomienda;
    foto: string;
  }
  interface Session {
    user: User & DefaultSession["user"];
    token: {
      name: string;
      id: string;
      nombres: string;
      apellidos: string;
      foto: string;
      rol: Rol;
      serieBoleto: SerieBoleto;
      serieEncomienda: SerieEncomienda;
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
        const userDisabled = await prisma.usuario.findUnique({
          where: {
            username: credentials.username,
            isDeleted: true,
          },
        });
        if (userDisabled) {
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
          rol: userFound.rol as Rol,
          serieEncomienda: userFound.serieEncomienda as SerieEncomienda,
          serieBoleto: userFound.serieBoleto as SerieBoleto,
          foto: userFound.foto,
        };
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      return {
        ...session,
        user: {
          ...session.user,
          nombres: token.nombres,
          apellidos: token.apellidos,
          foto: token.foto,
          serieBoleto: token.serieBoleto,
          serieEncomienda: token.serieEncomienda,
          id: token.id,
          rol: token.rol,
        },
      };
    },
    async jwt({ token, user }) {
      if (user)
        return {
          ...token,
          id: user.id,
          nombres: user.nombres,
          apellidos: user.apellidos,
          rol: user.rol,
          serieBoleto: user.serieBoleto,
          serieEncomienda: user.serieEncomienda,
          foto: user.foto,
        };
      return token;
    },
  },
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
