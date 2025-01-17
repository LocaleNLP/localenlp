"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import MapboxGL to avoid SSR issues
const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full animate-pulse rounded-lg bg-muted" />
  ),
})

interface RegionStats {
  region: string
  contributors: number
  languages: number
  contributions: number
}

const regions: RegionStats[] = [
  {
    region: "West Africa",
    contributors: 25000,
    languages: 8,
    contributions: 150000,
  },
  {
    region: "East Africa",
    contributors: 15000,
    languages: 6,
    contributions: 90000,
  },
  {
    region: "North Africa",
    contributors: 10000,
    languages: 4,
    contributions: 60000,
  },
  {
    region: "Southern Africa",
    contributors: 8000,
    languages: 5,
    contributions: 48000,
  },
]

export function LughatnaMap() {
  const [selectedRegion, setSelectedRegion] = useState<RegionStats | null>(null)

  return (
    <div className="space-y-4">
      <div className="relative h-[500px] overflow-hidden rounded-lg">
        <Map onRegionClick={setSelectedRegion} />
        {selectedRegion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 md:right-auto md:w-[300px]"
          >
            <Card className="p-4">
              <h3 className="mb-2 font-semibold">{selectedRegion.region}</h3>
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div>
                  <p className="font-medium">{selectedRegion.contributors}</p>
                  <p className="text-xs text-muted-foreground">Contributors</p>
                </div>
                <div>
                  <p className="font-medium">{selectedRegion.languages}</p>
                  <p className="text-xs text-muted-foreground">Languages</p>
                </div>
                <div>
                  <p className="font-medium">
                    {selectedRegion.contributions.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">Contributions</p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
