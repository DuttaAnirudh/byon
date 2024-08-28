import { nylas } from "@/app/_lib/nylas";
import { supabase } from "@/app/_lib/supabase";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { grantId, scheduleId } = await req.json();

  const result = await nylas.messages.stopScheduledMessage({
    identifier: grantId,
    scheduleId: scheduleId,
  });

  const { error } = await supabase
    .from("scheduledEmails")
    .delete()
    .eq("scheduleId", scheduleId);

  if (error) {
    throw new Error("There was an error deleting scheduled email");
  }

  revalidatePath("/send-mail");

  return NextResponse.json(result);
}
