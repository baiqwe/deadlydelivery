import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Sword, Car, Map, BookOpen, Search, Package, Users, Skull, TrendingUp, Shield, Zap, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Badge } from "@/components/ui/badge"
import guidesDataRaw from '@/data/guides.json'
import type { Guide } from '@/types/guide'

const guidesData = guidesDataRaw as Guide[]

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Deadly Delivery Wiki - Complete Game Database & Guides | DeadlyBlox",
  description: "Complete Deadly Delivery Wiki with weapons database, vehicles database, items, monsters, classes, guides, and more. Everything you need to master Deadly Delivery.",
  alternates: {
    canonical: "/wiki",
  },
  openGraph: {
    title: "Deadly Delivery Wiki - Complete Game Database & Guides",
    description: "The ultimate resource for Deadly Delivery players. Complete databases, expert guides, and comprehensive strategies.",
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
    title: "Items Database",
    description: "Complete catalog of all items, weapons, and consumables",
    icon: Package,
    href: "/items",
    color: "text-purple-400"
  },
  {
    title: "Monsters Guide",
    description: "Comprehensive entity bestiary with counter strategies and spawn patterns",
    icon: Skull,
    href: "/monsters",
    color: "text-orange-400"
  },
  {
    title: "Classes Tier List",
    description: "Complete class analysis, unlock guides, and tier rankings",
    icon: Users,
    href: "/classes",
    color: "text-cyan-400"
  },
  {
    title: "Game Guides",
    description: "Expert-written guides covering strategies, tips, and advanced tactics",
    icon: BookOpen,
    href: "/guides",
    color: "text-green-400"
  },
  {
    title: "Active Codes",
    description: "Latest working promo codes for free items and coins",
    icon: Code,
    href: "/codes",
    color: "text-yellow-400"
  }
]

export default function WikiPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Wiki" }]} />
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

        {/* Featured Guides Section */}
        <Card className="bg-card/50 backdrop-blur-sm border-white/5 mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              <CardTitle>Featured Game Guides</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Expert-written guides based on 100+ hours of gameplay experience. Learn advanced strategies, entity counters, and optimization techniques.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {guidesData.slice(0, 6).map((guide) => (
                <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                  <Card className="bg-black/20 border-white/5 hover:border-primary/20 transition-all group h-full">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-base group-hover:text-primary transition-colors line-clamp-2">
                          {guide.title}
                        </h3>
                        <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors rotate-180 shrink-0 ml-2" />
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{guide.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {guide.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{guide.difficulty}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/guides">
                <Button variant="outline" className="w-full md:w-auto">
                  View All Guides
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Popular Resources Section */}
        <Card className="bg-card/50 backdrop-blur-sm border-white/5 mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <CardTitle>Popular Resources & Quick Access</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/codes" className="block p-4 rounded-lg bg-black/20 border border-white/5 hover:border-primary/20 transition-all group">
                <div className="flex items-center gap-3 mb-2">
                  <Code className="w-5 h-5 text-yellow-400" />
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Active Codes</h3>
                </div>
                <p className="text-sm text-muted-foreground">Latest working promo codes verified daily</p>
              </Link>
              
              <Link href="/monsters" className="block p-4 rounded-lg bg-black/20 border border-white/5 hover:border-primary/20 transition-all group">
                <div className="flex items-center gap-3 mb-2">
                  <Skull className="w-5 h-5 text-orange-400" />
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Monster Guide</h3>
                </div>
                <p className="text-sm text-muted-foreground">Complete entity bestiary with counter strategies</p>
              </Link>
              
              <Link href="/classes" className="block p-4 rounded-lg bg-black/20 border border-white/5 hover:border-primary/20 transition-all group">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Class Tier List</h3>
                </div>
                <p className="text-sm text-muted-foreground">Best classes ranked with unlock guides</p>
              </Link>
              
              <Link href="/items" className="block p-4 rounded-lg bg-black/20 border border-white/5 hover:border-primary/20 transition-all group">
                <div className="flex items-center gap-3 mb-2">
                  <Package className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Items Database</h3>
                </div>
                <p className="text-sm text-muted-foreground">Complete item catalog with stats and locations</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Comprehensive Game Overview Section */}
        <Card className="bg-card/50 backdrop-blur-sm border-white/5 mb-8">
          <CardHeader>
            <CardTitle>About Deadly Delivery Wiki</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Welcome to the most comprehensive Deadly Delivery Wiki and resource hub. Our database is built on <strong className="text-primary">100+ hours of in-game testing</strong> and expert analysis, providing you with accurate stats, proven strategies, and detailed guides to master every aspect of the game.
              </p>
              <p className="leading-relaxed">
                Whether you&apos;re a beginner learning the basics or an experienced player pushing deeper floors, our wiki contains everything you need. From complete weapon and vehicle databases to entity counter-strategies and class optimization guides, all information is verified and regularly updated to ensure accuracy.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Expert-Verified Data</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    All stats, damage values, and spawn patterns are documented through extensive gameplay testing and verified by experienced players.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Daily Updates</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Codes are verified daily, guides are updated with the latest strategies, and new content is added regularly based on game updates.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

