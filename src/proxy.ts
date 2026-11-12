import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

export const proxy = async (request: NextRequest) => {
  const sessionCookie = getSessionCookie(request);

  // console.log(request.nextUrl.pathname);

  const isPublicPath =
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register");

  // THIS IS NOT SECURE!
  // This is the recommended approach to optimistically redirect users
  // We recommend handling auth checks in each page/route
  if (!isPublicPath && !sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isPublicPath && sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/profile", "/profile/edit-user", "/login", "/register"], // Specify the routes the middleware applies to
};
