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
import type { Rol } from "@/types/auth";
import { TRPCError } from "@trpc/server";

declare module "next-auth" {
  interface User {
    nombres: string;
    apellidos: string;
    id: string;
    rol: Rol;
    sedeId: string;
    foto: string;
  }
  interface JWT {
    id: string;
    nombres: string;
    apellidos: string;
    rol: Rol;
    sedeId: string;
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
      sedeId: string;
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
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Debes ingresar un usuario y una contraseña",
          });
        }

        // const userFound = {
        //   id: "1225",
        //   nombres: "Brayan",
        //   apellidos: "Santos",
        //   rol: "ADMIN",
        //   sedeId: "1234",
        //   foto: "",
        // };

        const userFound = await prisma.usuario.findUnique({
          where: {
            username: credentials.username,
          },
        });
        if (!userFound) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message:
              "Usuario no encontrado, verifica las credenciales ingresadas",
          });
        }
        const userDisabled = await prisma.usuario.findUnique({
          where: {
            username: credentials.username,
            isDeleted: true,
          },
        });
        if (userDisabled) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message:
              "Estas credenciales han sido deshabilitadas para acceder al sistema",
          });
        }
        const matchPassword = await compare(
          credentials.password,
          userFound.password
        );
        if (!matchPassword) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message:
              "Verifica las credenciales ingresadas, recuerda que son precreadas",
          });
        }

        return {
          id: userFound.id,
          nombres: userFound.nombres,
          apellidos: userFound.apellidos,
          rol: userFound.rol as Rol,
          sedeId: userFound.sedeId,
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
          sedeId: token.sedeId,
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
          sedeId: user.sedeId,
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
