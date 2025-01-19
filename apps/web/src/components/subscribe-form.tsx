"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/ui/icons";
import { useToast } from "@/components/ui/use-toast";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

interface SubscribeFormProps {
  group: string;
  placeholder?: string;
  className?: string;
}

export function SubscribeForm({ group, placeholder = "Enter your email", className }: SubscribeFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
  });

  async function onSubmit(data: SubscribeFormData) {
    try {
      setIsSubmitting(true);
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, group }),
      });

      if (!response.ok) throw new Error("Subscription failed");

      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="relative">
        <Input
          {...form.register("email")}
          placeholder={placeholder}
          type="email"
          autoComplete="email"
          className={className}
          disabled={isSubmitting}
        />
        {form.formState.errors.email && (
          <p className="mt-1 text-sm text-destructive">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
          </>
        ) : (
          "Subscribe"
        )}
      </Button>
    </form>
  );
}
