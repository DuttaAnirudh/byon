import { nylas } from "@/app/_lib/nylas";
import { supabase } from "@/app/_lib/supabase";
import { dateTimeToTimestamp } from "@/app/_lib/utils";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {
    grantId,
    userId,
    hostEmail,
    mailData,
    subject: emailSubject,
    message,
    date,
    time,
    eventId,
  } = await req.json();
  ////////////////////////////////////
  ////////////////////////////////////
  // SCEHDULE AN EMAIL FOR ONE DAY BEFORE THE EVENT

  // Getting the Timestamp for scheduling email
  const sendEmailAt = dateTimeToTimestamp(date, time);
  console.log(sendEmailAt);

  // Scheduling the email using nylas api
  const sentScheduledMessage = await nylas.messages.send({
    identifier: grantId,
    requestBody: {
      to: [{ name: "To All Attendees", email: hostEmail }],
      bcc: mailData,
      subject: emailSubject,
      body: message,
      send_at: sendEmailAt,
    },
  });

  const { scheduleId, sendAt, subject, body, ...others } =
    sentScheduledMessage.data;

  const scheduledEmailData = {
    scheduleId,
    sendAt,
    subject,
    body,
    userId,
    eventId,
  };

  const { error } = await supabase
    .from("scheduledEmails")
    .insert([scheduledEmailData])
    .select();

  if (error) {
    console.error(error);
    throw new Error("There was an Error scheduling event");
  }

  revalidatePath("/send-mail");

  return NextResponse.json(scheduledEmailData);
}
