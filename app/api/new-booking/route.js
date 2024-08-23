import { getUser } from "@/app/_lib/data-service";
import { nylas } from "@/app/_lib/nylas"; // Ensure you've correctly set up and imported the Nylas SDK
import { supabase } from "@/app/_lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { recipientEmail, grantId, event } = await req.json();

    // Fetch USER DATA
    const user = await getUser(recipientEmail);

    // CANCEL BOOKING IF USER HAS NOT UPDATED HIS FULLNAME
    if (user.fullName === "" || !user.fullName) {
      const error = new Error(
        "Please update your profile to continue with this booking"
      );
      error.statusCode = 400;
      throw error;
    }

    ////////////////////////////////////
    ////////////////////////////////////
    // CREATING A NEW BOOKING
    const bookingData = {
      customerName: user.fullName,
      customerEmail: recipientEmail,
      price: event.price,
      eventName: event.name,
      eventDate: event.date,
      city: event.city,
      location: event.location,
      eventId: event.id,
      customerId: user.id,
    };

    const { error } = await supabase
      .from("bookings")
      .insert([bookingData])
      .select();

    if (error) {
      const error = new Error("There was error booking your pass :(");
      throw error;
    }

    ////////////////////////////////////
    ////////////////////////////////////
    // SENDING A CONFIRMATION MAIL

    // DECLARE 'BODY' AND 'SUBJECT' FOR EMAIL
    const subject = "Your Party Pass is Confirmed! - BYON";
    const body = `Hi ${user.fullName},

Great news—your pass for ${event.name} is confirmed! We're excited to have you join us for an unforgettable time.`;

    // SEND A CONFIRMATION MAIL TO USER EMAIL ID
    const sentMessage = await nylas.messages.send({
      identifier: grantId,
      requestBody: {
        to: [{ name: user.fullName, email: recipientEmail }],
        subject: subject,
        body: body,
      },
    });

    return NextResponse.json(sentMessage);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to create a New Booking" },
      { status: error.statusCode || 500 }
    );
  }
}
