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
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <SheetHeader>
          <SheetTitle className="px-6">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <span className="font-bold">LocaleNLP</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-3 px-6 pt-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
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
