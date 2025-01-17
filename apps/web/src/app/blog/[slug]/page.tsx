import { notFound } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/mdx"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.meta.title} - LocaleNLP Blog`,
    description: post.meta.description,
  }
}

const categoryColors = {
  Technical: "bg-blue-500/10 text-blue-500",
  Research: "bg-purple-500/10 text-purple-500",
  Community: "bg-green-500/10 text-green-500",
  Updates: "bg-orange-500/10 text-orange-500",
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
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
            className={categoryColors[post.meta.category]}
          >
            {post.meta.category}
          </Badge>
          <h1 className="text-4xl font-bold">{post.meta.title}</h1>
          <p className="text-xl text-muted-foreground">
            {post.meta.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={post.meta.author.avatar} alt={post.meta.author.name} />
              <AvatarFallback>
                {post.meta.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.meta.author.name}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(post.meta.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
                {" · "}
                {post.meta.readingTime}
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

      <div className="prose prose-gray dark:prose-invert max-w-none">
        {post.content}
      </div>
    </article>
  )
}
