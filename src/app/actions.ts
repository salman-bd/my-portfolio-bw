"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function sendMessage(formData: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(formData);

  if (!result.success) {
    console.error("Invalid form data:", result.error);
    return { success: false, message: "Invalid form data" };
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "your.email@example.com",
      subject: result.data.subject,
      html: `<p>You have a new message from ${result.data.name} (${result.data.email}):</p><p>${result.data.message}</p>`,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Failed to send message:", error);
    return { success: false, message: "Failed to send message" };
  }
}