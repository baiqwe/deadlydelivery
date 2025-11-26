import { Metadata } from "next"
import Link from "next/link"
import codesDataRaw from "@/data/codes.json"
import { CodesList } from "@/components/codes-list"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Home, HelpCircle, Gift, Settings, Gamepad2, ChevronRight, ArrowRight } from "lucide-react"
import type { Code } from "@/types/code"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Deadly Delivery Codes & Guide | DeadlyBlox",
  description: "Get the latest active Roblox codes for Deadly Delivery. One-click copy promotional codes and unlock rewards instantly. Complete guide and FAQ.",
  alternates: {
    canonical: "/",
  },
}

// Type assertion to ensure proper typing
const codesData = codesDataRaw as Code[]
const activeCodesCount = codesData.filter((code) => code.status === "active").length

// FAQ 数据 - 与主页保持一致
const FAQ_DATA = [
  {
    question: "What are Deadly Delivery codes?",
    answer: "Deadly Delivery codes are promotional coupons released by the developers (Flat Head Studio). They grant free in-game rewards instantly like coins, Revive Syringes, Z-Ray Guns, and exclusive items to help you survive."
  },
  {
    question: "Why is my code not working?",
    answer: "Codes expire quickly. If a code doesn't work, it might be expired or typed incorrectly. Codes are usually case-sensitive!"
  },
  {
    question: "How often are new codes released?",
    answer: "New Deadly Delivery codes are typically released during special events, holidays, or game updates. We update our list daily to ensure you have access to the latest active codes."
  }
]

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-horror text-primary drop-shadow-md">DeadlyBlox</span>
            </div>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/guide">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                Wiki Guide
              </Button>
            </Link>
            <Button 
              asChild
              className="bg-primary text-black hover:bg-primary/90 font-bold"
            >
              <a 
                href="https://www.roblox.com/games/125810438250765/Deadly-Delivery" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Play Now
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl md:text-7xl font-horror text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-4 drop-shadow-sm">
              Deadly Delivery <span className="text-primary">Codes & Guide</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Don&apos;t get caught by the monsters empty-handed. Grab the latest active codes and unlock free rewards instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold">
                <Home className="mr-2 h-5 w-5" />
                View All Codes
              </Button>
            </Link>
            <Link href="/guide">
              <Button variant="outline" size="lg">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Read Complete Guide
              </Button>
            </Link>
          </div>
        </section>

        {/* Active Codes Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Gift className="w-8 h-8 text-primary" />
              Latest Active Codes
            </h2>
            <Link href="/">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                View All {activeCodesCount} Codes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <CodesList codes={codesData.slice(0, 3)} />
          {activeCodesCount > 3 && (
            <div className="mt-6 text-center">
              <Link href="/">
                <Button variant="outline" size="lg">
                  View All {activeCodesCount} Active Codes
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </section>

        {/* How to Redeem Section */}
        <section className="mb-16">
          <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Settings className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl font-bold">How to Redeem Codes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {[
                  "Launch Deadly Delivery on Roblox.",
                  "Tap the Settings (Gear icon) at the top.",
                  "Find the text box labeled 'Enter Code'.",
                  "Paste a code and click Redeem."
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground group-hover:bg-primary group-hover:text-black transition-colors">
                      {i + 1}
                    </span>
                    <p className="text-muted-foreground pt-1 group-hover:text-foreground transition-colors">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-6 pt-6 border-t border-white/10">
                <Link href="/guide">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Read Complete Guide
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQ_DATA.map((item, index) => (
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

          <div className="mt-8 text-center">
            <Link href="/">
              <Button variant="outline" size="lg">
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage for More Resources
              </Button>
            </Link>
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/" className="block p-4 rounded-lg bg-black/20 border border-white/5 hover:border-primary/20 transition-all group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Active Codes</h3>
                      <p className="text-sm text-muted-foreground">View all {activeCodesCount} active Deadly Delivery codes</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
                <Link href="/guide" className="block p-4 rounded-lg bg-black/20 border border-white/5 hover:border-primary/20 transition-all group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Game Guide</h3>
                      <p className="text-sm text-muted-foreground">Complete wiki and gameplay guide</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-horror text-muted-foreground mb-4">DeadlyBlox</p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground/60 mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/guide" className="hover:text-primary">Guide</Link>
          </div>
          <p className="text-xs text-muted-foreground/40">
            Deadly Delivery Codes & Wiki © {new Date().getFullYear()}. Not affiliated with Roblox Corporation.
          </p>
        </div>
      </footer>
    </div>
  )
}
