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
    await resend.emails.send({
  from: "La Damai Resort <onboarding@resend.dev>",
  to: email,
  subject: "We've received your enquiry | La Damai Resort",

  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; line-height: 1.6;">
      <h2>Thank you for contacting La Damai Resort!</h2>

      <p>Dear ${name},</p>

      <p>
        Thank you for reaching out to us. We have successfully received your enquiry,
        and a member of our team will get back to you as soon as possible.
      </p>

      <p><strong>Your Message:</strong></p>

      <div style="background:#f7f7f7;padding:16px;border-radius:6px;">
        ${message.replace(/\n/g, "<br>")}
      </div>

      <br>

      <p>
        We appreciate your interest in La Damai Resort and look forward to welcoming you.
      </p>

      <hr>

      <p>
        Regards,<br>
        <strong>Reservations Team</strong><br>
        La Damai Resort
      </p>
    </div>
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