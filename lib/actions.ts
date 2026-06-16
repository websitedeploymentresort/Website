"use server";

import { createClient } from "@/lib/supabase/server";

export type ActionResult = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  _prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      phone,
      message,
    });

    if (error) {
      console.error("Supabase insert error:", error.message);
      return {
        success: false,
        message:
          "We couldn't send your message right now. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Thank you for reaching out. Our team will be in touch soon.",
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

export async function submitBookingRequest(
  _prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const room = formData.get("room") as string;
  const checkIn = formData.get("checkIn") as string;
  const checkOut = formData.get("checkOut") as string;
  const guests = formData.get("guests") as string;
  const notes = formData.get("notes") as string;

  if (!name || !email || !checkIn || !checkOut || !room) {
    return { success: false, message: "Please fill in all required fields." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("bookings").insert({
      name,
      email,
      phone,
      room,
      check_in: checkIn,
      check_out: checkOut,
      guests: guests ? Number(guests) : 1,
      notes,
      status: "pending",
    });

    if (error) {
      console.error("Supabase insert error:", error.message);
      return {
        success: false,
        message:
          "We couldn't submit your booking request right now. Please try again later.",
      };
    }

    return {
      success: true,
      message:
        "Your booking request has been received. Our reservations team will confirm availability shortly.",
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
