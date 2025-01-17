"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Calendar, Award, Users, Globe, Cpu, Rocket } from "lucide-react"

interface Milestone {
  icon: React.ElementType
  date: string
  title: string
  description: string
}

const milestones: Milestone[] = [
  {
    icon: Calendar,
    date: "2022 Q1",
    title: "Project Inception",
    description: "LocaleNLP founded with the vision of breaking language barriers in Africa",
  },
  {
    icon: Users,
    date: "2022 Q3",
    title: "Community Launch",
    description: "Launch of Lughatna app for community-driven data collection",
  },
  {
    icon: Award,
    date: "2023 Q1",
    title: "First Recognition",
    description: "Awarded 'Best AI Innovation' at Africa Tech Summit",
  },
  {
    icon: Globe,
    date: "2023 Q2",
    title: "Language Expansion",
    description: "Support added for 10 major African languages",
  },
  {
    icon: Cpu,
    date: "2023 Q4",
    title: "Model Breakthrough",
    description: "Released state-of-the-art translation models for African languages",
  },
  {
    icon: Rocket,
    date: "2024 Q1",
    title: "Scale Up",
    description: "Expanded partnerships and enterprise solutions launch",
  },
]

export function TimelineShowcase() {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent" />

      <div className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max gap-4 px-20">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="relative w-[300px] overflow-hidden p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <milestone.icon className="h-5 w-5 text-primary" />
                  </div>
                  <time className="text-sm font-medium text-muted-foreground">
                    {milestone.date}
                  </time>
                </div>
                <h3 className="mb-2 font-bold">{milestone.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {milestone.description}
                </p>
                <div className="absolute bottom-1.5 right-1.5 opacity-5">
                  <milestone.icon className="h-16 w-16" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
