import { Metadata } from "next"
import Link from "next/link"
import vehiclesDataRaw from "@/data/vehicles.json"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Car, Gauge, Shield, Package, DollarSign } from "lucide-react"
import type { Vehicle } from "@/types/vehicle"
import { cn } from "@/lib/utils"
import { Breadcrumbs } from "@/components/breadcrumbs"

const vehiclesData = vehiclesDataRaw as Vehicle[]
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Deadly Delivery Vehicles Database | All Vehicles Stats & Tier List",
  description: "Complete vehicles database for Deadly Delivery. Compare speed, durability, capacity, and prices. Find the best vehicle for your delivery missions.",
  alternates: {
    canonical: "/wiki/vehicles",
  },
}

const tierColors = {
  S: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
  A: "bg-green-500/20 text-green-400 border-green-500/50",
  B: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  C: "bg-gray-500/20 text-gray-400 border-gray-500/50",
}

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <Breadcrumbs items={[
          { label: "Wiki", href: "/wiki" },
          { label: "Vehicles" }
        ]} />
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Car className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Vehicles Database</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Complete list of all vehicles in Deadly Delivery with speed, durability, capacity, and pricing information.
          </p>
        </div>

        {/* Vehicles Table */}
        <Card className="bg-card/50 backdrop-blur-sm border-white/5">
          <CardHeader>
            <CardTitle>All Vehicles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                {/* Desktop Table */}
                <div className="hidden md:block">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 font-semibold">Vehicle</th>
                        <th className="text-left py-3 px-4 font-semibold">Tier</th>
                        <th className="text-left py-3 px-4 font-semibold">Speed</th>
                        <th className="text-left py-3 px-4 font-semibold">Durability</th>
                        <th className="text-left py-3 px-4 font-semibold">Capacity</th>
                        <th className="text-left py-3 px-4 font-semibold">Price</th>
                        <th className="text-left py-3 px-4 font-semibold">Acquisition</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vehiclesData.map((vehicle, index) => (
                        <tr 
                          key={index} 
                          className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-4 px-4">
                            <div className="font-semibold">{vehicle.name}</div>
                            <div className="text-sm text-muted-foreground mt-1">{vehicle.description}</div>
                          </td>
                          <td className="py-4 px-4">
                            <span className={cn(
                              "inline-flex items-center px-2 py-1 rounded text-xs font-bold border",
                              tierColors[vehicle.tier]
                            )}>
                              {vehicle.tier}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Gauge className="w-4 h-4 text-primary" />
                              <span className="text-muted-foreground">{vehicle.speed}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Shield className="w-4 h-4 text-green-400" />
                              <span className="text-muted-foreground">{vehicle.durability}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <Package className="w-4 h-4 text-secondary" />
                              <span className="text-muted-foreground">{vehicle.capacity}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4 text-green-400" />
                              <span>{vehicle.price.toLocaleString()}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-muted-foreground text-sm">{vehicle.acquisition}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                  {vehiclesData.map((vehicle, index) => (
                    <Card key={index} className="bg-black/20 border-white/5">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{vehicle.name}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">{vehicle.description}</p>
                          </div>
                          <span className={cn(
                            "inline-flex items-center px-2 py-1 rounded text-xs font-bold border shrink-0",
                            tierColors[vehicle.tier]
                          )}>
                            {vehicle.tier}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Gauge className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">Speed:</span>
                            <span className="font-medium">{vehicle.speed}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-400" />
                            <span className="text-muted-foreground">Durability:</span>
                            <span className="font-medium">{vehicle.durability}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Package className="w-4 h-4 text-secondary" />
                            <span className="text-muted-foreground">Capacity:</span>
                            <span className="font-medium">{vehicle.capacity}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-green-400" />
                            <span className="text-muted-foreground">Price:</span>
                            <span className="font-medium">{vehicle.price.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-white/5">
                          <span className="text-sm text-muted-foreground">Acquisition: </span>
                          <span className="text-sm font-medium">{vehicle.acquisition}</span>
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
          <Link href="/wiki/weapons">
            <Button variant="outline">
              View Weapons Database
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

