import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"

const footerLinks = {
  product: [
    { title: "Translation API", href: "/products/api" },
    { title: "Lughatna App", href: "/lughatna" },
    { title: "Enterprise", href: "/products/enterprise" },
    { title: "Pricing", href: "/pricing" },
  ],
  resources: [
    { title: "Documentation", href: "/docs" },
    { title: "Blog", href: "/blog" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Support", href: "/support" },
  ],
  company: [
    { title: "About", href: "/about" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
    { title: "Privacy", href: "/privacy" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Link href="/" className="font-bold">
              LocaleNLP
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Breaking language barriers in Africa through state-of-the-art
              language models and community-driven data collection.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/localenlp">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/localenlp">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/company/localenlp">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3 lg:col-span-2">
              <h4 className="text-sm font-semibold">
                Subscribe to our newsletter
              </h4>
              <p className="text-sm text-muted-foreground">
                Get the latest updates on African language technology
              </p>
              <NewsletterForm />
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LocaleNLP. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
