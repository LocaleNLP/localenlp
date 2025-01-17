"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { BlogPost } from "@/lib/types"

const posts: BlogPost[] = [
  {
    slug: "introducing-swahili-support",
    title: "Introducing Support for Swahili",
    description: "We're excited to announce full support for Swahili in our translation models",
    category: "Updates",
    date: "2024-03-15",
    author: {
      name: "Sarah Okafor",
      avatar: "/team/sarah.webp",
    },
    readingTime: "5 min read",
  },
  {
    slug: "improving-accuracy",
    title: "How We Improved Model Accuracy by 35%",
    description: "A deep dive into our latest model architecture improvements",
    category: "Technical",
    date: "2024-03-10",
    author: {
      name: "Ahmed Hassan",
      avatar: "/team/ahmed.webp",
    },
    readingTime: "8 min read",
  },
  {
    slug: "community-milestone",
    title: "Celebrating 50,000 Contributors",
    description: "A look at our growing community and their impact",
    category: "Community",
    date: "2024-03-05",
    author: {
      name: "Grace Mensah",
      avatar: "/team/grace.webp",
    },
    readingTime: "4 min read",
  },
]

const categoryColors = {
  Technical: "bg-blue-500/10 text-blue-500",
  Research: "bg-purple-500/10 text-purple-500",
  Community: "bg-green-500/10 text-green-500",
  Updates: "bg-orange-500/10 text-orange-500",
}

export function BlogShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Link href={`/blog/${post.slug}`}>
            <Card className="group h-full p-6 transition-colors hover:bg-muted/50">
              <Badge
                variant="secondary"
                className={categoryColors[post.category]}
              >
                {post.category}
              </Badge>
              <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                {post.description}
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                    {" · "}
                    {post.readingTime}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
