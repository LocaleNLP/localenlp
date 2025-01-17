import { BlogShowcase } from "@/components/blog-showcase"

export const metadata = {
  title: "Blog - LocaleNLP",
  description: "Latest updates and insights from the LocaleNLP team",
}

export default function BlogPage() {
  return (
    <div className="container py-24 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Latest Updates
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Stay up to date with our latest developments and insights
        </p>
      </div>
      <BlogShowcase />
    </div>
  )
}
