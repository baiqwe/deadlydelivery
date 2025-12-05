import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import itemsData from '@/data/items.json'
import ItemsClient from './ItemsClient'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'

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
      <main className="container mx-auto px-4 py-10 max-w-5xl">
        <Breadcrumbs items={[{ label: "Items" }]} />
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

        {/* Expert Commentary Section - Content Enhancement for AdSense - Moved Below Table */}
        <Card className="bg-card/50 backdrop-blur-sm border-white/5 mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Understanding Items in Deadly Delivery</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Items are the core resource system in Deadly Delivery, encompassing weapons, consumables, utility tools, and objective items. Each item serves a specific purpose in your survival strategy, from combat effectiveness to inventory management. This comprehensive database documents every item&apos;s stats, acquisition methods, and strategic value based on extensive gameplay analysis.
              </p>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Essential Survival Items:</h3>
                <p className="text-sm leading-relaxed">
                  The <strong className="text-primary">Flashlight</strong> is arguably the most critical item - the pitch-black sewers are nearly impossible to navigate without proper lighting. Always carry at least one flashlight, and consider a backup if you&apos;re planning deep floor runs. The <strong className="text-primary">Revive Syringe</strong> is essential for team play, allowing you to revive downed teammates and extend successful runs. These can be obtained from codes or vending machines, making codes particularly valuable for stocking essential supplies.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Combat & Utility Items:</h3>
                <p className="text-sm leading-relaxed">
                  Weapons like the <strong className="text-primary">Baseball Bat</strong> and <strong className="text-primary">Z-Ray Gun</strong> provide both offensive and utility capabilities. The Baseball Bat can stun Pit Maws and deal with Mimics effectively, while the Z-Ray Gun reveals hidden entities in darkness - invaluable for scouting dangerous areas. Understanding when to prioritize combat items versus utility items is key to successful inventory management during runs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Item Rarity & Value Tiers:</h3>
                <p className="text-sm leading-relaxed">
                  Items are categorized by rarity (S, A, B, Common, Limited), which generally correlates with their effectiveness and acquisition difficulty. S-tier items are the most powerful but hardest to obtain, while Common items are readily available but offer basic functionality. When inventory space is limited (4 slots), prioritize items that provide the most value for your current objective - survival items for dangerous floors, high-value items for farming runs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

