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
          {/* Logo and Navigation */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold inline-block">LocaleNLP</span>
            </Link>
            <div className="hidden lg:flex">
              <MainNav />
            </div>
            <div className="flex lg:hidden">
              <MobileNav />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden lg:flex gap-2">
              <Button asChild variant="ghost" size="sm">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
