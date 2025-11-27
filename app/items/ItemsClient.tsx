'use client'

import { useState, useMemo } from 'react'
import ItemTable from '@/components/item-table'
import ItemFilter from '@/components/item-filter'
import itemsData from '@/data/items.json'

export default function ItemsClient() {
  const [filters, setFilters] = useState({
    type: 'all',
    rarity: 'all',
    search: '',
  })

  const filteredItems = useMemo(() => {
    let filtered = [...itemsData]

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower) ||
          item.location.toLowerCase().includes(searchLower) ||
          item.type.toLowerCase().includes(searchLower)
      )
    }

    // Type filter
    if (filters.type !== 'all') {
      filtered = filtered.filter((item) => item.type === filters.type)
    }

    // Rarity filter
    if (filters.rarity !== 'all') {
      filtered = filtered.filter((item) => item.stats.rarity === filters.rarity)
    }

    // Sort by rarity
    const rarityOrder: Record<string, number> = {
      S: 0,
      A: 1,
      B: 2,
      Limited: 3,
      Common: 4,
    }

    return filtered.sort((a, b) => {
      const aRarity = a.stats.rarity || 'Common'
      const bRarity = b.stats.rarity || 'Common'
      return (rarityOrder[aRarity] ?? 99) - (rarityOrder[bRarity] ?? 99)
    })
  }, [filters])

  return (
    <>
      <ItemFilter onFilterChange={setFilters} />
      <div className="mb-4 text-sm text-muted-foreground">
        Showing {filteredItems.length} of {itemsData.length} items
      </div>
      <ItemTable items={filteredItems} />
      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-card/50 backdrop-blur-sm rounded-lg border border-white/10">
          <p className="text-muted-foreground text-lg">No items found matching your filters.</p>
          <p className="text-muted-foreground/60 text-sm mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </>
  )
}

