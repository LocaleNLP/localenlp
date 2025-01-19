"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { subscribeToNewsletter } from "@/app/actions/newsletter"
import type { SubscribeFormData } from "@/app/actions/newsletter"

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
})

interface NewsletterFormProps extends React.HTMLAttributes<HTMLFormElement> {}

export function NewsletterForm({ className, ...props }: NewsletterFormProps) {
  const [isPending, startTransition] = React.useTransition()
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: SubscribeFormData) {
    startTransition(async () => {
      try {
        const result = await subscribeToNewsletter(data)

        if (result.success) {
          toast({
            title: "Success!",
            description: result.message,
          })
          reset()
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: result.message,
          })
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Something went wrong. Please try again later.",
        })
      }
    })
  }

  return (
    <form
      className={cn("grid gap-2", className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              aria-invalid={!!errors.email}
              disabled={isPending}
              className={cn({
                "pr-12": isPending,
                "border-destructive": errors.email,
              })}
            />
            {isPending && (
              <div className="absolute right-3 top-3 h-5 w-5 animate-spin rounded-full border-2 border-primary border-r-transparent" />
            )}
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
        <Button type="submit" disabled={isPending}>
          {isPending ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        By subscribing, you agree to our{" "}
        <a href="/privacy" className="underline underline-offset-2">
          Privacy Policy
        </a>
      </p>
    </form>
  )
}
