import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "@/server/db";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import type { Adapter } from "next-auth/adapters";

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  }) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      // async authorize(credentials) {
      //   if (!credentials?.email || !credentials.password) {
      //     return null;
      //   }

      //   const user = await prisma.user.findUnique({
      //     where: {
      //       email: credentials.email,
      //     },
      //   });

      //   if (!user || !(await compare(credentials.password, user.password!))) {
      //     return null;
      //   }

      //   return {
      //     id: user.id,
      //     email: user.email,
      //     name: user.name,
      //     randomKey: "Hey cool",
      //   };
      // },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = {
          id: "1",
          email: "admin@admin.com",
          password: "password",
        };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
