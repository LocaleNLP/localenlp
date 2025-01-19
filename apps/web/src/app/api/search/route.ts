import { NextResponse } from "next/server"
import { getAllPosts } from "@/lib/mdx"
import { getDocuments } from "@/lib/docs"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")

  if (!query) {
    return NextResponse.json({ results: [] })
  }

  try {
    const [posts, docs] = await Promise.all([
      getAllPosts(),
      getDocuments(),
    ])

    const searchResults = {
      posts: posts
        .filter((post) => {
          const searchContent = `${post.meta.title} ${post.meta.description}`.toLowerCase()
          return searchContent.includes(query.toLowerCase())
        })
        .map((post) => ({
          type: "Blog Post",
          title: post.meta.title,
          description: post.meta.description,
          href: `/blog/${post.meta.slug}`,
        })),
      docs: docs
        .filter((doc) => {
          const searchContent = `${doc.title} ${doc.description}`.toLowerCase()
          return searchContent.includes(query.toLowerCase())
        })
        .map((doc) => ({
          type: "Documentation",
          title: doc.title,
          description: doc.description,
          href: `/docs/${doc.slug}`,
        })),
    }

    return NextResponse.json(searchResults)
  } catch (error) {
    console.error("Search error:", error)
    return NextResponse.json({ error: "Failed to search" }, { status: 500 })
  }
}
