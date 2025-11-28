import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import itemsData from '@/data/items.json'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Tag, Package } from 'lucide-react'
import type { Item } from '@/types/item'
import { Breadcrumbs } from '@/components/breadcrumbs'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return itemsData.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const item = itemsData.find((i) => i.slug === params.slug)

  if (!item) {
    return {
      title: 'Item Not Found',
    }
  }

  return {
    metadataBase: new URL(baseUrl),
    title: `${item.name} - Deadly Delivery Item | DeadlyBlox`,
    description: item.description,
    alternates: {
      canonical: `/item/${item.slug}`,
    },
    openGraph: {
      title: `${item.name} - Deadly Delivery`,
      description: item.description,
      type: 'website',
      url: `${baseUrl}/item/${item.slug}`,
    },
  }
}

export default function ItemPage({ params }: PageProps) {
  const item = itemsData.find((i) => i.slug === params.slug) as Item | undefined

  if (!item) {
    notFound()
  }

  // Generate Schema.org for Item
  const itemSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": item.name,
    "description": item.description,
    "category": item.type,
    "brand": {
      "@type": "Brand",
      "name": "Deadly Delivery"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "USD"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemSchema) }}
      />
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-10 max-w-4xl">
          <Breadcrumbs items={[
            { label: "Items", href: "/items" },
            { label: item.name }
          ]} />
          <div className="mb-6">
            <Link href="/items">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Items
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl font-horror text-primary mb-2">{item.name}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    {item.type}
                  </span>
                  <span className="px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-semibold">
                    {item.stats.rarity || 'Common'}
                  </span>
                </div>
                <p className="text-lg text-foreground leading-relaxed">{item.description}</p>
              </div>

              {/* Stats */}
              <Card className="bg-card/50 backdrop-blur-sm border-white/5">
                <CardHeader>
                  <CardTitle>Item Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(item.stats).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-sm text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-lg font-semibold text-foreground">{value || 'N/A'}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <Card className="bg-card/50 backdrop-blur-sm border-white/5">
                <CardHeader>
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item.location}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-white/5">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/items">
                    <Button variant="outline" className="w-full justify-start">
                      <Package className="mr-2 h-4 w-4" />
                      All Items
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" className="w-full justify-start">
                      <Package className="mr-2 h-4 w-4" />
                      Codes
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

