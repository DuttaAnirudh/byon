import { nylas } from "@/app/_lib/nylas"; // Ensure you've correctly set up and imported the Nylas SDK
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { customerName, customerEmail, grantId, subject, message } =
      await req.json();

    const sentMessage = await nylas.messages.send({
      identifier: grantId,
      requestBody: {
        to: [{ name: customerName, email: customerEmail }],
        subject,
        body: message,
      },
    });

    return NextResponse.json(sentMessage);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to Send an email" },
      { status: 500 }
    );
  }
}
