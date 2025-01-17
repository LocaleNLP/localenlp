"use server"

import { z } from "zod"

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

type NewsletterInput = z.infer<typeof newsletterSchema>

export async function subscribeToNewsletter(data: NewsletterInput) {
  try {
    const validatedData = newsletterSchema.parse(data)

    // Here you would typically:
    // 1. Add the email to your newsletter service (e.g., Mailchimp)
    // 2. Store the subscription in your database
    // 3. Send a confirmation email

    // For now, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }

    return {
      success: false,
      error: "Something went wrong. Please try again later."
    }
  }
}
