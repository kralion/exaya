import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Provider } from "next-auth/providers";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
};

export default NextAuth(authOptions);
