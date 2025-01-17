import { notFound } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/lib/types"

// This would typically come from a CMS or API
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
  // ... other posts
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} - LocaleNLP Blog`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const categoryColors = {
    Technical: "bg-blue-500/10 text-blue-500",
    Research: "bg-purple-500/10 text-purple-500",
    Community: "bg-green-500/10 text-green-500",
    Updates: "bg-orange-500/10 text-orange-500",
  }

  return (
    <article className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-4">
          <Link href="/blog">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          <Badge
            variant="secondary"
            className={categoryColors[post.category]}
          >
            {post.category}
          </Badge>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="text-xl text-muted-foreground">
            {post.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">
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

          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Blog content would go here - typically from a CMS */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p>
          This is where the blog post content would go. In a real application,
          this would typically be fetched from a CMS or markdown files.
        </p>
      </div>
    </article>
  )
}
