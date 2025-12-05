import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Users, Shield, CheckCircle, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "About Us - DeadlyBlox Team | Deadly Delivery Experts",
  description: "Learn about the DeadlyBlox team - experienced Deadly Delivery players with 100+ hours of gameplay, dedicated to providing accurate codes, guides, and strategies.",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">About DeadlyBlox</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Your trusted source for Deadly Delivery codes, guides, and comprehensive game information.
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                DeadlyBlox was created by a dedicated team of Deadly Delivery enthusiasts with a simple mission: <strong className="text-foreground">to help players of all skill levels master this challenging survival horror game on Roblox</strong>.
              </p>
              <p>
                We understand the frustration of expired codes, conflicting information, and lack of detailed strategies. That's why we built this comprehensive resource to provide <strong className="text-foreground">verified, tested, and regularly updated</strong> information that you can trust.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Our Expertise
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The DeadlyBlox team consists of experienced Deadly Delivery players with <strong className="text-foreground">over 100 hours of combined verified gameplay experience</strong>. We've:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Completed successful runs through all floor levels, including deep floor progression (Floor 7+)</li>
                <li>Unlocked all available classes: Baseballer, Porter, and Veteran</li>
                <li>Tested and documented every enemy type, weapon, vehicle, and item in the game</li>
                <li>Manually verified thousands of promotional codes since the game's release</li>
                <li>Analyzed spawn patterns, damage values, and mechanics through extensive in-game testing</li>
              </ul>
              <p className="mt-4">
                Our team stays actively engaged with the Deadly Delivery community and monitors official developer announcements from Flat Head Studio to ensure our information remains current and accurate.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Our Verification Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Every piece of information on DeadlyBlox undergoes rigorous verification before publication:
              </p>
              
              <div className="bg-black/20 border border-white/5 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Codes Verification</h3>
                  <p className="text-sm">
                    All promotional codes are manually tested in-game before being listed as "Active". We verify the exact rewards, check for case-sensitivity, and update status immediately when codes expire. Our team checks for new codes daily.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Guides & Strategies</h3>
                  <p className="text-sm">
                    Our guides are written based on real gameplay experience, not speculation. We document specific damage values, timing windows, spawn rates, and mechanics through repeated testing. Each guide includes the last verification date to ensure information accuracy.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Database Information</h3>
                  <p className="text-sm">
                    Items, weapons, vehicles, and other game data are extracted through manual in-game testing. We verify stats, unlock requirements, and functionality before adding them to our databases. Updates are made as the developers release new content.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Our Commitment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We are committed to maintaining the highest standards of accuracy and trustworthiness:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">No Exploits or Cheats:</strong> We strictly provide legitimate gameplay information. You will never find scripts, hacks, or exploits on our site.</li>
                <li><strong className="text-foreground">Regular Updates:</strong> Our content is reviewed and updated regularly to reflect game changes, new codes, and developer updates.</li>
                <li><strong className="text-foreground">Transparent Methodology:</strong> We clearly indicate when information is based on testing, community reports, or official sources.</li>
                <li><strong className="text-foreground">Community-Focused:</strong> We welcome feedback and code submissions from the community to help keep our information current.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle>Independence & Affiliation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                DeadlyBlox is an <strong className="text-foreground">independent fan-created website</strong>. We are not affiliated with, endorsed by, or sponsored by:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Roblox Corporation</li>
                <li>Flat Head Studio (developers of Deadly Delivery)</li>
                <li>Any other game developers or publishers</li>
              </ul>
              <p className="mt-4">
                Deadly Delivery is a game created by Flat Head Studio and published on the Roblox platform. All game content, characters, and assets are property of their respective owners.
              </p>
              <p>
                Our website exists solely to provide helpful information and resources to the Deadly Delivery player community.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Have questions, found an error, or want to contribute? We'd love to hear from you!
              </p>
              <p>
                Visit our <Link href="/contact" className="text-primary hover:underline">Contact page</Link> for information on how to reach us, report issues, or submit new codes.
              </p>
              <p className="text-sm italic">
                <strong className="text-foreground">Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex gap-4">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/guides">
            <Button variant="outline">
              View Our Guides
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-horror text-muted-foreground mb-4">DeadlyBlox</p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground/60 mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/about" className="hover:text-primary">About Us</Link>
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
  )
}
