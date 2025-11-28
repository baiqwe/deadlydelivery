import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SocialShare } from "@/components/social-share"
import { AuthorBio } from "@/components/author-bio"
import { Card, CardContent } from "@/components/ui/card"
// import { Comments } from "@/components/comments" // Temporarily hidden

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Roblox Deadly Delivery Release Date & Guide | Wiki",
  description: "Learn about Deadly Delivery VR release date, gameplay mechanics, tips and tricks. Your complete guide to mastering Deadly Delivery.",
  alternates: {
    canonical: "/guide",
  },
}

export default function GuidePage() {
  // Generate Breadcrumb Schema for guide page
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Games",
        "item": `${baseUrl}/#games`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Deadly Delivery",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Guide",
        "item": `${baseUrl}/guide`
      }
    ]
  }

  return (
    <>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-background">
      
      <div className="container mx-auto px-4 py-6 border-b border-border">
        <h1 className="text-4xl sm:text-5xl font-horror text-primary mb-2">
          Deadly Delivery Guide
        </h1>
        <p className="text-xl text-muted-foreground">
          Wiki & Game Information
        </p>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[{ label: "Guide" }]} />
        
        <article className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Deadly Delivery VR Release Date & Guide
          </h2>
          
          <div className="space-y-8 text-foreground">
            <section>
              <h3 className="text-2xl font-semibold text-primary mb-4">About Deadly Delivery</h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Deadly Delivery</strong> is a co-operative survival horror game developed by <strong>Flat Head Studio</strong> on Roblox. 
                Players work together as delivery workers navigating treacherous sewer systems filled with dangerous entities. 
                The objective is to collect food items to fill a &quot;Money Bar&quot; displayed at the top of the screen, then return to the elevator to bank earnings.
              </p>
              <p className="leading-relaxed">
                Unlike traditional delivery games, Deadly Delivery emphasizes teamwork, resource management, and strategic decision-making. 
                Each floor gets progressively more dangerous, requiring players to balance risk and reward when deciding whether to go deeper or evacuate.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-primary mb-4">Core Gameplay Mechanics</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Elevator System</h4>
                  <p className="mb-3">
                    The elevator is your safe zone and progression hub. After filling the Money Bar, teams vote:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Deep:</strong> Progress to a harder floor with better loot and higher-value items</li>
                    <li><strong>Evacuate:</strong> End the run and bank all collected coins safely</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">
                    Strategic Tip: Communication with teammates is crucial. Sometimes it&apos;s better to evacuate early than risk losing everything on a difficult floor.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">Inventory Management</h4>
                  <p className="mb-3">
                    Each player has a 4-slot inventory. You must frequently return to the elevator to deposit items. 
                    If you die, you&apos;re automatically evacuated but keep all items in your inventory.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">Teamwork Dynamics</h4>
                  <p className="mb-3">
                    Successful runs require coordination: assigning roles (scout, collector, defender), sharing resources, 
                    and reviving downed teammates using Revive Syringes. The game rewards groups that communicate effectively.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-primary mb-4">Essential Tips & Advanced Strategies</h3>
              <Card className="bg-card/50 backdrop-blur-sm border-white/5 mb-4">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">For Beginners</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Always carry a <Link href="/items" className="text-primary hover:underline">Flashlight</Link> for the pitch-black sewer environments</li>
                    <li>Learn to identify <Link href="/guides/monster-bestiary" className="text-primary hover:underline">Mimics</Link> - they wander aimlessly while real players have purpose</li>
                    <li>Stock up on Revive Syringes from codes - they&apos;re essential for team survival</li>
                    <li>Don&apos;t be greedy: evacuate when your inventory is full or health is low</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-white/5">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Advanced Tactics</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the <Link href="/items?search=baseball-bat" className="text-primary hover:underline">Baseball Bat</Link> to stun Pit Maws and save teammates</li>
                    <li>The <Link href="/items?search=z-ray-gun" className="text-primary hover:underline">Z-Ray Gun</Link> (from codes) reveals hidden entities in darkness</li>
                    <li>Counter the Bloomaw by flashing your light immediately when it appears</li>
                    <li>For the Forsaken: maintain eye contact at all costs - breaking line of sight triggers a deadly charge</li>
                    <li>Unlock classes strategically: <Link href="/guides/class-unlock-guide" className="text-primary hover:underline">Baseballer</Link> is great for combat, <Link href="/guides/class-unlock-guide" className="text-primary hover:underline">Porter</Link> for efficient farming</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-primary mb-4">How to Redeem Codes (Step-by-Step)</h3>
              <Card className="bg-card/50 backdrop-blur-sm border-white/5">
                <CardContent className="p-6">
                  <ol className="list-decimal pl-6 space-y-4">
                    <li className="leading-relaxed">
                      <strong>Launch the game:</strong> Open Roblox and search for &quot;Deadly Delivery&quot; by Flat Head Studio, or use our direct link: 
                      <a href="https://www.roblox.com/games/125810438250765/Deadly-Delivery" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                        Play Now
                      </a>
                    </li>
                    <li className="leading-relaxed">
                      <strong>Access Settings:</strong> Once in-game, look for the Settings icon (gear/cog) at the top of your screen
                    </li>
                    <li className="leading-relaxed">
                      <strong>Find Code Box:</strong> In the Settings menu, locate the text field labeled &quot;Enter Code&quot; or &quot;Redeem Code&quot;
                    </li>
                    <li className="leading-relaxed">
                      <strong>Copy from our site:</strong> Return to our <Link href="/" className="text-primary hover:underline font-medium">latest codes page</Link> and click the &quot;COPY&quot; button next to any active code
                    </li>
                    <li className="leading-relaxed">
                      <strong>Paste and Redeem:</strong> Paste the code into the game&apos;s code field (Ctrl+V / Cmd+V) and click &quot;Redeem&quot; or &quot;Submit&quot;
                    </li>
                    <li className="leading-relaxed">
                      <strong>Claim Rewards:</strong> Your rewards will appear in your inventory instantly - no need to restart the game!
                    </li>
                  </ol>
                  
                  <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                    <p className="text-sm text-foreground">
                      <strong>Important:</strong> Codes are case-sensitive and expire quickly. Always use our verified, tested codes. 
                      If a code doesn&apos;t work, it may have expired - check our list for the latest active codes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-primary mb-4">Additional Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-card/50 backdrop-blur-sm border-white/5">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">Item Database</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Browse all weapons, tools, and consumables with detailed stats and locations.
                    </p>
                    <Link href="/items">
                      <Button variant="outline" size="sm">View Items</Button>
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-white/5">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">Complete Guides</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      In-depth guides covering monsters, classes, and survival strategies.
                    </p>
                    <Link href="/guides">
                      <Button variant="outline" size="sm">View All Guides</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
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

        {/* Author Bio & Source Attribution */}
        <div className="mt-12">
          <AuthorBio 
            authorName="DeadlyBlox Team"
            authorRole="Deadly Delivery Strategy Experts"
            expertise={["Game Mechanics", "Enemy Strategies", "Code Verification", "Class Progression"]}
            experience="100+ hours of verified gameplay experience across all game mechanics"
          />
        </div>

        <Card className="bg-card/30 backdrop-blur-sm border-white/5 mt-6">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Content Source:</strong> This guide is compiled from extensive in-game testing, 
              community research, and verified gameplay data. All strategies have been tested and confirmed working as of November 2025. 
              We manually verify each code and update information based on game patches and community feedback.
            </p>
          </CardContent>
        </Card>

        {/* Social Share */}
        <div className="mt-12">
          <SocialShare title="Deadly Delivery Guide & Wiki" />
        </div>

        {/* Comments Section - Temporarily hidden */}
        {/* <Comments term="deadly-delivery-guide" /> */}
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

