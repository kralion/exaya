import { withAuth } from "next-auth/middleware";

const authenticatedPages = ["/dashboard", "/contable", "/pasajes"];

export default withAuth({
  callbacks: {
    authorized: ({ req }) => {
      const isAuthPage = authenticatedPages.includes(req.nextUrl.pathname);

      if (isAuthPage) {
        return true;
      }

      return req.nextUrl.pathname === "/encomiendas/rastreo";
    },
  },
});

export const config = {
  matcher: function (path: string) {
    if (path === "/encomiendas/rastreo") {
      return true;
    }

    return authenticatedPages.includes(path);
  },
};
