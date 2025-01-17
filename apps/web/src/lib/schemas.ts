import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  subject: z.enum(["general", "partnership", "support", "careers"]),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
