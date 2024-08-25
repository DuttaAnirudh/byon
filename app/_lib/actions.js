"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabase } from "./supabase";

// UPDATING GUEST PROFILE DATA IN DB
export async function updateUserProfile(formData) {
  const fullName = formData.get("fullName");
  const city = formData.get("city");
  const contact = formData.get("contact");
  const guestId = formData.get("guestId");

  const updateData = { fullName, city, contact };

  const { error } = await supabase
    .from("users")
    .update(updateData)
    .eq("id", guestId)
    .select()
    .single();

  if (error) {
    throw new Error("User could not be updated");
  }

  // Clearing cache to save new profile data in cache
  revalidatePath("/account");
}

export async function createEvent(formData) {
  const name = formData.get("name");
  const date = formData.get("date");
  const time = formData.get("time");
  const location = formData.get("location");
  const city = formData.get("city");
  const description = formData.get("description");
  const price = formData.get("price");
  const totalPass = formData.get("totalPass");
  const remainingPass = formData.get("totalPass");
  const imageFile = formData.get("image");

  const hostId = formData.get("hostId");

  // SET THE PATHNAME AND IMAGE NAME OF EVENT POSTER
  const imageName = `${Math.random()}-${imageFile.name}`.replaceAll("/", "");
  const imagePath = `${process.env.SUPABASE_URL}/storage/v1/object/public/eventPosters/${imageName}`;

  const eventData = {
    name,
    date,
    time,
    location,
    city,
    description,
    price,
    totalPass,
    remainingPass,
    image: imagePath,
    hostId,
  };

  /////////////////////////////////
  /////////////////////////////////
  // 1. CREATE A NEW EVENT
  const { data, error } = await supabase
    .from("events")
    .insert([eventData])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Event could not be created");
  }

  /////////////////////////////////
  /////////////////////////////////
  // 2. UPLOAD THE IMAGE TO BUCKET
  const { error: storageError } = await supabase.storage
    .from("eventPosters")
    .upload(imageName, imageFile);

  /////////////////////////////////
  /////////////////////////////////
  // 3. DELETE THE EVENT FROM DB IF THERE WAS ERROR UPLOADING EVENT POSTER
  if (storageError) {
    await supabase.from("events").delete().eq("id", data.id);
    throw new Error("There was an error creating the event:", storageError);
  }

  // Clearing cache to save new profile data in cache
  revalidatePath("/events");
  revalidatePath("/account/manage");

  // Redirecting to hosted events management page
  redirect("/account/manage");
}

export async function updateEvent(formData) {
  const name = formData.get("name");
  const date = formData.get("date");
  const time = formData.get("time");
  const location = formData.get("location");
  const city = formData.get("city");
  const description = formData.get("description");
  const price = formData.get("price");
  const totalPass = formData.get("totalPass");
  const remainingPass = formData.get("totalPass");

  const id = formData.get("id");

  const updateEventData = {
    name,
    date,
    time,
    location,
    city,
    description,
    price,
    totalPass,
    remainingPass,
  };

  const { error } = await supabase
    .from("events")
    .update(updateEventData)
    .eq("id", id)
    .select();

  if (error) {
    throw new Error("Event could not be updated");
  }

  revalidatePath("/account/manage");
}

export async function updateEventPoster(formData) {
  const id = formData.get("id");
  const imageFile = formData.get("image");
  const currentImageSrc = formData.get("currentImageSrc");

  console.log(id, imageFile);

  const imageName = `${Math.random()}-${imageFile.name}`.replaceAll("/", "");
  const imagePath = `${process.env.SUPABASE_URL}/storage/v1/object/public/eventPosters/${imageName}`;

  const updateEventData = {
    image: imagePath,
  };

  /////////////////////////////////
  /////////////////////////////////
  // 2. UPDATE THE IMAGE SOURCE IN EVENT DB

  const { error } = await supabase
    .from("events")
    .update(updateEventData)
    .eq("id", id)
    .select();

  if (error) {
    throw new Error("Event could not be updated");
  }

  /////////////////////////////////
  /////////////////////////////////
  // 2. UPLOAD THE IMAGE TO BUCKET
  const { error: storageError } = await supabase.storage
    .from("eventPosters")
    .upload(imageName, imageFile);

  /////////////////////////////////
  /////////////////////////////////
  // 3. SET THE EVENT POSTER BACK TO OLD IF THERE WAS ERROR UPLOADING EVENT POSTER
  if (storageError) {
    await supabase
      .from("events")
      .update({ image: currentImageSrc })
      .eq("id", id)
      .select();

    throw new Error(
      "There was an error updating the event poster:",
      storageError
    );
  }

  revalidatePath("/account/manage");
  revalidatePath("/events");
}

export async function deleteEvent(eventId) {
  const { error } = await supabase.from("events").delete().eq("id", eventId);

  if (error) {
    throw new Error("Event could not be deleted");
  }

  revalidatePath("/account/manage");
  redirect("/account/manage");
}

export async function deleteBooking(formData) {
  const bookingId = formData.get("bookingId");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    throw new Error("There was an error deleting the booking");
  }

  revalidatePath("/account/manage");
}
