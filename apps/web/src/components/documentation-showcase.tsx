"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Book, Code, Cpu, FileText } from "lucide-react"
import Link from "next/link"
import type { Documentation } from "@/lib/types"

const docs: Documentation[] = [
  {
    title: "API Reference",
    description: "Comprehensive API documentation for integrating LocaleNLP",
    icon: "Code",
    href: "/docs/api",
    category: "API",
  },
  {
    title: "Model Documentation",
    description: "Technical details about our language models and their capabilities",
    icon: "Cpu",
    href: "/docs/models",
    category: "Models",
  },
  {
    title: "SDK Guides",
    description: "Integration guides for Python, JavaScript, and other languages",
    icon: "FileText",
    href: "/docs/sdks",
    category: "SDKs",
  },
  {
    title: "Getting Started",
    description: "Quick start guides and tutorials for new users",
    icon: "Book",
    href: "/docs/guides",
    category: "Guides",
  },
]

const iconMap = {
  Code,
  Cpu,
  FileText,
  Book,
}

export function DocumentationShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {docs.map((doc, index) => {
        const Icon = iconMap[doc.icon as keyof typeof iconMap]

        return (
          <motion.div
            key={doc.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={doc.href}>
              <Card className="group h-full p-6 transition-colors hover:bg-muted/50">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="rounded-lg bg-primary/10 p-2 w-fit">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {doc.description}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="mt-4 w-full justify-between"
                >
                  View Documentation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Card>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
