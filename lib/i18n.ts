// Simple i18n implementation for static export
export type Locale = 'en' | 'pt'

export const locales: Locale[] = ['en', 'pt']
export const defaultLocale: Locale = 'en'

// Portuguese-speaking countries
export const PT_COUNTRIES = [
  'BR', // Brazil
  'PT', // Portugal
  'AO', // Angola
  'MZ', // Mozambique
  'CV', // Cape Verde
  'GW', // Guinea-Bissau
  'ST', // São Tomé and Príncipe
  'TL', // East Timor
]

// Get locale from pathname or cookie
export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/pt')) {
    return 'pt'
  }
  return defaultLocale
}

// Get locale from cookie or localStorage
export function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null
  
  // Check cookie first
  const cookieLocale = document.cookie
    .split('; ')
    .find(row => row.startsWith('locale='))
    ?.split('=')[1] as Locale | undefined

  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // Check localStorage
  const stored = localStorage.getItem('locale') as Locale | null
  if (stored && locales.includes(stored)) {
    return stored
  }

  return null
}

// Set locale in cookie and localStorage
export function setLocale(locale: Locale) {
  if (typeof window === 'undefined') return
  
  // Set cookie (expires in 1 year)
  const expires = new Date()
  expires.setFullYear(expires.getFullYear() + 1)
  document.cookie = `locale=${locale}; expires=${expires.toUTCString()}; path=/`
  
  // Set localStorage
  localStorage.setItem('locale', locale)
}

// Detect country from IP (client-side, using a free API)
export async function detectCountryFromIP(): Promise<string | null> {
  try {
    const response = await fetch('https://ipapi.co/country_code/')
    if (response.ok) {
      return await response.text()
    }
  } catch (error) {
    console.error('Failed to detect country:', error)
  }
  return null
}

// Auto-detect locale based on country
export async function detectLocaleFromCountry(): Promise<Locale> {
  const country = await detectCountryFromIP()
  if (country && PT_COUNTRIES.includes(country)) {
    return 'pt'
  }
  return defaultLocale
}

