"use client"

import * as React from "react"
import { useRouter, usePathname } from "next/navigation"
import { Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { locales, type Locale, localeNames, localeNamesShort, getLocaleFromPathname, removeLocalePrefix } from "@/lib/i18n-config"

export function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLocale, setCurrentLocale] = React.useState<Locale>(() => getLocaleFromPathname(pathname))

  React.useEffect(() => {
    setCurrentLocale(getLocaleFromPathname(pathname))
  }, [pathname])

  const handleLocaleChange = (locale: Locale) => {
    // Get path without locale prefix
    const pathWithoutLocale = removeLocalePrefix(pathname)
    
    // Generate new localized path (relative URL, not absolute)
    let newPath = pathWithoutLocale
    
    if (locale === 'pt-br') {
      // Add pt-br prefix
      newPath = `/pt-br${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    } else {
      // Remove locale prefix for English (default)
      newPath = pathWithoutLocale === '/' ? '/' : pathWithoutLocale
    }
    
    // Only navigate if locale actually changed
    if (locale !== currentLocale) {
      router.push(newPath)
    }
    
    // Store preference (optional - using cookie/localStorage)
    if (typeof window !== 'undefined') {
      const expires = new Date()
      expires.setFullYear(expires.getFullYear() + 1)
      document.cookie = `locale=${locale}; expires=${expires.toUTCString()}; path=/`
      localStorage.setItem('locale', locale)
    }
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="text-muted-foreground hover:text-primary hover:bg-primary/10"
          type="button"
        >
          <Globe className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
          <span className="sm:hidden">{localeNamesShort[currentLocale]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-black/95 border-white/10 backdrop-blur-xl"
        sideOffset={5}
        style={{ zIndex: 1000 }}
      >
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onSelect={(e) => {
              e.preventDefault()
              handleLocaleChange(locale)
            }}
            className="cursor-pointer flex items-center justify-between hover:bg-primary/10 focus:bg-primary/10"
          >
            <span>{localeNames[locale]}</span>
            {currentLocale === locale && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

