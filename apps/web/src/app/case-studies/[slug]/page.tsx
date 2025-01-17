import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { CaseStudy } from "@/lib/types"

// This would typically come from a CMS or API
const caseStudies: CaseStudy[] = [
  {
    slug: "african-union",
    title: "African Union Translation Portal",
    description:
      "How the AU improved communication across member states with LocaleNLP",
    organization: "African Union",
    logo: "/case-studies/au-logo.webp",
    results: [
      { label: "Languages", value: "12" },
      { label: "Accuracy", value: "95%" },
      { label: "Time Saved", value: "60%" },
    ],
  },
  // ... other case studies
]

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: CaseStudyPageProps) {
  const study = caseStudies.find((study) => study.slug === params.slug)

  if (!study) {
    return {
      title: "Case Study Not Found",
    }
  }

  return {
    title: `${study.title} - LocaleNLP Case Studies`,
    description: study.description,
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find((study) => study.slug === params.slug)

  if (!study) {
    notFound()
  }

  return (
    <article className="space-y-12">
      <div className="space-y-6">
        <Link href="/case-studies">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Button>
        </Link>

        <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-muted">
          <Image
            src={study.logo}
            alt={study.organization}
            fill
            className="object-contain p-12"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{study.title}</h1>
          <p className="text-xl text-muted-foreground">
            {study.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {study.results.map((result) => (
            <Card key={result.label} className="p-6 text-center">
              <p className="text-3xl font-bold">{result.value}</p>
              <p className="text-sm text-muted-foreground">{result.label}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Case study content would go here - typically from a CMS */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <h2>The Challenge</h2>
        <p>
          The African Union faced significant challenges in facilitating
          communication across its member states, with documents and discussions
          needing to be translated into multiple languages quickly and accurately.
        </p>

        <h2>The Solution</h2>
        <p>
          By implementing LocaleNLP's translation API and custom-trained models,
          the AU was able to streamline their translation workflow and improve
          accuracy.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Real-time translation during meetings</li>
          <li>Automated document translation</li>
          <li>Custom terminology management</li>
          <li>Quality assurance workflows</li>
        </ul>

        <h2>The Results</h2>
        <p>
          The implementation led to significant improvements in translation speed
          and accuracy, while reducing costs and improving accessibility of
          information across member states.
        </p>
      </div>

      <div className="flex justify-between pt-6 border-t">
        <Button variant="ghost" className="pl-0">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous Case Study
        </Button>
        <Button variant="ghost" className="pr-0">
          Next Case Study
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </article>
  )
}
