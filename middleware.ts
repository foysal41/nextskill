import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware:", request.nextUrl.pathname);
  const session = request.cookies.get("better-auth.session_token");
   console.log("Session:", session);

  const isLoggedIn = !!session;

  const pathname = request.nextUrl.pathname;

  const protectedRoutes = [
    "/dashboard",
    "/courses/add-course",
    "/courses/manage-courses",
  ];

  const authRoutes = [
    "/auth/login",
    "/auth/register",
  ];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isAuthPage = authRoutes.some((route)=>
      pathname.startsWith(route)
  );

 if (isProtected && !isLoggedIn) {
  return NextResponse.redirect(new URL("/auth/login", request.url));
}

  if(isLoggedIn && isAuthPage){
      return NextResponse.redirect(new URL("/",request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/courses/add-course/:path*",
    "/courses/manage-courses/:path*",
    "/auth/login",
    "/auth/register",
  ],
};