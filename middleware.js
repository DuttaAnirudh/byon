import { NextResponse } from "next/server";

export default function Middleware(request) {
  // Retrieve the token from cookies
  const token = request.cookies.get("nylasAuth");

  // Define the restricted paths
  const protectedPaths = ["/events"];

  // Check if the current request is for a protected path
  if (protectedPaths.includes(request.nextUrl.pathname)) {
    // If the token is not present, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Continue to the requested page if authenticated or not a protected route
  return NextResponse.next();
}

export const config = {
  matcher: ["/events"],
};
