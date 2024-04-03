export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/brands")) {
    return NextResponse.rewrite(new URL("/", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/help-center")) {
    return NextResponse.rewrite(new URL("/", request.url));
  }
}

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
