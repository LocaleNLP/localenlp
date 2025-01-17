import { BlogShowcase } from "@/components/blog-showcase"
import { CaseStudiesShowcase } from "@/components/case-studies-showcase"
import { DocumentationShowcase } from "@/components/documentation-showcase"

export const metadata = {
  title: "Resources - LocaleNLP",
  description: "Explore our documentation, case studies, and latest updates",
}

export default function ResourcesPage() {
  return (
    <div className="relative">
      {/* Blog section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Latest Updates
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Stay up to date with our latest developments and insights
          </p>
        </div>
        <BlogShowcase />
      </section>

      {/* Case Studies section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Case Studies
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Learn how organizations are using LocaleNLP
          </p>
        </div>
        <CaseStudiesShowcase />
      </section>

      {/* Documentation section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Documentation
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Everything you need to get started with LocaleNLP
          </p>
        </div>
        <DocumentationShowcase />
      </section>
    </div>
  )
}
