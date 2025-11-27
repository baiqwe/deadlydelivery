import { Metadata } from 'next'
import Link from 'next/link'
import guidesDataRaw from '@/data/guides.json'
import type { Guide } from '@/types/guide'

const guidesData = guidesDataRaw as Guide[]
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, ArrowRight, Tag } from 'lucide-react'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Deadly Delivery Guides - Complete Walkthroughs & Tips | DeadlyBlox',
  description: 'Complete collection of guides for Deadly Delivery. Learn gameplay mechanics, strategies, and tips to master the game.',
  alternates: {
    canonical: '/guides',
  },
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-10 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-horror text-primary">Game Guides</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Complete collection of guides, walkthroughs, and tips to help you master Deadly Delivery.
            Learn strategies, discover secrets, and improve your gameplay.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guidesData.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`}>
              <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all duration-300 h-full group cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {guide.title}
                    </CardTitle>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
                  </div>
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/30">
                    {guide.category}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{guide.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {guide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-black/20 border border-white/5 text-muted-foreground"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

