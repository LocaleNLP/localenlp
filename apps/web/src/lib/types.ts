export interface RegionStats {
  region: string
  contributors: number
  languages: number
  contributions: number
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  category: "Technical" | "Research" | "Community" | "Updates"
  date: string
  author: {
    name: string
    avatar: string
  }
  readingTime: string
}

export interface CaseStudy {
  slug: string
  title: string
  description: string
  organization: string
  logo: string
  results: {
    label: string
    value: string
  }[]
}

export interface Documentation {
  title: string
  description: string
  icon: string
  href: string
  category: "API" | "Models" | "SDKs" | "Guides"
}
