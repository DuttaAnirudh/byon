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

  const hostId = formData.get("hostId");

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
    hostId,
  };

  const { data, error } = await supabase
    .from("events")
    .insert([eventData])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Event could not be created");
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

export async function deleteEvent(eventId) {
  const { error } = await supabase.from("events").delete().eq("id", eventId);

  if (error) {
    throw new Error("Event could not be deleted");
  }

  revalidatePath("/account/manage");
  redirect("/account/manage");
}
