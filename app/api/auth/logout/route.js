import { NextResponse } from "next/server";

export async function GET(request) {
  const response = NextResponse.redirect("/login");

  // Remove the token cookie
  response.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    path: "/",
    maxAge: 0, // Expire the cookie immediately
  });

  return response;
}
