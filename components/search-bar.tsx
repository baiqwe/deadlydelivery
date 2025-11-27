'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import itemsData from '@/data/items.json'
import type { Item } from '@/types/item'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Item[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleSearch = (value: string) => {
    setQuery(value)
    if (value.length > 0) {
      const filtered = itemsData.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.description.toLowerCase().includes(value.toLowerCase()) ||
          item.location.toLowerCase().includes(value.toLowerCase()) ||
          item.type.toLowerCase().includes(value.toLowerCase())
      )
      setResults(filtered.slice(0, 5))
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Search items, locations..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query.length > 0 && setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          className="w-full px-4 py-2 pl-10 pr-4 bg-black/20 border border-white/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-black/95 border border-white/10 rounded-lg shadow-lg backdrop-blur-xl max-h-96 overflow-y-auto">
          {results.map((item) => (
            <Link
              key={item.slug}
              href={`/item/${item.slug}`}
              className="block px-4 py-3 hover:bg-primary/10 border-b border-white/5 last:border-b-0 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.type} • {item.location}</div>
                </div>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                  {item.stats.rarity || 'Common'}
                </span>
              </div>
            </Link>
          ))}
          {results.length === 5 && (
            <div className="px-4 py-2 text-center text-sm text-muted-foreground border-t border-white/10">
              <Link href={`/items?search=${query}`} className="text-primary hover:underline">
                View all results →
              </Link>
            </div>
          )}
        </div>
      )}

      {showResults && query.length > 0 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-black/95 border border-white/10 rounded-lg shadow-lg backdrop-blur-xl p-4 text-center text-muted-foreground">
          No results found
        </div>
      )}
    </div>
  )
}

