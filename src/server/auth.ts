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
      username: string;
      image: string | null | undefined;
      nombres: string;
      rol: UserRole;
    } & DefaultSession["user"];
  }

  interface User {
    username: string;
  }
}

type TUser = {
  id: string;
  username: string;
  nombres: string;
  password: string;
  image: string | null | undefined;
  rol: string;
};

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
        session.user.username = user.username;
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
        username: { label: "username", type: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<TUser | null> {
        // Check if the credentials are present and not null
        if (!credentials?.username || !credentials.password) {
          return null;
        }

        try {
          // Fetch the user from the database
          const user = await prisma.usuario.findFirst({
            where: {
              username: credentials.username,
            },
            include: {
              cliente: true,
            },
          });
          //TODO: Use bcrypt to compare the passwords. For now, we'll just compare them directly and it is a bad practice. Is better to storing the password as a hash and then compare the hashes.
          // if (!user || !(await compare(credentials.password, user.password))) {
          //   return null;
          // }
          if (!user || credentials.password !== user.password) {
            return null;
          }
          return {
            id: user.id,
            password: user.password,
            nombres: user.cliente.nombres,
            username: user.username,
            image: user.foto,
            rol: user.rol,
          };
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
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
