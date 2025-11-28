/**
 * Localized Homepage
 * 
 * This creates localized versions of the homepage:
 * - /en (or /) - English (default)
 * - /pt-br - Portuguese (Brazil)
 * 
 * SEO Benefits:
 * - Clear URL structure for search engines
 * - Hreflang tags for proper language targeting
 * - Separate URLs allow Google to index and rank each language version independently
 */

import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import codesDataRaw from "@/data/codes.json"
import { CodesList } from "@/components/codes-list"
import { UpdateBanner } from "@/components/update-banner"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Gift, HelpCircle, Settings, Shield, TrendingUp, Users } from "lucide-react"
import { SocialShare } from "@/components/social-share"
import FeatureCard from "@/components/feature-card"
import { AuthorBio } from "@/components/author-bio"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Code } from "@/types/code"
import { locales, type Locale, localeToHreflang, generateHreflangAlternates, removeLocalePrefix, getLocalizedUrl } from "@/lib/i18n-config"
import { format as formatDate } from "date-fns"
import { ptBR, enUS } from "date-fns/locale"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'
const codesData = codesDataRaw as Code[]
const activeCodesCount = codesData.filter((code) => code.status === "active").length

// Localized content
const localizedContent = {
  en: {
    title: `${activeCodesCount} Active Deadly Delivery Codes - ${format(new Date(), "MMMM yyyy", { locale: enUS })}`,
    description: `Get ${activeCodesCount} active Roblox codes for Deadly Delivery. One-click copy promotional codes and unlock rewards instantly. Updated daily.`,
    heroTitle: "Deadly Delivery",
    heroSubtitle: "Codes & Wiki",
    heroDescription: "Don't get caught by the monsters empty-handed. Grab the latest active codes for Coins, Weapons, and Revives instantly.",
    // ... more English content
  },
  'pt-br': {
    title: `${activeCodesCount} Códigos Ativos de Deadly Delivery - ${format(new Date(), "MMMM yyyy", { locale: ptBR })}`,
    description: `Obtenha ${activeCodesCount} códigos ativos do Roblox para Deadly Delivery. Copie códigos promocionais com um clique e desbloqueie recompensas instantaneamente. Atualizado diariamente.`,
    heroTitle: "Deadly Delivery",
    heroSubtitle: "Códigos e Wiki",
    heroDescription: "Não seja pego pelos monstros de mãos vazias. Pegue os códigos ativos mais recentes para Moedas, Armas e Revivas instantaneamente.",
    // ... more Portuguese content
  }
}

interface PageProps {
  params: {
    locale: Locale
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params
  const content = localizedContent[locale]
  const currentPath = locale === 'en' ? '/' : `/${locale}`
  
  return {
    metadataBase: new URL(baseUrl),
    title: content.title,
    description: content.description,
    alternates: {
      canonical: currentPath,
      languages: generateHreflangAlternates(currentPath),
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: getLocalizedUrl(locale, '/', baseUrl),
      locale: localeToHreflang[locale],
      alternateLocale: locales.filter(l => l !== locale).map(l => localeToHreflang[l]),
    },
  }
}

export default function LocalizedHomePage({ params }: PageProps) {
  const { locale } = params
  
  if (!locales.includes(locale)) {
    notFound()
  }
  
  const content = localizedContent[locale]
  const currentMonth = format(new Date(), "MMMM yyyy", { locale: locale === 'pt-br' ? ptBR : enUS })
  
  // Generate Schema.org with hreflang
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": content.title,
    "description": content.description,
    "inLanguage": localeToHreflang[locale],
    "url": getLocalizedUrl(locale, '/', baseUrl),
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
          
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary-foreground text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              {locale === 'pt-br' ? `Atualizado em ${currentMonth}` : `Updated for ${currentMonth}`}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-horror text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-6 drop-shadow-sm">
              {content.heroTitle} <br/> <span className="text-primary">{content.heroSubtitle}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              {content.heroDescription}
            </p>

            <div className="max-w-md mx-auto">
              <UpdateBanner />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 pb-16 flex-1">
          <div className="max-w-3xl mx-auto">
            <CodesList codes={codesData} />
            
            {/* Video Tutorials Section */}
            <section className="mt-20 max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <Gamepad2 className="w-7 h-7 text-primary" />
                <h2 className="text-3xl font-bold text-center">
                  {locale === 'pt-br' ? 'Tutoriais em Vídeo e Guias' : 'Video Tutorials & Guides'}
                </h2>
              </div>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                {locale === 'pt-br' 
                  ? 'Aprenda com jogadores especialistas através desses guias em vídeo abrangentes que cobrem mecânicas de gameplay, estratégias e dicas.'
                  : 'Learn from expert players with these comprehensive video guides covering gameplay mechanics, strategies, and tips.'
                }
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-black/20 rounded-t-lg overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/RAbD9QEmWHw"
                        title={locale === 'pt-br' ? 'Guia Completo para Iniciantes' : 'Deadly Delivery Beginner Guide - Complete Tutorial'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {locale === 'pt-br' ? 'Guia Completo para Iniciantes' : 'Beginner\'s Complete Guide'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {locale === 'pt-br'
                          ? 'Perfeito para jogadores iniciantes. Aprenda o básico de movimento, coleta de itens, mecânicas do elevador e estratégias de sobrevivência.'
                          : 'Perfect for first-time players. Learn the basics of movement, item collection, elevator mechanics, and survival strategies.'
                        }
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-black/20 rounded-t-lg overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/VV2ZZ_y43vk"
                        title={locale === 'pt-br' ? 'Estratégias Avançadas e Dicas' : 'Deadly Delivery Advanced Strategies & Tips'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {locale === 'pt-br' ? 'Estratégias Avançadas e Dicas' : 'Advanced Strategies & Tips'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {locale === 'pt-br'
                          ? 'Domine técnicas avançadas incluindo estratégias de contra-ataque de entidades, navegação em andares profundos e coordenação otimizada de equipe.'
                          : 'Master advanced techniques including entity counter-strategies, deep floor navigation, and optimal team coordination.'
                        }
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}

