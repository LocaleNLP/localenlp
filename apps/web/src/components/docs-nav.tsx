"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = {
  "Getting Started": [
    { title: "Introduction", href: "/docs/guides/introduction" },
    { title: "Quick Start", href: "/docs/guides/quick-start" },
    { title: "Installation", href: "/docs/guides/installation" },
  ],
  "API Reference": [
    { title: "Authentication", href: "/docs/api/authentication" },
    { title: "Translation API", href: "/docs/api/translation" },
    { title: "Language Detection", href: "/docs/api/detection" },
  ],
  "SDK Documentation": [
    { title: "Python SDK", href: "/docs/sdks/python" },
    { title: "JavaScript SDK", href: "/docs/sdks/javascript" },
    { title: "REST API", href: "/docs/sdks/rest" },
  ],
  "Model Documentation": [
    { title: "Model Architecture", href: "/docs/models/architecture" },
    { title: "Supported Languages", href: "/docs/models/languages" },
    { title: "Performance Metrics", href: "/docs/models/metrics" },
  ],
}

export function DocsNav() {
  const pathname = usePathname()

  return (
    <div className="relative overflow-hidden py-6 pr-6">
      <nav className="space-y-6">
        {Object.entries(navigation).map(([section, items]) => (
          <div key={section}>
            <h4 className="mb-2 font-semibold">{section}</h4>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
                      pathname === item.href
                        ? "bg-muted font-medium text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}
