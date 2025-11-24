import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SocialShare } from "@/components/social-share"
import { Comments } from "@/components/comments"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Deadly Delivery VR Release Date & Guide | Wiki",
  description: "Learn about Deadly Delivery VR release date, gameplay mechanics, tips and tricks. Your complete guide to mastering Deadly Delivery.",
  alternates: {
    canonical: "/guide",
  },
}

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Codes
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-horror text-primary mb-2">
            Deadly Delivery Guide
          </h1>
          <p className="text-xl text-muted-foreground">
            Wiki & Game Information
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[{ label: "Guide" }]} />
        
        <article className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Deadly Delivery VR Release Date & Guide
          </h2>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h3 className="text-2xl font-semibold text-foreground mb-3">About Deadly Delivery</h3>
              <p>
                Deadly Delivery is an exciting Roblox game that puts players in the role of delivery workers 
                navigating through dangerous and spooky environments. Complete deliveries, avoid obstacles, 
                and earn rewards as you progress through challenging levels.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Gameplay Features</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Thrilling delivery missions through various spooky locations</li>
                <li>Multiple characters and customization options</li>
                <li>Upgrade system to enhance your delivery capabilities</li>
                <li>Regular events and limited-time challenges</li>
                <li>Social features to play with friends</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Tips & Tricks</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Always check for active promo codes to get free rewards</li>
                <li>Save up coins and gems for important upgrades</li>
                <li>Complete daily missions for bonus rewards</li>
                <li>Join events to earn exclusive items</li>
                <li>Team up with friends for easier completion of difficult missions</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-foreground mb-3">How to Redeem Codes</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Launch Deadly Delivery on Roblox</li>
                <li>Find the codes or coupon section in the game menu</li>
                <li>Copy a code from our <Link href="/" className="text-primary hover:underline font-medium">latest codes page</Link> using the COPY button</li>
                <li>Paste the code into the redemption field</li>
                <li>Click redeem and enjoy your rewards!</li>
              </ol>
            </section>
          </div>

          <div className="mt-12 p-6 bg-card border border-border rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">Ready to Get Codes?</h3>
            <p className="text-muted-foreground mb-4">
              Now that you know how to redeem codes, check out our{" "}
              <Link href="/" className="text-primary hover:underline font-medium">
                latest active Deadly Delivery codes
              </Link>{" "}
              and start collecting rewards!
            </p>
            <Link href="/">
              <Button className="w-full sm:w-auto">View Active Codes</Button>
            </Link>
          </div>
        </article>

        {/* Social Share */}
        <div className="mt-12">
          <SocialShare title="Deadly Delivery Guide & Wiki" />
        </div>

        {/* Comments Section */}
        <Comments term="deadly-delivery-guide" />
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
  )
}

