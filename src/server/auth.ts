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

enum SerieBoleto {
  AG001 = "AG001",
  AG002 = "AG002",
  AG003 = "AG003",
  AG004 = "AG004",
  AG005 = "AG005",
  AG006 = "AG006",
  AG007 = "AG007",
  AG008 = "AG008",
  AG009 = "AG009",
  AG010 = "AG010",
}

enum SerieEncomienda {
  EAG001 = "EAG001",
  EAG002 = "EAG002",
  EAG003 = "EAG003",
  EAG004 = "EAG004",
  EAG005 = "EAG005",
  EAG006 = "EAG006",
  EAG007 = "EAG007",
  EAG008 = "EAG008",
  EAG009 = "EAG009",
  EAG010 = "EAG010",
}

declare module "next-auth" {
  interface User {
    nombres: string;
    apellidos: string;
    id: string;
    rol: string;
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
      rol: string;
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
          serieEncomienda: userFound.serieEncomienda as SerieEncomienda,
          serieBoleto: userFound.serieBoleto as SerieBoleto,
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
          serieBoleto: user.serieBoleto,
          serieEncomienda: user.serieEncomienda,
          id: user.id,
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
          serieBoleto: token.serieBoleto,
          serieEncomienda: token.serieEncomienda,
          id: token.id,
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
