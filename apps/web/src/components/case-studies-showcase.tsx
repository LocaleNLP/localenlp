"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { CaseStudy } from "@/lib/types"

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
  {
    slug: "pan-african-parliament",
    title: "Parliamentary Proceedings Translation",
    description:
      "Real-time translation of parliamentary debates and documents",
    organization: "Pan-African Parliament",
    logo: "/case-studies/pap-logo.webp",
    results: [
      { label: "Daily Users", value: "500+" },
      { label: "Documents", value: "10K+" },
      { label: "Cost Reduction", value: "45%" },
    ],
  },
  {
    slug: "african-development-bank",
    title: "Financial Inclusion Initiative",
    description:
      "Making financial services accessible in local languages",
    organization: "African Development Bank",
    logo: "/case-studies/afdb-logo.webp",
    results: [
      { label: "Reach", value: "1M+" },
      { label: "Languages", value: "8" },
      { label: "Satisfaction", value: "92%" },
    ],
  },
]

export function CaseStudiesShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {caseStudies.map((study, index) => (
        <motion.div
          key={study.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Link href={`/case-studies/${study.slug}`}>
            <Card className="group h-full overflow-hidden">
              <div className="relative h-48 bg-muted">
                <Image
                  src={study.logo}
                  alt={study.organization}
                  fill
                  className="object-contain p-8 transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{study.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {study.description}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 border-t pt-6">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <p className="text-2xl font-bold">{result.value}</p>
                      <p className="text-xs text-muted-foreground">
                        {result.label}
                      </p>
                    </div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="mt-6 w-full justify-between"
                >
                  Read Case Study
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
