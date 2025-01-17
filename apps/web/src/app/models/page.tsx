import { DemoTranslator } from "@/components/demo-translator"
import { TechnologyShowcase } from "@/components/technology-showcase"

export const metadata = {
  title: "Our Models - LocaleNLP",
  description: "Explore our AI models tailored for African languages",
}

export default function ModelsPage() {
  return (
    <div className="relative">
      {/* Hero section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our AI Models
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            State-of-the-art NLP models designed specifically for African languages
          </p>
        </div>
      </section>

      {/* Technology section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Technology
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover how we build and deploy state-of-the-art AI models
          </p>
        </div>
        <TechnologyShowcase />
      </section>

      {/* Demo section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Try It Yourself
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Experience our translation technology in action
          </p>
        </div>
        <DemoTranslator />
      </section>
    </div>
  )
}
