import { ContactShowcase } from "@/components/contact-showcase"

export const metadata = {
  title: "Contact Us - LocaleNLP",
  description: "Get in touch with the LocaleNLP team",
}

export default function ContactPage() {
  return (
    <div className="relative">
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        <ContactShowcase />
      </section>
    </div>
  )
}
