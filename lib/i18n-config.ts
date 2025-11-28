/**
 * Internationalization (i18n) Configuration
 * 
 * SEO-Optimized i18n setup following Google's best practices:
 * - Subdirectory URL structure (/en, /pt-br)
 * - Hreflang tags for all language versions
 * - Bidirectional confirmation and self-referencing
 * - x-default fallback
 * 
 * Reference: https://developers.google.com/search/docs/specialty/international/localized-versions
 */

export type Locale = 'en' | 'pt-br'

export const locales: Locale[] = ['en', 'pt-br'] as const
export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'pt-br': 'Português (Brasil)',
}

export const localeNamesShort: Record<Locale, string> = {
  'en': 'EN',
  'pt-br': 'PT',
}

// Locale to hreflang mapping (ISO 639-1 + ISO 3166-1 Alpha 2)
export const localeToHreflang: Record<Locale, string> = {
  'en': 'en', // English (generic)
  'pt-br': 'pt-BR', // Portuguese (Brazil)
}

/**
 * Get the base URL for a specific locale
 * - English (default): baseUrl (no prefix)
 * - Portuguese: baseUrl/pt-br
 */
export function getLocaleUrl(locale: Locale, baseUrl: string): string {
  if (locale === defaultLocale) {
    return baseUrl
  }
  return `${baseUrl}/${locale}`
}

/**
 * Get locale from pathname
 * Returns the locale detected from the URL path
 */
export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname.startsWith('/pt-br')) {
    return 'pt-br'
  }
  return defaultLocale
}

/**
 * Remove locale prefix from pathname
 * Example: '/pt-br/guides/monster-bestiary' -> '/guides/monster-bestiary'
 */
export function removeLocalePrefix(pathname: string): string {
  if (pathname.startsWith('/pt-br')) {
    return pathname.slice(6) || '/'
  }
  return pathname
}

/**
 * Get the full URL for a specific locale and path
 */
export function getLocalizedUrl(locale: Locale, path: string, baseUrl: string): string {
  // Remove locale prefix from path first
  const pathWithoutLocale = removeLocalePrefix(path)
  const cleanPath = pathWithoutLocale === '/' ? '' : pathWithoutLocale
  
  if (locale === defaultLocale) {
    return cleanPath ? `${baseUrl}${cleanPath}` : baseUrl
  }
  return cleanPath ? `${baseUrl}/${locale}${cleanPath}` : `${baseUrl}/${locale}`
}

/**
 * Extract locale from pathname
 * Returns { locale, pathnameWithoutLocale }
 */
export function parseLocale(pathname: string): { locale: Locale; pathnameWithoutLocale: string } {
  const segments = pathname.split('/').filter(Boolean)
  
  // Check if first segment is a valid locale
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    return {
      locale: segments[0] as Locale,
      pathnameWithoutLocale: '/' + segments.slice(1).join('/'),
    }
  }
  
  // Default to English
  return {
    locale: defaultLocale,
    pathnameWithoutLocale: pathname,
  }
}

/**
 * Generate hreflang links for all language versions of a page
 * This ensures bidirectional confirmation and self-referencing as required by Google
 */
export function generateHreflangLinks(
  currentPath: string,
  baseUrl: string
): Array<{ rel: string; hreflang: string; href: string }> {
  const links: Array<{ rel: string; hreflang: string; href: string }> = []
  
  // Generate link for each locale
  locales.forEach((locale) => {
    const url = getLocalizedUrl(locale, currentPath, baseUrl)
    const hreflang = localeToHreflang[locale]
    links.push({
      rel: 'alternate',
      hreflang,
      href: url,
    })
  })
  
  // Add x-default pointing to English version (default locale)
  const defaultUrl = getLocalizedUrl(defaultLocale, currentPath, baseUrl)
  links.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: defaultUrl,
  })
  
  return links
}

