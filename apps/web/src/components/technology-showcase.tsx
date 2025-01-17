"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Brain, Network, Cpu, BarChart, Users } from "lucide-react"

const steps = [
  {
    icon: Database,
    title: "Data Collection",
    description: "Gathering diverse African language datasets through Lughatna",
  },
  {
    icon: Brain,
    title: "Model Training",
    description: "Training state-of-the-art neural networks on specialized hardware",
  },
  {
    icon: Network,
    title: "Fine-tuning",
    description: "Optimizing models for specific languages and dialects",
  },
  {
    icon: Cpu,
    title: "Deployment",
    description: "Serving models efficiently through our API infrastructure",
  },
  {
    icon: BarChart,
    title: "Monitoring",
    description: "Continuous evaluation and improvement of model performance",
  },
  {
    icon: Users,
    title: "Community Feedback",
    description: "Incorporating user feedback for iterative improvements",
  },
]

export function TechnologyShowcase() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="relative h-full overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-5">
                <step.icon className="h-32 w-32" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
