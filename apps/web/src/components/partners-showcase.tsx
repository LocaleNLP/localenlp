"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface Partner {
  name: string
  logo: string
  description: string
}

const partners: Partner[] = [
  {
    name: "African Languages Institute",
    logo: "/partners/ali-logo.webp",
    description: "Leading research in African linguistics",
  },
  {
    name: "Tech4Africa",
    logo: "/partners/tech4africa-logo.webp",
    description: "Technology innovation hub",
  },
  {
    name: "Language Preservation Foundation",
    logo: "/partners/lpf-logo.webp",
    description: "Preserving linguistic heritage",
  },
  {
    name: "AI Research Lab",
    logo: "/partners/airl-logo.webp",
    description: "Advanced AI research and development",
  },
  {
    name: "African Universities Alliance",
    logo: "/partners/aua-logo.webp",
    description: "Academic collaboration network",
  },
  {
    name: "Digital Africa Initiative",
    logo: "/partners/dai-logo.webp",
    description: "Digital transformation advocate",
  },
]

export function PartnersShowcase() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
          >
            <Card className="group relative overflow-hidden p-6">
              <div className="aspect-square relative">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 40vw, (max-width: 1200px) 25vw, 16vw"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/80 p-4 text-center text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p>{partner.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
