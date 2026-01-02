import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsletterSubscriberSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFICATION_EMAILS = [
  "infoctn23@gmail.com",
  "rameshr@ctnchennai.org",
  "nelsons@ctnchennai.org"
];

async function sendContactNotification(data: {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  trackInterest?: string | null;
}) {
  try {
    const result = await resend.emails.send({
      from: "CTN Contact Form <noreply@ctnchennai.org>",
      to: NOTIFICATION_EMAILS,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        ${data.trackInterest ? `<p><strong>Track of Interest:</strong> ${data.trackInterest}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This message was sent from the CTN Chennai website contact form.</p>
      `
    });
    console.log("Contact notification email result:", JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Failed to send contact notification email:", error);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      await sendContactNotification(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Thank you for contacting us! We'll get back to you soon.",
        data: submission 
      });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        console.error("Error creating contact submission:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while submitting your message. Please try again." 
        });
      }
    }
  });

  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriberSchema.parse(req.body);
      
      const existingSubscriber = await storage.getNewsletterSubscriberByEmail(validatedData.email);
      if (existingSubscriber) {
        res.status(200).json({ 
          success: true, 
          message: "You're already subscribed to our newsletter!" 
        });
        return;
      }

      const subscriber = await storage.createNewsletterSubscriber(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Successfully subscribed to our newsletter!",
        data: subscriber 
      });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        console.error("Error creating newsletter subscriber:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while subscribing. Please try again." 
        });
      }
    }
  });

  app.get("/api/contact/submissions", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching submissions." 
      });
    }
  });

  return httpServer;
}
