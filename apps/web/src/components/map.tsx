"use client"

import { RegionStats } from "@/lib/types"

interface MapProps {
  onRegionClick: (region: RegionStats) => void
}

export default function Map({ onRegionClick }: MapProps) {
  return (
    <div className="flex h-full items-center justify-center bg-muted/30">
      <p className="text-muted-foreground">
        Interactive map will be implemented with Mapbox
      </p>
    </div>
  )
}
