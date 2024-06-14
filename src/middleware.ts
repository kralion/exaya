export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/encomiendas",
    "/programacion/:path*",
    "/contable",
    "/soporte",
    "/administracion",
    "/pasajes",
  ],
};
