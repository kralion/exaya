import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/env.mjs";
import { prisma } from "@/server/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */

type UserRole = "ADMIN" | "USUARIO" | "SUPERVISOR";
declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      id: string;
      name: string | null | undefined;
      email: string;
      image: string | null | undefined;
      role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.email = user.email;
        session.user.name = user.name;
        session.user.image = user.image;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Verificar si las credenciales están presentes y no son nulas
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // Definir el usuario con sus datos
        const user = {
          id: "3",
          email: "admin@admin.com",
          name: "Sergio Vargas",
          password: "password123", // Esta contraseña es solo para fines de demostración. No la uses en producción.
          image: "https://randomuser.me/api/portraits/men/95.jpg",
          role: "ADMIN",
        };

        const passwordMatch = await compare(
          credentials.password,
          user.password
        );

        // Verificar si las credenciales coinciden con el usuario 'admin@admin.com'
        if (credentials.email !== user.email && passwordMatch) {
          return null;
        }

        // Si las credenciales son correctas, devolver los datos del usuario
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role,
        };
      },
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
