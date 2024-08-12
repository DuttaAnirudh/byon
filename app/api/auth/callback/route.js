import { nylas } from "@/app/_lib/nylas";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);

  const exchangeCode = url.searchParams.get("code");

  if (!exchangeCode) {
    throw new Error("No authorization code returned from Nylas");
  }

  try {
    const response = await nylas.auth.exchangeCodeForToken({
      clientSecret: process.env.NYLAS_CLIENT_SECRET,
      clientId: process.env.NYLAS_CLIENT_ID,
      code: exchangeCode,
      redirectUri: process.env.NYLAS_CALLBACK_URI,
    });

    const { idToken: token, ...userInfo } = response;

    // Create a response object
    const newResponse = NextResponse.redirect(
      "http://localhost:3000/auth/success"
    );

    // Set the token in a secure HTTP-only cookie
    newResponse.cookies.set("nylasAuth", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Only secure in production
      sameSite: "Strict", // Prevent CSRF attacks
      path: "/", // Make the cookie available across the site
      maxAge: 60 * 60 * 24, // Cookie expires in 7 days
    });

    // Set user session in a secure HTTP-only cookie
    newResponse.cookies.set("nylasSession", JSON.stringify(userInfo), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return newResponse;
  } catch (error) {
    console.error(error);
    return NextResponse.redirect("http://localhost:3000/login");
  }
}
