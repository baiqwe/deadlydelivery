import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Sword, Car, Map, BookOpen, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Deadly Delivery Wiki - Complete Game Database & Guides",
  description: "Complete Deadly Delivery Wiki with weapons database, vehicles database, maps, guides, and more. Everything you need to master Deadly Delivery.",
  alternates: {
    canonical: "/wiki",
  },
}

const wikiSections = [
  {
    title: "Weapons Database",
    description: "Complete list of all weapons with stats, damage, fire rate, and prices",
    icon: Sword,
    href: "/wiki/weapons",
    color: "text-red-400"
  },
  {
    title: "Vehicles Database",
    description: "All vehicles with speed, durability, capacity, and pricing information",
    icon: Car,
    href: "/wiki/vehicles",
    color: "text-blue-400"
  },
  {
    title: "Game Guide",
    description: "Complete gameplay guide, tips, tricks, and strategies",
    icon: BookOpen,
    href: "/guide",
    color: "text-green-400"
  }
]

export default function WikiPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Search className="w-10 h-10 text-primary" />
            <h1 className="text-5xl font-bold">Deadly Delivery Wiki</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete game database, guides, and resources. Everything you need to master Deadly Delivery.
          </p>
        </div>

        {/* Wiki Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {wikiSections.map((section) => {
            const Icon = section.icon
            return (
              <Link key={section.href} href={section.href}>
                <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all duration-300 h-full group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className={`w-6 h-6 ${section.color}`} />
                      </div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {section.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Quick Links */}
        <Card className="bg-card/50 backdrop-blur-sm border-white/5">
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/" className="block p-4 rounded-lg bg-black/20 border border-white/5 hover:border-primary/20 transition-all group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Active Codes</h3>
                    <p className="text-sm text-muted-foreground">View all active Deadly Delivery codes</p>
                  </div>
                  <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors rotate-180" />
                </div>
              </Link>
              <Link href="/guide" className="block p-4 rounded-lg bg-black/20 border border-white/5 hover:border-primary/20 transition-all group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Game Guide</h3>
                    <p className="text-sm text-muted-foreground">Complete gameplay guide and tips</p>
                  </div>
                  <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors rotate-180" />
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
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

