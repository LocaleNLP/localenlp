import { useCallback, useState } from "react"
import { useDebounce } from "@/hooks/use-debounce"

interface SearchResult {
  type: string
  title: string
  description: string
  href: string
}

interface SearchResults {
  posts: SearchResult[]
  docs: SearchResult[]
}

export function useSearch() {
  const [results, setResults] = useState<SearchResults>({ posts: [], docs: [] })
  const [isLoading, setIsLoading] = useState(false)

  const search = useCallback(async (query: string) => {
    if (!query) {
      setResults({ posts: [], docs: [] })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      const data = await response.json()
      setResults(data)
    } catch (error) {
      console.error("Search error:", error)
      setResults({ posts: [], docs: [] })
    } finally {
      setIsLoading(false)
    }
  }, [])

  const debouncedSearch = useDebounce(search, 300)

  return {
    search: debouncedSearch,
    results,
    isLoading,
  }
}
