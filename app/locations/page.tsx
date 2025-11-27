import { Metadata } from 'next'
import Link from 'next/link'
import locationsData from '@/data/locations.json'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, ArrowRight, Shield, AlertTriangle } from 'lucide-react'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Deadly Delivery Locations - All Game Areas & Maps | DeadlyBlox',
  description: 'Complete guide to all locations in Deadly Delivery. Learn about safe zones, danger zones, and what to expect in each area.',
  alternates: {
    canonical: '/locations',
  },
}

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-10 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-horror text-primary">Locations</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Explore all locations in Deadly Delivery. Learn about safe zones, danger zones, and what
            you can find in each area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationsData.map((location) => (
            <Link key={location.slug} href={`/location/${location.slug}`}>
              <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all duration-300 h-full group cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {location.name}
                    </CardTitle>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
                  </div>
                  <div className="flex items-center gap-2">
                    {location.type === 'Safe Zone' ? (
                      <Shield className="w-4 h-4 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    )}
                    <span className="text-sm text-muted-foreground">{location.type}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{location.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 text-xs rounded-md bg-black/20 border border-white/5 text-muted-foreground"
                      >
                        {feature}
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

