import { CaseStudiesShowcase } from "@/components/case-studies-showcase"

export const metadata = {
  title: "Case Studies - LocaleNLP",
  description: "Learn how organizations are using LocaleNLP to break language barriers",
}

export default function CaseStudiesPage() {
  return (
    <div className="container py-24 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Case Studies
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Learn how organizations are using LocaleNLP to break language barriers
        </p>
      </div>
      <CaseStudiesShowcase />
    </div>
  )
}
