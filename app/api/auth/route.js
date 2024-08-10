import { nylas } from "@/app/_lib/nylas";
import { NextResponse } from "next/server";

export async function GET() {
  const authUrl = nylas.auth.urlForOAuth2({
    clientId: process.env.NYLAS_CLIENT_ID,
    provider: "google",
    redirectUri: process.env.NYLAS_CALLBACK_URI,
    scopes: ["email.read_only", "contacts.read_only"],
  });
  return NextResponse.redirect(authUrl);
}
