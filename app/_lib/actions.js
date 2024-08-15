"use server";

import { revalidatePath } from "next/cache";
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
