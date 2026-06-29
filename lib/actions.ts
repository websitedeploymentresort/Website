"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  try {
    await resend.emails.send({
      from: "La Damai Resort <onboarding@resend.dev>", // Replace after domain verification
      to: "reservations@damairesorts.com",      
      subject: `New Contact Enquiry from ${name}`,
      replyTo: email,

      html: `
        <h2>New Contact Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>

        <hr>

        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return {
      success: true,
      message: "Thank you for contacting us. We'll get back to you shortly.",
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      message: "Unable to send your message. Please try again.",
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

  if (!name || !email || !room || !checkIn || !checkOut) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  try {
    await resend.emails.send({
      from: "La Damai Resort <onboarding@resend.dev>", // Replace after domain verification
      to: "reservations@damairesorts.com",
      subject: `New Booking Request - ${room}`,
      replyTo: email,

      html: `
        <h2>New Booking Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>

        <hr>

        <p><strong>Room:</strong> ${room}</p>
        <p><strong>Check In:</strong> ${checkIn}</p>
        <p><strong>Check Out:</strong> ${checkOut}</p>
        <p><strong>Guests:</strong> ${guests || 1}</p>

        <hr>

        <p><strong>Additional Notes</strong></p>

        <p>${notes ? notes.replace(/\n/g, "<br>") : "None"}</p>
      `,
    });

    return {
      success: true,
      message:
        "Your booking request has been received. Our reservations team will contact you shortly.",
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      message: "Unable to submit your booking request.",
    };
  }
}