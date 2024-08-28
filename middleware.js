import { NextResponse } from "next/server";

export default function Middleware(request) {
  // Retrieve the token from cookies
  const token = request.cookies.get("nylasAuth");

  // Get the pathname from the request
  const { pathname } = request.nextUrl;

  // Define the restricted paths
  const protectedPaths = [
    "/events",
    "/account",
    "/account/activity",
    "/new-event",
    "/send-mail",
    "/manage",
  ];

  // Check if the current path is one of the protected paths
  const isProtectedRoute = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  // If the route is protected and the user is not authenticated, redirect to login
  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/login", request.nextUrl);
    return NextResponse.redirect(loginUrl);
  }

  // Continue to the requested page if authenticated or not a protected route
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/events",
    "/account",
    "/account/activity",
    "/send-mail",
    "/new-event",
    "/manage",
  ],
};
