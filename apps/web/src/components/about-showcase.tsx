"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Users, Globe, Brain } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Contributors",
  },
  {
    icon: Globe,
    value: "20+",
    label: "African Languages",
  },
  {
    icon: Brain,
    value: "15+",
    label: "AI Models",
  },
]

export function AboutShowcase() {
  return (
    <div className="relative">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Video/Image side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative aspect-video overflow-hidden rounded-xl lg:aspect-auto lg:h-[600px]"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            poster="/team-poster.webp"
          >
            <source src="/team-video.webm" type="video/webm" />
            <source src="/team-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Empowering African Languages Through Technology
            </h3>
            <p className="text-muted-foreground">
              LocaleNLP was founded with a vision to break down language barriers
              and preserve Africa's rich linguistic heritage. Our team of experts
              combines deep learning with cultural understanding to create
              innovative language solutions.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-4 text-center">
                <stat.icon className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg">
              Join Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
