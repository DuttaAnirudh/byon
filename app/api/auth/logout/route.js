import { NextResponse } from "next/server";

export async function GET() {
  // Create a response object to redirect the user
  const response = NextResponse.redirect(process.env.NEXT_PUBLIC_HOME_URL);

  // Clear the 'nylasAuth' and 'nylasSession' cookies
  response.cookies.set("nylasAuth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    path: "/",
    expires: new Date(0), // Expire the cookie immediately
  });

  response.cookies.set("nylasSession", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    path: "/",
    expires: new Date(0), // Expire the cookie immediately
  });

  return response;
}
