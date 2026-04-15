import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { insertContactSubmissionSchema } from "../shared/schema";
import { fromZodError } from "zod-validation-error";
import { getDb } from "../db/vercel";
import { contactSubmissions } from "../shared/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFICATION_EMAILS = [
  "infoctn23@gmail.com",
  "rameshr@ctnchennai.org",
  "nelsons@ctnchennai.org",
];

async function sendContactNotification(data: {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  trackInterest?: string | null;
}) {
  try {
    await resend.emails.send({
      from: "CTN Contact Form <noreply@ctnchennai.org>",
      to: NOTIFICATION_EMAILS,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
        ${data.trackInterest ? `<p><strong>Track of Interest:</strong> ${data.trackInterest}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This message was sent from the CTN Chennai website contact form.</p>
      `,
    });
  } catch (error) {
    console.error("Failed to send contact notification email:", error);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const validatedData = insertContactSubmissionSchema.parse(req.body);
    const db = getDb();
    const [submission] = await db.insert(contactSubmissions).values(validatedData).returning();

    await sendContactNotification(validatedData);

    res.status(201).json({
      success: true,
      message: "Thank you for contacting us! We'll get back to you soon.",
      data: submission,
    });
  } catch (error: any) {
    if (error.name === "ZodError") {
      const validationError = fromZodError(error);
      res.status(400).json({ success: false, message: validationError.message });
    } else {
      console.error("Error creating contact submission:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while submitting your message. Please try again.",
      });
    }
  }
}
