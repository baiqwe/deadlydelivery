import { MetadataRoute } from 'next'
import itemsData from '@/data/items.json'
import guidesData from '@/data/guides.json'
import locationsData from '@/data/locations.json'
import questsData from '@/data/quests.json'
import { locales, getLocalizedUrl } from '@/lib/i18n-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'
  
  // Static routes (base paths without locale)
  const baseStaticRoutes = [
    { path: '', priority: 1.0, changeFreq: 'daily' as const },
    { path: '/items', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/wiki', priority: 0.8, changeFreq: 'daily' as const },
    { path: '/wiki/weapons', priority: 0.7, changeFreq: 'weekly' as const },
    { path: '/wiki/vehicles', priority: 0.7, changeFreq: 'weekly' as const },
    { path: '/guides', priority: 0.8, changeFreq: 'daily' as const },
    { path: '/guide', priority: 0.8, changeFreq: 'daily' as const },
    { path: '/monsters', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/classes', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/locations', priority: 0.7, changeFreq: 'weekly' as const },
    { path: '/quests', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/privacy', priority: 0.3, changeFreq: 'monthly' as const },
    { path: '/terms', priority: 0.3, changeFreq: 'monthly' as const },
    { path: '/contact', priority: 0.5, changeFreq: 'monthly' as const },
  ]
  
  // Generate localized routes for all static paths
  const staticRoutes: Array<{ url: string; lastModified: Date; changeFrequency: 'daily' | 'weekly' | 'monthly'; priority: number }> = []
  
  baseStaticRoutes.forEach((route) => {
    locales.forEach((locale) => {
      const url = getLocalizedUrl(locale, route.path, baseUrl)
      staticRoutes.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFreq,
        priority: route.priority,
      })
    })
  })
  
  // Also include legacy /pt route for backward compatibility
  staticRoutes.push({
    url: `${baseUrl}/pt`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  })

  // Dynamic routes - Items (Programmatic SEO) - Generate for all locales
  const itemRoutes: Array<{ url: string; lastModified: Date; changeFrequency: 'daily' | 'weekly' | 'monthly'; priority: number }> = []
  itemsData.forEach((item) => {
    locales.forEach((locale) => {
      itemRoutes.push({
        url: getLocalizedUrl(locale, `/item/${item.slug}`, baseUrl),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })
  })

  // Dynamic routes - Guides - Generate for all locales
  const guideRoutes: Array<{ url: string; lastModified: Date; changeFrequency: 'daily' | 'weekly' | 'monthly'; priority: number }> = []
  guidesData.forEach((guide) => {
    locales.forEach((locale) => {
      guideRoutes.push({
        url: getLocalizedUrl(locale, `/guides/${guide.slug}`, baseUrl),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })
  })

  // Dynamic routes - Locations - Generate for all locales
  const locationRoutes: Array<{ url: string; lastModified: Date; changeFrequency: 'daily' | 'weekly' | 'monthly'; priority: number }> = []
  locationsData.forEach((location) => {
    locales.forEach((locale) => {
      locationRoutes.push({
        url: getLocalizedUrl(locale, `/location/${location.slug}`, baseUrl),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      })
    })
  })

  // Combine all routes
  const allRoutes = [
    ...staticRoutes,
    ...itemRoutes,
    ...guideRoutes,
    ...locationRoutes,
  ]

  return allRoutes
}

