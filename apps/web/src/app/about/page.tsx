import { AboutShowcase } from "@/components/about-showcase"
import { TimelineShowcase } from "@/components/timeline-showcase"
import { PartnersShowcase } from "@/components/partners-showcase"

export const metadata = {
  title: "About Us - LocaleNLP",
  description: "Learn about our mission to break language barriers in Africa",
}

export default function AboutPage() {
  return (
    <div className="relative">
      {/* About section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About LocaleNLP
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Building the future of African language technology
          </p>
        </div>
        <AboutShowcase />
      </section>

      {/* Timeline section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Journey
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Milestones in our mission to revolutionize African language technology
          </p>
        </div>
        <TimelineShowcase />
      </section>

      {/* Partners section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Partners
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Collaborating with leading institutions to advance African language technology
          </p>
        </div>
        <PartnersShowcase />
      </section>
    </div>
  )
}
