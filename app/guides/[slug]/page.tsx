import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import guidesDataRaw from '@/data/guides.json'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, BookOpen, Tag, Calendar, User } from 'lucide-react'
import { AuthorBio } from '@/components/author-bio'
import { Breadcrumbs } from '@/components/breadcrumbs'
import type { Guide } from '@/types/guide'

const guidesData = guidesDataRaw as Guide[]

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return guidesData.map((guide) => ({
    slug: guide.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = guidesData.find((g) => g.slug === params.slug)

  if (!guide) {
    return {
      title: 'Guide Not Found',
    }
  }

  return {
    metadataBase: new URL(baseUrl),
    title: `${guide.title} - Deadly Delivery Guide | DeadlyBlox`,
    description: guide.description,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
  }
}

export default function GuideDetailPage({ params }: PageProps) {
  const guide = guidesData.find((g) => g.slug === params.slug)

  if (!guide) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-10 max-w-5xl">
        <Breadcrumbs items={[
          { label: "Guides", href: "/guides" },
          { label: guide.title }
        ]} />
        <div className="mb-6">
          <Link href="/guides">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Guides
            </Button>
          </Link>
        </div>

        <article>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 text-sm font-semibold">
                {guide.category}
              </span>
            </div>
            <h1 className="text-4xl font-horror text-primary mb-4">{guide.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">{guide.description}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{guide.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Updated {guide.lastUpdated}</span>
              </div>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 text-xs">
                {guide.difficulty}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {guide.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/20 border border-white/5 text-sm text-muted-foreground"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardContent className="p-8 prose prose-invert max-w-none">
              <div className="space-y-8">
                {guide.content.map((section, index) => (
                  <div key={index} className="border-b border-white/5 pb-6 last:border-b-0 last:pb-0">
                    <h2 className="text-2xl font-bold text-primary mb-3">{section.section}</h2>
                    <p className="text-foreground leading-relaxed">{section.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Source & Verification Note */}
          <Card className="bg-card/30 backdrop-blur-sm border-white/5 mt-6">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Source:</strong> This guide is based on verified gameplay testing and community research. 
                Information last verified on {guide.lastUpdated}. All strategies and mechanics have been tested in-game by experienced players.
              </p>
            </CardContent>
          </Card>

          {/* Author Bio */}
          <AuthorBio 
            authorName={guide.author}
            authorRole="Deadly Delivery Strategy Expert"
            expertise={guide.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1))}
            experience="Extensive gameplay experience with verified strategies"
          />
        </article>
      </main>
    </div>
  )
}
