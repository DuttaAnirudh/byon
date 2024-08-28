import { notFound } from "next/navigation";
import { supabase } from "./supabase";

// Create a user
export async function createUser(newGuest) {
  const { data, error } = await supabase
    .from("users")
    .insert([newGuest])
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("User could not be created");
  }

  return { data, error };
}

// Fetch an existing user
export async function getUser(email) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  // No error here - handle the possibility of no user in the sign in callback
  return data;
}

// Get all the events
export const getEvents = async function () {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Events could not be loaded");
  }

  return data;
};

// Get data about a particular event with id
export async function getEvent(id) {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

// Get data about a all events hosted by user
export async function getEventsHostedByUser(hostId) {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("hostId", hostId);

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

// Get all the events bookings done by the user
export async function getBookings(userId) {
  const { data, error } = await supabase
    .from("bookings")
    .select("id, eventDate, eventName, city, location, eventId")
    .eq("customerId", userId);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Get all the events bookings done by the user
export async function getHostedEventBookings(eventId) {
  const { data, error } = await supabase
    .from("bookings")
    .select("id, price, customerName, customerEmail, created_at, checkedIn")
    .eq("eventId", eventId);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Get data about a particular event with id
export async function getTotalPassesForEvent(id) {
  const { data, error } = await supabase
    .from("events")
    .select("totalPass")
    .eq("id", id)
    .single();

  if (error) {
    return 0;
  }

  return data;
}

// Get user's name and email id from the bookings table
export async function getBookingForEmail(bookingId) {
  const { data, error } = await supabase
    .from("bookings")
    .select("customerName, customerEmail")
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

export async function userHasBooked(customerId) {
  const { data } = await supabase
    .from("bookings")
    .select("*")
    .eq("customerId", customerId);
  // .single();

  return data;
}

export async function getScheduledMails(userId) {
  const { data, error } = await supabase
    .from("scheduledEmails")
    .select("id, scheduleId, sendAt, subject, body, eventId")
    .eq("userId", userId)
    .order("sendAt", { ascending: false });

  if (error) {
    throw new Error("There was an error fetching scheduled emails");
  }

  return data;
}
