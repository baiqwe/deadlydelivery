'use client'

import { useState } from 'react'
import itemsData from '@/data/items.json'

interface ItemFilterProps {
  onFilterChange: (filters: {
    type: string
    rarity: string
    search: string
  }) => void
}

export default function ItemFilter({ onFilterChange }: ItemFilterProps) {
  const [filters, setFilters] = useState({
    type: 'all',
    rarity: 'all',
    search: '',
  })

  // Get unique types and rarities
  const types = Array.from(new Set(itemsData.map((item) => item.type)))
  const rarities = Array.from(
    new Set(itemsData.map((item) => item.stats.rarity).filter(Boolean))
  )

  const handleChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="mb-6 space-y-4">
      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search items..."
          value={filters.search}
          onChange={(e) => handleChange('search', e.target.value)}
          className="w-full px-4 py-2 bg-black/20 border border-white/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        {/* Type Filter */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => handleChange('type', e.target.value)}
            className="w-full px-4 py-2 bg-black/20 border border-white/10 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          >
            <option value="all">All Types</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Rarity Filter */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Rarity
          </label>
          <select
            value={filters.rarity}
            onChange={(e) => handleChange('rarity', e.target.value)}
            className="w-full px-4 py-2 bg-black/20 border border-white/10 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          >
            <option value="all">All Rarities</option>
            {rarities.map((rarity) => (
              <option key={rarity} value={rarity}>
                {rarity}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

