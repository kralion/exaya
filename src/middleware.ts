export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/encomiendas/:path*",
    "/venta-pasajes/:path*",
    "/contable/:path*",
    "/administracion/:path*",
    "/soporte/:path*",
    "/programacion/:path*",
    "/api/:path*",
  ],
};
