import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import locationsData from '@/data/locations.json'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, MapPin, Shield, AlertTriangle, Check } from 'lucide-react'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return locationsData.map((location) => ({
    slug: location.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = locationsData.find((l) => l.slug === params.slug)

  if (!location) {
    return {
      title: 'Location Not Found',
    }
  }

  return {
    metadataBase: new URL(baseUrl),
    title: `${location.name} - Deadly Delivery Location | DeadlyBlox`,
    description: location.description,
    alternates: {
      canonical: `/location/${location.slug}`,
    },
  }
}

export default function LocationDetailPage({ params }: PageProps) {
  const location = locationsData.find((l) => l.slug === params.slug)

  if (!location) {
    notFound()
  }

  const isSafeZone = location.type === 'Safe Zone'

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="mb-6">
          <Link href="/locations">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Locations
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                {isSafeZone ? (
                  <Shield className="w-6 h-6 text-green-400" />
                ) : (
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                )}
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 text-sm font-semibold">
                  {location.type}
                </span>
              </div>
              <h1 className="text-4xl font-horror text-primary mb-4">{location.name}</h1>
              <p className="text-lg text-foreground leading-relaxed">{location.description}</p>
            </div>

            {/* Features */}
            <Card className="bg-card/50 backdrop-blur-sm border-white/5">
              <CardHeader>
                <CardTitle>Location Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {location.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card className="bg-card/50 backdrop-blur-sm border-white/5">
              <CardHeader>
                <CardTitle className="text-lg">Location Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  {isSafeZone ? (
                    <>
                      <Shield className="w-6 h-6 text-green-400" />
                      <span className="text-foreground font-semibold">Safe Zone</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                      <span className="text-foreground font-semibold">Danger Zone</span>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-white/5">
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/locations">
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="mr-2 h-4 w-4" />
                    All Locations
                  </Button>
                </Link>
                <Link href="/items">
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="mr-2 h-4 w-4" />
                    Items
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

