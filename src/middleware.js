import createMiddleware from "next-intl/middleware";

import locales from "@/config/locales";

export default createMiddleware({
  locales: locales.map(({ code }) => code),
  defaultLocale: "en",
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
