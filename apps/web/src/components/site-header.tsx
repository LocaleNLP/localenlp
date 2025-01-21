"use client"

import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const scrolled = useScroll(50)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        scrolled && "border-b"
      )}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <MainNav />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden lg:flex">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild size="sm" className="hidden lg:flex">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
