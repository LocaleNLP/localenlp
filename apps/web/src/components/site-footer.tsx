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
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-8 px-4 py-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-8">
          {/* Logo and social links */}
          <div className="flex flex-col gap-6 lg:w-1/3">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">LocaleNLP</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Breaking language barriers in Africa through state-of-the-art AI technology
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/localenlp"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://twitter.com/localenlp"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/company/localenlp"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Links grid */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {category}
                </h4>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter and copyright */}
        <div className="flex flex-col gap-8 border-t pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 lg:w-1/2">
            <h4 className="text-sm font-semibold">
              Subscribe to our newsletter
            </h4>
            <p className="text-sm text-muted-foreground">
              Get the latest updates on African language technology
            </p>
            <div className="max-w-md">
              <NewsletterForm />
            </div>
          </div>
          <div className="text-sm text-muted-foreground lg:text-right">
            © {new Date().getFullYear()} LocaleNLP. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
