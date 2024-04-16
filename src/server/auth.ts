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

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      username: string;
      nombres: string;
      apellidos: string;
      rol: UserRole;
      password: string;
      foto: string | null;
    };
  }

  enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  pages: {
    signIn: "/login",
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
        //TODO: Implementar encriptación de contraseñas

        const matchPassword = userFound?.password === credentials.password;

        if (userFound && matchPassword) {
          console.log("USUARIO ENCONTRADO", userFound);
          return Promise.resolve({
            id: userFound.id,
            nombres: userFound.nombres,
            apellidos: userFound.apellidos,
            rol: userFound.rol,
            foto: userFound.foto,
          });
        } else {
          return Promise.resolve(null);
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
