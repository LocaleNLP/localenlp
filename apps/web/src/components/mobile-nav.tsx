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

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Models", href: "/models" },
  { name: "Lughatna", href: "/lughatna" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
]

export function MobileNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <SheetHeader>
          <SheetTitle className="px-6">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-bold">LocaleNLP</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-3 px-6 pt-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="space-y-2 pt-4">
            <Button variant="outline" className="w-full justify-center">
              Sign In
            </Button>
            <Button className="w-full justify-center">
              Get Started
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
