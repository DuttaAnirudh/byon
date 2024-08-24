import { nylas } from "@/app/_lib/nylas"; // Ensure you've correctly set up and imported the Nylas SDK
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { mailData, grantId, subject, message, hostEmail } = await req.json();
    console.log(mailData);
    const sentMessage = await nylas.messages.send({
      identifier: grantId,
      requestBody: {
        to: [{ name: "Attendees", email: hostEmail }],
        bcc: mailData,
        subject,
        body: message,
      },
    });

    return NextResponse.json(sentMessage);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to Send Emails" },
      { status: 500 }
    );
  }
}
