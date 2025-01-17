"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

const resources = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Learn how to integrate LocaleNLP into your applications",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Read about our latest updates and technical insights",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "See how organizations are using LocaleNLP",
  },
]

const products = [
  {
    title: "Translation API",
    href: "/products/api",
    description: "Powerful API for real-time language translation",
  },
  {
    title: "Lughatna App",
    href: "/lughatna",
    description: "Community-driven language data collection",
  },
  {
    title: "Enterprise Solutions",
    href: "/products/enterprise",
    description: "Custom solutions for large organizations",
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex items-center space-x-6">
      <Link href="/" className="hidden font-bold lg:inline-block">
        LocaleNLP
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                {products.map((product) => (
                  <li key={product.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={product.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {product.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {product.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                {resources.map((resource) => (
                  <li key={resource.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={resource.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {resource.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {resource.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="hidden lg:flex lg:items-center lg:space-x-4">
        <Button variant="outline" size="sm">
          Sign In
        </Button>
        <Button size="sm">
          Get Started
          <Globe className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
