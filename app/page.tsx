import { Metadata } from "next"
import Link from "next/link"
import codesData from "@/data/codes.json"
import { CodesList } from "@/components/codes-list"
import { UpdateBanner } from "@/components/update-banner"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-4xl sm:text-5xl font-horror text-primary mb-2">
                  Deadly Delivery
                </h1>
                <p className="text-xl text-muted-foreground">
                  Roblox Codes & Wiki
                </p>
              </div>
              <Link href="/guide">
                <Button variant="outline">Guide</Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <UpdateBanner />
          
          <div className="mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Click the COPY button to instantly copy codes to your clipboard. 
              Redeem them in-game for free rewards!
            </p>
          </div>

          <CodesList codes={codesData} />

          {/* SEO Content Sections */}
          <div className="mt-12 space-y-8">
            {/* What are Deadly Delivery Codes? */}
            <Card className="bg-black/40 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  What are Deadly Delivery Codes?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Deadly Delivery codes are promotional codes released by the game developers that players can redeem for free rewards. These codes give you access to valuable in-game items like <strong className="text-foreground">Coins</strong>, <strong className="text-foreground">Revive Syringes</strong>, <strong className="text-foreground">Z-Ray Gun</strong>, <strong className="text-foreground">Baseball Bats</strong>, and <strong className="text-foreground">Pumpkins</strong> to help you survive the dangerous delivery missions and monsters.
                </p>
                <p className="text-muted-foreground">
                  Using these codes is completely free and can significantly enhance your gameplay experience in this thrilling horror co-op Roblox game.
                </p>
              </CardContent>
            </Card>

            {/* How to Redeem Codes */}
            <Card className="bg-black/40 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  How to Redeem Deadly Delivery Codes?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Follow these simple steps to redeem codes in Deadly Delivery:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Launch Roblox and start the <strong className="text-foreground">Deadly Delivery</strong> game.</li>
                  <li>Click the <strong className="text-foreground">Settings</strong> icon (Gear icon) at the top of your screen.</li>
                  <li>Find the code redemption text box in the settings menu.</li>
                  <li>Copy a code from this page using the COPY button.</li>
                  <li>Paste the code into the text box in-game.</li>
                  <li>Press <strong className="text-foreground">Redeem</strong> and enjoy your free rewards!</li>
                </ol>
                <p className="text-muted-foreground mt-4">
                  The rewards will be added to your account instantly after successful redemption.
                </p>
              </CardContent>
            </Card>

            {/* What do Codes Give You? */}
            <Card className="bg-black/40 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  What do Deadly Delivery Codes Give You?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Deadly Delivery codes provide various valuable rewards including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Coins</strong> - Currency to purchase items and upgrades</li>
                  <li><strong className="text-foreground">Revive Syringes</strong> - Essential healing items to keep you alive</li>
                  <li><strong className="text-foreground">Z-Ray Gun</strong> - Powerful weapon to fight monsters</li>
                  <li><strong className="text-foreground">Baseball Bats</strong> - Melee weapons for close combat</li>
                  <li><strong className="text-foreground">Pumpkins</strong> - Special seasonal items</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Each code gives different rewards, so make sure to redeem all active codes to maximize your inventory!
                </p>
              </CardContent>
            </Card>

            {/* FAQ Accordion - Visible version matching Schema */}
            <Card className="bg-black/40 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      What are Deadly Delivery codes?
                    </AccordionTrigger>
                    <AccordionContent>
                      Deadly Delivery codes are promotional codes released by the game developers that players can redeem for free rewards like coins, Revive Syringes, Z-Ray Guns, Baseball Bats, and Pumpkins to help you survive monsters and complete delivery missions.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      How do I redeem Deadly Delivery codes?
                    </AccordionTrigger>
                    <AccordionContent>
                      To redeem codes in Deadly Delivery, open the game, click the Settings (Gear icon) at the top, find the code redemption text box, paste the code you copied from this page, and press Redeem. The rewards will be added to your account instantly.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      How often are new codes released?
                    </AccordionTrigger>
                    <AccordionContent>
                      New Deadly Delivery codes are typically released during special events, holidays, or game updates. We update our list daily to ensure you have access to the latest active codes and never miss out on free rewards.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border mt-16">
          <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
            <p>Deadly Delivery Codes & Wiki © {new Date().getFullYear()}</p>
            <p className="mt-2">
              This website is not affiliated with Roblox or Deadly Delivery developers.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

