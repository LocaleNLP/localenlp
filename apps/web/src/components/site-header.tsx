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
        "sticky top-0 z-50 w-full",
        scrolled && "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="lg:hidden">
            <span className="font-bold">LocaleNLP</span>
          </Link>
          <MobileNav />
          <MainNav />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="lg:hidden">
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
