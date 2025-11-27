import { Metadata } from "next"
import Link from "next/link"
import codesDataRaw from "@/data/codes.json"
import { CodesList } from "@/components/codes-list"
import { UpdateBanner } from "@/components/update-banner"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Gift, HelpCircle, Settings, ChevronRight, ArrowLeft } from "lucide-react"
import type { Code } from "@/types/code"

const codesData = codesDataRaw as Code[]
const activeCodesCount = codesData.filter((code) => code.status === "active").length
const currentMonth = format(new Date(), "MMMM yyyy")

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `${activeCodesCount} Códigos Ativos de Deadly Delivery - ${currentMonth} | DeadlyBlox`,
  description: `Obtenha ${activeCodesCount} códigos ativos do Roblox para Deadly Delivery. Copie códigos promocionais com um clique e desbloqueie recompensas instantaneamente. Atualizado diariamente.`,
  alternates: {
    canonical: "/pt",
  },
  openGraph: {
    title: `${activeCodesCount} Códigos Ativos de Deadly Delivery - ${currentMonth}`,
    description: `Obtenha ${activeCodesCount} códigos ativos do Roblox para Deadly Delivery. Atualizado diariamente.`,
    url: `${baseUrl}/pt`,
  },
}

export default function PortuguesePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Nav */}

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
            Deadly Delivery <br/> <span className="text-primary">Códigos & Wiki</span>
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
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Gift className="w-8 h-8 text-primary" />
              Códigos Ativos de Deadly Delivery
            </h2>
            <p className="text-muted-foreground">
              Aqui estão os códigos mais recentes para Deadly Delivery no Roblox. Clique no botão &quot;COPIAR&quot; para copiar o código e use-o no jogo!
            </p>
          </div>

          <CodesList codes={codesData} />

          {/* Como Resgatar */}
          <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all duration-300 mt-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Settings className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-bold">Como Resgatar Códigos?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {[
                  "Inicie Deadly Delivery no Roblox.",
                  "Toque no ícone de Configurações (Engrenagem) no topo.",
                  "Encontre a caixa de texto 'Digite o Código'.",
                  "Cole o código e clique em Resgatar."
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
        </div>
      </main>

      <footer className="border-t border-white/10 bg-black/40 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-horror text-muted-foreground mb-4">DeadlyBlox</p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground/60 mb-8">
            <Link href="/" className="hover:text-primary">English</Link>
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
          <p className="text-xs text-muted-foreground/40">
            Deadly Delivery Códigos & Wiki © {new Date().getFullYear()}. Não afiliado à Roblox Corporation.
          </p>
        </div>
      </footer>
    </div>
  )
}

