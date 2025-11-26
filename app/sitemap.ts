import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'
  
  const routes = [
    { path: '', priority: 1.0, changeFreq: 'daily' as const },
    { path: '/guide', priority: 0.8, changeFreq: 'daily' as const },
    { path: '/privacy', priority: 0.3, changeFreq: 'monthly' as const },
    { path: '/terms', priority: 0.3, changeFreq: 'monthly' as const },
    { path: '/contact', priority: 0.5, changeFreq: 'monthly' as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }))

  return routes
}

