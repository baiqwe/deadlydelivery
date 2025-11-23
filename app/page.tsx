import { Metadata } from "next"
import Link from "next/link"
import codesData from "@/data/codes.json"
import { CodesList } from "@/components/codes-list"
import { UpdateBanner } from "@/components/update-banner"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"

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
          "text": "Deadly Delivery codes are promotional codes released by the game developers that players can redeem for free rewards like coins, gems, and other in-game items."
        }
      },
      {
        "@type": "Question",
        "name": "How do I redeem Deadly Delivery codes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To redeem codes in Deadly Delivery, open the game, find the codes/coupon section (usually in settings or a shop menu), paste the code, and click redeem. The rewards will be added to your account instantly."
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

