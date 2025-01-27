"use server"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
})

export async function sendMessage(formData: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(formData)

  if (!result.success) {
    console.error("Invalid form data:", result.error)
    return { success: false, message: "Invalid form data" }
  }

  // Simulate sending a message
  console.log("Sending message:", formData)

  // In a real application, you would send an email or save to a database here
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Log a success message
  console.log("Message sent successfully!")

  return { success: true, message: "Message sent successfully" }
}

