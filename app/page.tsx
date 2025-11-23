import { Metadata } from "next"
import Link from "next/link"
import codesData from "@/data/codes.json"
import { CodesList } from "@/components/codes-list"
import { UpdateBanner } from "@/components/update-banner"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Gift, HelpCircle, Settings, CheckCircle2, ChevronRight } from "lucide-react"

const activeCodesCount = codesData.filter((code) => code.status === "active").length
const currentMonth = format(new Date(), "MMMM yyyy")

export const metadata: Metadata = {
  title: `${activeCodesCount} Active Deadly Delivery Codes - ${currentMonth}`,
  description: `Get ${activeCodesCount} active Roblox codes for Deadly Delivery. One-click copy promotional codes and unlock rewards instantly. Updated daily.`,
  openGraph: {
    title: `${activeCodesCount} Active Deadly Delivery Codes - ${currentMonth}`,
    description: `Get ${activeCodesCount} active Roblox codes for Deadly Delivery. Updated daily.`,
  },
}

function generateSchema() {
  const activeCodes = codesData.filter((code) => code.status === "active")
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are Deadly Delivery codes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deadly Delivery codes are promotional codes released by the game developers that players can redeem for free rewards like coins, Revive Syringes, Z-Ray Guns, Baseball Bats, and Pumpkins to help you survive monsters and complete delivery missions."
        }
      },
      {
        "@type": "Question",
        "name": "How do I redeem Deadly Delivery codes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To redeem codes in Deadly Delivery, open the game, click the Settings (Gear icon) at the top, find the code redemption text box, paste the code, and press Redeem. The rewards will be added to your account instantly."
        }
      },
      {
        "@type": "Question",
        "name": "How often are new codes released?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "New Deadly Delivery codes are typically released during special events, holidays, or game updates. We update our list daily to ensure you have access to the latest active codes."
        }
      }
    ]
  }

  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Deadly Delivery",
    "description": "Deadly Delivery is a Roblox game where players experience thrilling delivery adventures. Redeem codes to get free rewards and enhance your gameplay.",
    "applicationCategory": "Game",
    "operatingSystem": "Roblox",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }

  return {
    faqSchema,
    gameSchema
  }
}

export default function Home() {
  const { faqSchema, gameSchema } = generateSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />
      
      <div className="min-h-screen flex flex-col">
        {/* Header / Nav */}
        <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-horror text-primary drop-shadow-md">DeadlyBlox</span>
            </div>
            <nav className="flex items-center gap-4">
              <Link href="/guide">
                <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                  Wiki Guide
                </Button>
              </Link>
              <Button className="bg-primary text-black hover:bg-primary/90 font-bold">
                Play Now
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 text-center overflow-hidden">
          {/* 背景光效装饰 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
          
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary-foreground text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Updated for November 2025
            </div>
            
            <h1 className="text-5xl md:text-7xl font-horror text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-6 drop-shadow-sm">
              Deadly Delivery <br/> <span className="text-primary">Codes & Wiki</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Don't get caught by the monsters empty-handed. Grab the latest active codes for 
              <strong className="text-primary mx-1">Coins</strong>, 
              <strong className="text-secondary mx-1">Weapons</strong>, and 
              <strong className="text-primary mx-1">Revives</strong> instantly.
            </p>

            <div className="max-w-md mx-auto">
              <UpdateBanner />
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="container mx-auto px-4 pb-16 flex-1">
          
          <div className="max-w-3xl mx-auto">
            <CodesList codes={codesData} />
          </div>

          {/* SEO Content Grid - 更加精良的排版 */}
          <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* How to Redeem - Step by Step */}
            <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Settings className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold">How to Redeem?</CardTitle>
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
              </CardContent>
            </Card>

            {/* Rewards Info */}
            <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-secondary/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                    <Gift className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Code Rewards</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Codes are essential for survival. They provide free resources that would otherwise cost Robux or hours of grinding.
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  {[
                    { icon: "💰", text: "Coins for upgrades" },
                    { icon: "💉", text: "Revive Syringes (Life Savers)" },
                    { icon: "🔫", text: "Z-Ray Guns & Weapons" },
                    { icon: "🎃", text: "Exclusive Seasonal Items" }
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

          {/* FAQ Section - Full Width */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-center">Common Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-white/10 rounded-lg bg-card/30 px-4">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  What are Deadly Delivery codes?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-4">
                  Deadly Delivery codes are promotional coupons released by the developers (Flat Head Studio). They grant free in-game rewards instantly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-white/10 rounded-lg bg-card/30 px-4">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  Why is my code not working?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-4">
                  Codes expire quickly. If a code doesn't work, it might be expired or typed incorrectly. Codes are usually case-sensitive!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-white/10 rounded-lg bg-card/30 px-4">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                  How often are new codes released?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-4">
                  New Deadly Delivery codes are typically released during special events, holidays, or game updates. We update our list daily to ensure you have access to the latest active codes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </main>

        <footer className="border-t border-white/10 bg-black/40 py-12 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-2xl font-horror text-muted-foreground mb-4">DeadlyBlox</p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground/60 mb-8">
              <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
              <Link href="/contact" className="hover:text-primary">Contact</Link>
            </div>
            <p className="text-xs text-muted-foreground/40">
              Deadly Delivery Codes & Wiki © {new Date().getFullYear()}. Not affiliated with Roblox Corporation.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
