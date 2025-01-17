import { cn } from "@/lib/utils"

interface BlogLayoutProps {
  children: React.ReactNode
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="container relative">
      <div className="mx-auto max-w-3xl py-12">
        {children}
      </div>
    </div>
  )
}
