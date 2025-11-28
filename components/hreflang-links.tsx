/**
 * Hreflang Links Component
 * 
 * Generates hreflang tags for SEO internationalization following Google's best practices:
 * - Bidirectional confirmation (all pages link to all language versions)
 * - Self-referencing (each page links to itself)
 * - x-default fallback
 * 
 * Reference: https://developers.google.com/search/docs/specialty/international/localized-versions
 */

import { generateHreflangLinks } from '@/lib/i18n-config'

interface HreflangLinksProps {
  currentPath: string
  baseUrl: string
}

export function HreflangLinks({ currentPath, baseUrl }: HreflangLinksProps) {
  const links = generateHreflangLinks(currentPath, baseUrl)

  return (
    <>
      {links.map((link) => (
        <link
          key={`${link.hreflang}-${link.href}`}
          rel={link.rel}
          hrefLang={link.hreflang}
          href={link.href}
        />
      ))}
    </>
  )
}

