/**
 * Server-side utility functions for generating hreflang metadata
 * These can be used in Next.js metadata exports
 */

import { locales, defaultLocale, localeToHreflang, getLocalizedUrl, removeLocalePrefix } from './i18n-config'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

/**
 * Generate hreflang alternates for Next.js Metadata API
 * This returns the format expected by Next.js Metadata.alternates.languages
 */
export function generateHreflangAlternates(currentPath: string): Record<string, string> {
  const alternates: Record<string, string> = {}
  
  // Remove locale prefix to get base path
  const basePath = removeLocalePrefix(currentPath)
  
  locales.forEach((locale) => {
    const url = getLocalizedUrl(locale, basePath, baseUrl)
    const hreflang = localeToHreflang[locale]
    alternates[hreflang] = url
  })
  
  // Add x-default
  const defaultUrl = getLocalizedUrl(defaultLocale, basePath, baseUrl)
  alternates['x-default'] = defaultUrl
  
  return alternates
}

/**
 * Generate hreflang links as HTML link tags (for use in server components)
 */
export function generateHreflangLinkTags(currentPath: string): string {
  const basePath = removeLocalePrefix(currentPath)
  const links: string[] = []
  
  locales.forEach((locale) => {
    const url = getLocalizedUrl(locale, basePath, baseUrl)
    const hreflang = localeToHreflang[locale]
    links.push(`<link rel="alternate" hreflang="${hreflang}" href="${url}" />`)
  })
  
  // Add x-default
  const defaultUrl = getLocalizedUrl(defaultLocale, basePath, baseUrl)
  links.push(`<link rel="alternate" hreflang="x-default" href="${defaultUrl}" />`)
  
  return links.join('\n')
}

