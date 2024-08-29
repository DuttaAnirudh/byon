import { createUser, getUser } from "@/app/_lib/data-service";
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

    const existingUser = await getUser(userInfo.email);

    let userData = userInfo;

    if (!existingUser) {
      const { data } = await createUser({
        email: userInfo.email,
      });
      userData = { ...userInfo, userId: data.at(0).id };
    }

    if (existingUser) {
      userData = { ...userInfo, userId: existingUser.id };
    }

    // Create a response object
    const newResponse = NextResponse.redirect(
      process.env.NEXT_PUBLIC_AUTH_SUCCESS_URL
    );

    // Set the token in a secure HTTP-only cookie
    newResponse.cookies.set("nylasAuth", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Only secure in production
      sameSite: "Strict", // Prevent CSRF attacks
      path: "/", // Make the cookie available across the site
      maxAge: 60 * 60 * 24,
    });

    // Set user session in a secure HTTP-only cookie
    newResponse.cookies.set("nylasSession", JSON.stringify(userData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return newResponse;
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(process.env.NEXT_PUBLIC_LOGIN_URL);
  }
}
