export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/api/auth/callback/google", "/api/auth/signin/google"],
};
