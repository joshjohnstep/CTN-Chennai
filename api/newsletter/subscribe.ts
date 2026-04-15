import type { VercelRequest, VercelResponse } from "@vercel/node";
import { insertNewsletterSubscriberSchema, newsletterSubscribers } from "../../shared/schema";
import { fromZodError } from "zod-validation-error";
import { getDb } from "../../db/vercel";
import { eq } from "drizzle-orm";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const validatedData = insertNewsletterSubscriberSchema.parse(req.body);
    const db = getDb();

    const [existing] = await db
      .select()
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.email, validatedData.email));

    if (existing) {
      return res.status(200).json({
        success: true,
        message: "You're already subscribed to our newsletter!",
      });
    }

    const [subscriber] = await db
      .insert(newsletterSubscribers)
      .values(validatedData)
      .returning();

    res.status(201).json({
      success: true,
      message: "Successfully subscribed to our newsletter!",
      data: subscriber,
    });
  } catch (error: any) {
    if (error.name === "ZodError") {
      const validationError = fromZodError(error);
      res.status(400).json({ success: false, message: validationError.message });
    } else {
      console.error("Error creating newsletter subscriber:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while subscribing. Please try again.",
      });
    }
  }
}
