import { NextResponse } from "next/server";
import { parseAuthCookie, verifyJwt } from "./utils/jwt";

export async function middleware(request) {
  const token = parseAuthCookie(request.headers.get("cookie"));
  const pathname = request.nextUrl.pathname;

  // Proteksi route admin
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    const payload = await verifyJwt(token);
    if (!payload || payload.role !== "admin") {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("authToken");
      return response;
    }
  }

  // Jika sudah login admin, redirect dari /login ke /dashboard
  if (pathname === "/login") {
    if (token) {
      const payload = await verifyJwt(token);
      if (payload && payload.role === "admin") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    }
  }

  // Bebas akses route lain tanpa login
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
