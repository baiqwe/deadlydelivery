/**
 * Portuguese (Brazil) Homepage
 * 
 * URL: /pt-br
 * Hreflang: pt-BR
 * 
 * This is the localized Portuguese version of the homepage.
 * Follows SEO best practices with proper hreflang tags and localized content.
 */

import { Metadata } from "next"
import Link from "next/link"
import codesDataRaw from "@/data/codes.json"
import { CodesList } from "@/components/codes-list"
import { UpdateBanner } from "@/components/update-banner"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Gift, HelpCircle, Settings, ChevronRight } from "lucide-react"
import { SocialShare } from "@/components/social-share"
import FeatureCard from "@/components/feature-card"
import { AuthorBio } from "@/components/author-bio"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { YouTubeLite } from "@/components/youtube-lite"
import type { Code } from "@/types/code"
import { generateHreflangAlternates } from "@/lib/i18n-utils"
import { localeToHreflang, getLocalizedUrl } from "@/lib/i18n-config"

const codesData = codesDataRaw as Code[]
const activeCodesCount = codesData.filter((code) => code.status === "active").length
const currentMonth = format(new Date(), "MMMM yyyy", { locale: ptBR })
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

// FAQ Data in Portuguese
const FAQ_DATA_PT = [
  {
    question: "O que são códigos de Deadly Delivery?",
    answer: "Os códigos de Deadly Delivery são cupons promocionais lançados pelos desenvolvedores (Flat Head Studio). Eles concedem recompensas gratuitas instantaneamente, como moedas, Seringas de Revive, Z-Ray Guns e itens exclusivos para ajudá-lo a sobreviver aos ambientes perigosos de esgotos."
  },
  {
    question: "Por que meu código não está funcionando?",
    answer: "Os códigos expiram rapidamente. Se um código não funcionar, pode estar expirado ou digitado incorretamente. Os códigos geralmente diferenciam maiúsculas de minúsculas! Certifique-se de copiar e colar o código exato da nossa lista verificada."
  },
  {
    question: "Com que frequência novos códigos são lançados?",
    answer: "Novos códigos de Deadly Delivery são geralmente lançados durante eventos especiais, feriados ou atualizações do jogo. Atualizamos nossa lista diariamente para garantir que você tenha acesso aos códigos ativos mais recentes. Nossa equipe verifica manualmente cada código antes de listar."
  },
  {
    question: "Que recompensas posso obter dos códigos?",
    answer: "Códigos ativos podem fornecer várias recompensas, incluindo moedas (para melhorias e desbloqueios de classes), Seringas de Revive (críticas para sobrevivência em equipe), armas como a Z-Ray Gun e itens sazonais. Cada código é verificado e testado antes de ser adicionado à nossa lista."
  },
  {
    question: "Como resgatar códigos em Deadly Delivery?",
    answer: "Para resgatar códigos: 1) Inicie o Deadly Delivery no Roblox, 2) Clique em Configurações (ícone de Engrenagem) no topo da tela, 3) Encontre a caixa de texto 'Inserir Código', 4) Cole o código que você copiou do nosso site, 5) Clique em Resgatar para reivindicar suas recompensas instantaneamente."
  }
]

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `${activeCodesCount} Códigos Ativos de Deadly Delivery - ${currentMonth} | DeadlyBlox`,
  description: `Obtenha ${activeCodesCount} códigos ativos do Roblox para Deadly Delivery. Copie códigos promocionais com um clique e desbloqueie recompensas instantaneamente. Atualizado diariamente.`,
  alternates: {
    canonical: "/pt-br",
    languages: generateHreflangAlternates('/pt-br'),
  },
  openGraph: {
    title: `${activeCodesCount} Códigos Ativos de Deadly Delivery - ${currentMonth}`,
    description: `Obtenha ${activeCodesCount} códigos ativos do Roblox para Deadly Delivery. Atualizado diariamente.`,
    url: getLocalizedUrl('pt-br', '/', baseUrl),
    locale: 'pt_BR',
    alternateLocale: ['en'],
  },
}

export default function PortugueseBRPage() {
  return (
    <>
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
              Atualizado em {currentMonth}
            </div>

            <h1 className="text-5xl md:text-7xl font-horror text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-6 drop-shadow-sm">
              Deadly Delivery <br /> <span className="text-primary">Códigos & Wiki</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Não seja pego pelos monstros de mãos vazias. Pegue os últimos códigos ativos para{" "}
              <strong className="text-primary mx-1">Moedas</strong>,{" "}
              <strong className="text-secondary mx-1">Armas</strong> e{" "}
              <strong className="text-primary mx-1">Revivas</strong> instantaneamente.
            </p>

            <div className="max-w-md mx-auto">
              <UpdateBanner />
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="container mx-auto px-4 pb-16 flex-1">
          <Breadcrumbs items={[{ label: "Início" }]} />

          <div className="max-w-3xl mx-auto">
            <CodesList codes={codesData} />

            {/* Social Share */}
            <div className="mt-8">
              <SocialShare title="Códigos de Deadly Delivery" />
            </div>

            {/* Internal Link to Guide */}
            <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all duration-300 mt-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Precisa de Ajuda?</h3>
                    <p className="text-muted-foreground mb-4">
                      Não sabe como resgatar códigos? Confira nosso{" "}
                      <Link href="/pt-br/guides" className="text-primary hover:underline font-medium">
                        Guia Completo de Deadly Delivery
                      </Link>{" "}
                      com instruções passo a passo, dicas de gameplay e muito mais!
                    </p>
                    <Link href="/pt-br/guides">
                      <Button variant="outline" size="sm">
                        Ver Guia
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Wiki Quick Links */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Gamepad2 className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-center">Bancos de Dados Wiki</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FeatureCard
                title="Banco de Dados de Itens"
                description="Navegue por todos os itens, armas e veículos"
                icon="📦"
                href="/pt-br/items"
              />
              <FeatureCard
                title="Armas"
                description="Banco de dados completo de armas com estatísticas"
                icon="🔫"
                href="/pt-br/wiki/weapons"
              />
              <FeatureCard
                title="Veículos"
                description="Todos os veículos com velocidade e capacidade"
                icon="🚗"
                href="/pt-br/wiki/vehicles"
              />
              <FeatureCard
                title="Guias"
                description="Guias de gameplay completos e dicas"
                icon="📚"
                href="/pt-br/guides"
              />
            </div>
          </div>

          {/* SEO Content Grid */}
          <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Settings className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Como Resgatar?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {[
                    "Inicie o Deadly Delivery no Roblox.",
                    "Toque no ícone de Configurações (Engrenagem) no topo.",
                    "Encontre a caixa de texto 'Inserir Código'.",
                    "Cole um código e clique em Resgatar."
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground group-hover:bg-primary group-hover:text-black transition-colors">
                        {i + 1}
                      </span>
                      <p className="text-muted-foreground pt-1 group-hover:text-foreground transition-colors">{step}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-secondary/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                    <Gift className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Recompensas dos Códigos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Os códigos são essenciais para sobrevivência. Eles fornecem recursos gratuitos que, de outra forma, custariam Robux ou horas de grinding.
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  {[
                    { icon: "💰", text: "Moedas para melhorias" },
                    { icon: "💉", text: "Seringas de Revive (Salva-vidas)" },
                    { icon: "🔫", text: "Z-Ray Guns e Armas" },
                    { icon: "🎃", text: "Itens Exclusivos Sazonais" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 p-3 rounded-md bg-black/20 border border-white/5">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-center">Perguntas Frequentes</h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQ_DATA_PT.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className="border border-white/10 rounded-lg bg-card/30 px-4">
                  <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Video Tutorials Section */}
          <section className="mt-20 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Gamepad2 className="w-7 h-7 text-primary" />
              <h2 className="text-3xl font-bold text-center">Tutoriais em Vídeo e Guias</h2>
            </div>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Aprenda com jogadores especialistas através desses guias em vídeo abrangentes que cobrem mecânicas de gameplay, estratégias e dicas.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all">
                <CardContent className="p-0">
                  <div className="aspect-video bg-black/20 rounded-t-lg overflow-hidden">
                    <YouTubeLite
                      videoId="RAbD9QEmWHw"
                      title="Guia Completo para Iniciantes - Deadly Delivery"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Guia Completo para Iniciantes</h3>
                    <p className="text-sm text-muted-foreground">
                      Perfeito para jogadores iniciantes. Aprenda o básico de movimento, coleta de itens, mecânicas do elevador e estratégias de sobrevivência.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all">
                <CardContent className="p-0">
                  <div className="aspect-video bg-black/20 rounded-t-lg overflow-hidden">
                    <YouTubeLite
                      videoId="VV2ZZ_y43vk"
                      title="Estratégias Avançadas e Dicas - Deadly Delivery"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Estratégias Avançadas e Dicas</h3>
                    <p className="text-sm text-muted-foreground">
                      Domine técnicas avançadas incluindo estratégias de contra-ataque de entidades, navegação em andares profundos e coordenação otimizada de equipe.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Author Bio */}
          <div className="mt-16 max-w-3xl mx-auto">
            <AuthorBio
              authorName="Equipe DeadlyBlox"
              authorRole="Especialista em Deadly Delivery e Verificador de Códigos"
              expertise={["Análise de Mecânicas de Jogo", "Verificação de Códigos", "Estratégia de Inimigos", "Progressão de Classes"]}
              experience="Mais de 100 horas de experiência verificada em gameplay"
            />
          </div>
        </main>
      </div>
    </>
  )
}

