import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_BASE_URL || "",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export default withAuth(
  function middleware(req) {
    const { nextUrl, nextauth } = req;
    const { pathname } = nextUrl;
    const { token } = nextauth;

    if (token && pathname === "/sign-in") {
      return NextResponse.redirect(new URL("/", req.url));
    }
    if (pathname.startsWith("/api") && !token) {
      return NextResponse.json({ mesaage: "unauthenticated" }, { status: 401 });
    }
    return NextResponse.next({ headers: corsHeaders });
  },
  {
    callbacks: {
      authorized: ({ token, req }) =>
        !!token ||
        req.nextUrl.pathname.startsWith("/api") ||
        req.nextUrl.pathname.startsWith("/sign-in") ||
        req.nextUrl.pathname.startsWith("/sign-up"),
    },
  }
);

export const config = {
  matcher: "/((?!api|_next|static|public|favicon.ico).*)",
};
