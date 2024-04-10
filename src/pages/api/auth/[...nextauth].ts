import NextAuth from "next-auth";

import { authOptions } from "@/server/auth";

export default NextAuth({
  ...authOptions,
  secret: process.env.NEXTAUTH_SECRET,
});
