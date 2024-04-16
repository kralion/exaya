export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/contable",
    "/programacion/:path*",
    "/encomiendas",
    "/pasajes",
    "/soporte",
  ],
};
