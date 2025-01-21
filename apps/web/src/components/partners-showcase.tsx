"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const partners = [
  {
    name: "African Leadership Initiative",
    logo: "/partners/ali-logo.png",
    href: "https://africanleadershipinitiative.org",
  },
  {
    name: "Tech4Africa",
    logo: "/partners/tech4africa-logo.png",
    href: "https://tech4africa.com",
  },
  {
    name: "Language Preservation Foundation",
    logo: "/partners/lpf-logo.png",
    href: "https://lpf.org",
  },
  {
    name: "AI Research Lab",
    logo: "/partners/airl-logo.png",
    href: "https://airesearchlab.org",
  },
  {
    name: "African Universities Alliance",
    logo: "/partners/aua-logo.png",
    href: "https://aua.edu",
  },
  {
    name: "Digital Africa Initiative",
    logo: "/partners/dai-logo.png",
    href: "https://dai.org",
  },
]

export function PartnersShowcase() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Partners
        </h2>
        <p className="mt-4 text-muted-foreground">
          Working together to preserve and promote African languages
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {partners.map((partner) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="flex h-24 items-center justify-center p-6">
              <a
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={40}
                  className="h-auto w-auto object-contain"
                  priority={false}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    target.parentElement!.innerHTML = partner.name
                  }}
                />
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
