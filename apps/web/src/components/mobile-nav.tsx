"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const routes = [
  {
    title: "Products",
    items: [
      { title: "Translation API", href: "/products/api" },
      { title: "Lughatna App", href: "/lughatna" },
      { title: "Enterprise", href: "/products/enterprise" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Documentation", href: "/docs" },
      { title: "Blog", href: "/blog" },
      { title: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
    ],
  },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" onClick={() => setOpen(false)}>
              LocaleNLP
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-8">
          {routes.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="font-medium">{section.title}</h4>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="space-y-2">
            <Button variant="outline" className="w-full">
              Sign In
            </Button>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
