import { Metadata } from "next"
import Link from "next/link"
import weaponsDataRaw from "@/data/weapons.json"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Sword, Zap, Target, DollarSign, Star } from "lucide-react"
import type { Weapon } from "@/types/weapon"
import { cn } from "@/lib/utils"
import { Breadcrumbs } from "@/components/breadcrumbs"

const weaponsData = weaponsDataRaw as Weapon[]
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Deadly Delivery Weapons Database | All Weapons Stats & Tier List",
  description: "Complete weapons database for Deadly Delivery. Compare damage, fire rate, range, and prices. Find the best weapons for your playstyle.",
  alternates: {
    canonical: "/wiki/weapons",
  },
}

const tierColors = {
  S: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
  A: "bg-green-500/20 text-green-400 border-green-500/50",
  B: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  C: "bg-gray-500/20 text-gray-400 border-gray-500/50",
}

export default function WeaponsPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <Breadcrumbs items={[
          { label: "Wiki", href: "/wiki" },
          { label: "Weapons" }
        ]} />
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Sword className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Weapons Database</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Complete list of all weapons in Deadly Delivery with stats, prices, and tier rankings.
          </p>
        </div>

        {/* Expert Commentary Section - Content Enhancement for AdSense */}
        <Card className="bg-card/50 backdrop-blur-sm border-white/5 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Weapon Selection Strategy Guide</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                In Deadly Delivery, weapon choice directly impacts your survival rate and efficiency in deeper floors. This comprehensive database compares all available weapons based on extensive gameplay testing and community feedback. Understanding weapon stats is crucial for making informed decisions that balance damage output, cost-effectiveness, and acquisition difficulty.
              </p>
              <div>
                <h3 className="font-semibold text-foreground mb-2">For Beginners:</h3>
                <p className="text-sm leading-relaxed">
                  Start with the <strong className="text-primary">Baseball Bat</strong> - it&apos;s accessible through codes (DEADLYDELIVERY) or as a starter item for the Baseballer class. Its moderate damage and stun capability make it perfect for handling Pit Maws and Mimics on early floors. The Baseball Bat is cost-effective and reliable, making it the ideal entry-level weapon for new players learning entity counter-strategies.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">For Advanced Players:</h3>
                <p className="text-sm leading-relaxed">
                  The <strong className="text-primary">Shotgun</strong> represents the pinnacle of combat effectiveness, available to the Veteran class. With the highest damage output in the game, it excels at quickly eliminating dangerous entities on deeper floors. However, unlocking the Veteran class requires significant progression investment (estimated 50,000+ coins and advanced metrics). We recommend mastering the Baseball Bat first, then progressing to Porter class for efficient farming before pursuing Veteran.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Strategic Considerations:</h3>
                <p className="text-sm leading-relaxed">
                  Beyond raw damage numbers, consider fire rate for dealing with multiple threats, range for safe engagement distances, and acquisition method. Weapons obtained through codes provide immediate access without grinding, while shop-purchased weapons require consistent coin farming. Balance your weapon investment with class unlocks - a well-chosen class can provide weapon access without purchasing it separately.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weapons Table */}
        <Card className="bg-card/50 backdrop-blur-sm border-white/5">
          <CardHeader>
            <CardTitle>All Weapons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                {/* Desktop Table */}
                <div className="hidden md:block">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 font-semibold">Weapon</th>
                        <th className="text-left py-3 px-4 font-semibold">Tier</th>
                        <th className="text-left py-3 px-4 font-semibold">Damage</th>
                        <th className="text-left py-3 px-4 font-semibold">Fire Rate</th>
                        <th className="text-left py-3 px-4 font-semibold">Range</th>
                        <th className="text-left py-3 px-4 font-semibold">Price</th>
                        <th className="text-left py-3 px-4 font-semibold">Acquisition</th>
                      </tr>
                    </thead>
                    <tbody>
                      {weaponsData.map((weapon, index) => (
                        <tr 
                          key={index} 
                          className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-4 px-4">
                            <div className="font-semibold">{weapon.name}</div>
                            <div className="text-sm text-muted-foreground mt-1">{weapon.description}</div>
                          </td>
                          <td className="py-4 px-4">
                            <span className={cn(
                              "inline-flex items-center px-2 py-1 rounded text-xs font-bold border",
                              tierColors[weapon.tier]
                            )}>
                              {weapon.tier}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Zap className="w-4 h-4 text-primary" />
                              <span className="font-medium">{weapon.damage}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-muted-foreground">{weapon.fireRate}</td>
                          <td className="py-4 px-4 text-muted-foreground">{weapon.range}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4 text-green-400" />
                              <span>{weapon.price.toLocaleString()}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-muted-foreground text-sm">{weapon.acquisition}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                  {weaponsData.map((weapon, index) => (
                    <Card key={index} className="bg-black/20 border-white/5">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{weapon.name}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">{weapon.description}</p>
                          </div>
                          <span className={cn(
                            "inline-flex items-center px-2 py-1 rounded text-xs font-bold border shrink-0",
                            tierColors[weapon.tier]
                          )}>
                            {weapon.tier}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">Damage:</span>
                            <span className="font-medium">{weapon.damage}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Fire Rate:</span>
                            <span className="font-medium ml-2">{weapon.fireRate}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Range:</span>
                            <span className="font-medium ml-2">{weapon.range}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-green-400" />
                            <span className="text-muted-foreground">Price:</span>
                            <span className="font-medium">{weapon.price.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-white/5">
                          <span className="text-sm text-muted-foreground">Acquisition: </span>
                          <span className="text-sm font-medium">{weapon.acquisition}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-8 flex gap-4">
          <Link href="/wiki">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Wiki
            </Button>
          </Link>
          <Link href="/wiki/vehicles">
            <Button variant="outline">
              View Vehicles Database
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-horror text-muted-foreground mb-4">DeadlyBlox</p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground/60 mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/wiki" className="hover:text-primary">Wiki</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

