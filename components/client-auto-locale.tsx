"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { detectLocaleFromCountry, getStoredLocale, getLocaleFromPath } from "@/lib/i18n"

// Component to auto-detect and redirect based on IP location
export function ClientAutoLocale() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Only run once on mount
    const currentLocale = getLocaleFromPath(pathname)
    
    // Check if user has already set a preference
    const storedLocale = getStoredLocale()
    if (storedLocale && storedLocale !== currentLocale) {
      // User has a preference, respect it
      return
    }

    // If already on PT page, don't redirect
    if (currentLocale === 'pt') {
      return
    }

    // Auto-detect locale from IP (only on homepage)
    if (pathname === '/') {
      detectLocaleFromCountry().then((detectedLocale) => {
        if (detectedLocale === 'pt') {
          // Redirect to PT version
          router.push('/pt')
        }
      }).catch(() => {
        // Silent fail - if detection fails, stay on current page
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Only run once on mount

  return null // This component doesn't render anything
}

