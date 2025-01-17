import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Mic, Languages, Brain, Share2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DemoTranslator } from "@/components/demo-translator"
import { TechnologyShowcase } from "@/components/technology-showcase"
import { PartnersShowcase } from "@/components/partners-showcase"
import { TimelineShowcase } from "@/components/timeline-showcase"
import { LeaderboardShowcase } from "@/components/leaderboard-showcase"
import { AboutShowcase } from "@/components/about-showcase"
import { ContactShowcase } from "@/components/contact-showcase"

const features = [
  {
    title: "Text Translation",
    description: "Advanced neural machine translation for African languages",
    icon: Languages,
  },
  {
    title: "Speech Recognition",
    description: "Convert spoken African languages to text with high accuracy",
    icon: Mic,
  },
  {
    title: "Natural Language Understanding",
    description: "Context-aware processing of African languages",
    icon: Brain,
  },
  {
    title: "Community Contributions",
    description: "Collaborative platform for language data collection",
    icon: Share2,
  },
]

export default function HomePage() {
  const words = [
    { text: "Translate." },
    { text: "Understand." },
    { text: "Speak." },
  ]

  return (
    <div className="relative">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900" />

      {/* Hero section */}
      <section className="container py-24 space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Breaking Language Barriers
            <br />
            in Africa
          </h1>

          <TypewriterEffect words={words} className="text-2xl sm:text-3xl" />

          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            AI-powered NLP tools tailored for African languages, making technology accessible to everyone.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Explore Our Models
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
              <Globe className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Key Features
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover our comprehensive suite of NLP tools designed specifically for African languages
          </p>
        </div>
        <div className="mx-auto grid gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="relative overflow-hidden">
              <CardHeader>
                <div className="mb-2 inline-block rounded-lg bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10">
                  <feature.icon className="h-24 w-24" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Demo section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Try It Yourself
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Experience our translation technology in action. Translate between English and various African languages.
          </p>
        </div>
        <DemoTranslator />
      </section>

      {/* Technology section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Technology
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover how we build and deploy state-of-the-art AI models for African languages
          </p>
        </div>
        <TechnologyShowcase />
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

      {/* Leaderboard section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Top Contributors
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Meet our community champions helping to preserve and digitize African languages
          </p>
        </div>
        <LeaderboardShowcase />
      </section>

      {/* About section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Us
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Building the future of African language technology
          </p>
        </div>
        <AboutShowcase />
      </section>

      {/* Contact section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        <ContactShowcase />
      </section>
    </div>
  )
}
