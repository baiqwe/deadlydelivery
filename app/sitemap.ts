import { MetadataRoute } from 'next'
import itemsData from '@/data/items.json'
import guidesData from '@/data/guides.json'
import locationsData from '@/data/locations.json'
import questsData from '@/data/quests.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'
  
  // Static routes
  const staticRoutes = [
    { path: '', priority: 1.0, changeFreq: 'daily' as const },
    { path: '/pt', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/items', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/wiki', priority: 0.8, changeFreq: 'daily' as const },
    { path: '/wiki/weapons', priority: 0.7, changeFreq: 'weekly' as const },
    { path: '/wiki/vehicles', priority: 0.7, changeFreq: 'weekly' as const },
    { path: '/guides', priority: 0.8, changeFreq: 'daily' as const },
    { path: '/guide', priority: 0.8, changeFreq: 'daily' as const },
    { path: '/locations', priority: 0.7, changeFreq: 'weekly' as const },
    { path: '/quests', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/privacy', priority: 0.3, changeFreq: 'monthly' as const },
    { path: '/terms', priority: 0.3, changeFreq: 'monthly' as const },
    { path: '/contact', priority: 0.5, changeFreq: 'monthly' as const },
  ]

  // Dynamic routes - Items (Programmatic SEO)
  const itemRoutes = itemsData.map((item) => ({
    url: `${baseUrl}/item/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Dynamic routes - Guides
  const guideRoutes = guidesData.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Dynamic routes - Locations
  const locationRoutes = locationsData.map((location) => ({
    url: `${baseUrl}/location/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Combine all routes
  const allRoutes = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFreq,
      priority: route.priority,
    })),
    ...itemRoutes,
    ...guideRoutes,
    ...locationRoutes,
  ]

  return allRoutes
}

