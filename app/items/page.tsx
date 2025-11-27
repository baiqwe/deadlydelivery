import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import itemsData from '@/data/items.json'
import ItemsClient from './ItemsClient'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'All Items - Deadly Delivery Wiki | DeadlyBlox',
  description: `Complete list of all ${itemsData.length} items in Deadly Delivery. Find weapons, vehicles, consumables, and more.`,
  alternates: {
    canonical: '/items',
  },
}

export default function ItemsPage() {
  const rarityCounts = {
    S: itemsData.filter((i) => i.stats.rarity === 'S').length,
    A: itemsData.filter((i) => i.stats.rarity === 'A').length,
    B: itemsData.filter((i) => i.stats.rarity === 'B').length,
    Limited: itemsData.filter((i) => i.stats.rarity === 'Limited').length,
    Common: itemsData.filter((i) => !i.stats.rarity || i.stats.rarity === 'Common').length,
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-horror text-primary mb-4">All Items</h1>
          <p className="text-muted-foreground text-lg">
            Browse through all {itemsData.length} items available in Deadly Delivery. Use filters to
            find exactly what you need. Click on any item to view detailed information, location, and
            usage tips.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          <div className="bg-primary/10 border border-primary/30 px-4 py-2 rounded-lg">
            <span className="text-sm font-semibold text-primary">
              Total Items: {itemsData.length}
            </span>
          </div>
          {rarityCounts.S > 0 && (
            <div className="bg-secondary/10 border border-secondary/30 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-secondary">
                S Tier: {rarityCounts.S}
              </span>
            </div>
          )}
          {rarityCounts.A > 0 && (
            <div className="bg-primary/10 border border-primary/30 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-primary">
                A Tier: {rarityCounts.A}
              </span>
            </div>
          )}
          {rarityCounts.B > 0 && (
            <div className="bg-primary/20 border border-primary/30 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-primary/80">
                B Tier: {rarityCounts.B}
              </span>
            </div>
          )}
          {rarityCounts.Common > 0 && (
            <div className="bg-muted/50 border border-white/10 px-4 py-2 rounded-lg">
              <span className="text-sm font-semibold text-muted-foreground">
                Common: {rarityCounts.Common}
              </span>
            </div>
          )}
        </div>

        <ItemsClient />
      </main>
    </div>
  )
}

