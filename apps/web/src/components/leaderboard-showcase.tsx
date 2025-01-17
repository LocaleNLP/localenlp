"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Trophy, Medal, Star, Crown, Award } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Contributor {
  rank: number
  name: string
  avatar: string
  points: number
  badge: string
  languages: string[]
  contributions: number
}

const contributors: Contributor[] = [
  {
    rank: 1,
    name: "Sarah Okafor",
    avatar: "/contributors/sarah.webp",
    points: 15420,
    badge: "Language Champion",
    languages: ["Yoruba", "Igbo", "Hausa"],
    contributions: 2840,
  },
  {
    rank: 2,
    name: "Ahmed Hassan",
    avatar: "/contributors/ahmed.webp",
    points: 12350,
    badge: "Data Pioneer",
    languages: ["Swahili", "Arabic", "Amharic"],
    contributions: 2150,
  },
  {
    rank: 3,
    name: "Grace Mensah",
    avatar: "/contributors/grace.webp",
    points: 10890,
    badge: "Community Leader",
    languages: ["Akan", "Ewe", "Ga"],
    contributions: 1920,
  },
]

const getBadgeIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return Crown
    case 2:
      return Medal
    case 3:
      return Trophy
    default:
      return Star
  }
}

export function LeaderboardShowcase() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contributors.map((contributor, index) => {
          const BadgeIcon = getBadgeIcon(contributor.rank)
          return (
            <motion.div
              key={contributor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={contributor.avatar} alt={contributor.name} />
                      <AvatarFallback>
                        {contributor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{contributor.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {contributor.badge}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                    <BadgeIcon className="h-4 w-4" />
                    #{contributor.rank}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Points</p>
                    <p className="font-medium">{contributor.points.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Contributions</p>
                    <p className="font-medium">
                      {contributor.contributions.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">Languages</p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {contributor.languages.map((lang) => (
                      <span
                        key={lang}
                        className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
