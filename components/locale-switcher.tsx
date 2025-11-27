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
import { locales, type Locale, setLocale, getLocaleFromPath } from "@/lib/i18n"

const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Português"
}

export function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLocale, setCurrentLocale] = React.useState<Locale>(() => getLocaleFromPath(pathname))

  React.useEffect(() => {
    setCurrentLocale(getLocaleFromPath(pathname))
  }, [pathname])

  const handleLocaleChange = (locale: Locale) => {
    // Store preference
    setLocale(locale)

    // Update path
    let newPath = pathname

    // Remove current locale prefix
    if (currentLocale === 'pt' && pathname.startsWith('/pt')) {
      newPath = pathname.replace(/^\/pt/, '') || '/'
    }

    // Add new locale prefix if not default
    if (locale === 'pt') {
      newPath = `/pt${newPath === '/' ? '' : newPath}`
    }

    // Navigate to new path
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
          <Globe className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
          <span className="sm:hidden">{currentLocale.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-black/95 border-white/10 backdrop-blur-xl">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            className="cursor-pointer flex items-center justify-between"
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

