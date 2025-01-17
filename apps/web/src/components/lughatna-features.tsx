"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  Mic,
  Type,
  Image as ImageIcon,
  Headphones,
  Award,
  Users,
} from "lucide-react"

const features = [
  {
    title: "Voice Recording",
    description: "Record native speakers pronouncing words and phrases",
    icon: Mic,
  },
  {
    title: "Text Transcription",
    description: "Transcribe audio recordings into written text",
    icon: Type,
  },
  {
    title: "Image Labeling",
    description: "Label images with their names in local languages",
    icon: ImageIcon,
  },
  {
    title: "Audio Validation",
    description: "Verify the accuracy of recorded pronunciations",
    icon: Headphones,
  },
  {
    title: "Rewards System",
    description: "Earn points and badges for your contributions",
    icon: Award,
  },
  {
    title: "Community",
    description: "Connect with other language enthusiasts",
    icon: Users,
  },
]

export function LughatnaFeatures() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden p-6">
            <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
