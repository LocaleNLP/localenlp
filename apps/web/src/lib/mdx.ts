import { compileMDX } from "next-mdx-remote/rsc"
import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import rehypePrettyCode from "rehype-pretty-code"

const postsDirectory = path.join(process.cwd(), "content/blog")

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "")
  const filePath = path.join(postsDirectory, `${realSlug}.mdx`)

  try {
    const fileContents = await fs.readFile(filePath, "utf8")
    const { data, content } = matter(fileContents)

    const { content: compiledContent } = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "github-dark",
                keepBackground: true,
              },
            ],
          ],
        },
      },
    })

    return {
      meta: {
        ...data,
        slug: realSlug,
      },
      content: compiledContent,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts() {
  try {
    const files = await fs.readdir(postsDirectory)
    const posts = await Promise.all(
      files
        .filter((file) => /\.mdx?$/.test(file))
        .map(async (file) => {
          const post = await getPostBySlug(file)
          return post?.meta
        })
    )

    return posts
      .filter(Boolean)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error("Error reading posts:", error)
    return []
  }
}
