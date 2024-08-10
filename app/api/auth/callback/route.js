import { nylas } from "@/app/_lib/nylas";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  console.log(url);

  const exchangeCode = url.searchParams.get("code");
  console.log("CODE:", exchangeCode);

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
    console.log("RESPONSE:", response);

    const { grantId, idToken: token } = response;

    // Create a response object
    const newResponse = NextResponse.redirect("http://localhost:3000/events");

    // Set the token in a secure HTTP-only cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Only secure in production
      sameSite: "Strict", // Prevent CSRF attacks
      path: "/", // Make the cookie available across the site
      maxAge: 60 * 60 * 24, // Cookie expires in 7 days
    });

    return newResponse;
  } catch (error) {
    console.error("Error exchanging code for token:", error);
    // res.status(500).send("Failed to exchange authorization code for token");
    return NextResponse.redirect("http://localhost:3000/login");
  }
}
