import Link from "next/link"
import { Button } from "@/components/ui/button"
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
      <div className="container px-4 py-8 md:py-12">
        {/* Main footer content */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand and description */}
          <div className="space-y-4 md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">LocaleNLP</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Breaking language barriers in Africa through state-of-the-art AI technology
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/localenlp" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com/localenlp" target="_blank" rel="noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/company/localenlp" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.title}>
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
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t pt-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Newsletter */}
            <div className="space-y-3 lg:col-span-2">
              <h4 className="text-sm font-semibold">
                Subscribe to our newsletter
              </h4>
              <p className="text-sm text-muted-foreground">
                Get the latest updates on African language technology
              </p>
              <NewsletterForm />
            </div>
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LocaleNLP. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
