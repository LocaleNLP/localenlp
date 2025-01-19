"use server"

import { z } from "zod"
import { revalidatePath } from "next/cache"

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
})

export type SubscribeFormData = z.infer<typeof newsletterSchema>

export type SubscribeResponse = {
  success: boolean
  message: string
}

export async function subscribeToNewsletter(
  data: SubscribeFormData
): Promise<SubscribeResponse> {
  try {
    const validatedData = newsletterSchema.parse(data)

    // Add artificial delay to simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically:
    // 1. Check if email already exists
    // 2. Add to your newsletter service (e.g., Mailchimp, SendGrid)
    // 3. Store in your database
    // 4. Send confirmation email

    revalidatePath("/")

    return {
      success: true,
      message: "Thanks for subscribing! Please check your email to confirm.",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
