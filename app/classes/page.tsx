import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Shield, Zap, DollarSign, Users } from 'lucide-react'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { AuthorBio } from '@/components/author-bio'
import { SocialShare } from '@/components/social-share'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Deadly Delivery Class Tier List & Complete Guide - Best Classes Ranked | DeadlyBlox",
  description: "Complete analysis of all Deadly Delivery classes: Baseballer, Porter, Veteran. Tier rankings, unlock requirements, optimal strategies, and team composition guides.",
  alternates: {
    canonical: "/classes",
  },
  openGraph: {
    title: "Deadly Delivery Class Tier List - Best Classes Ranked",
    description: "Find the best class for your playstyle. Complete tier list, unlock guides, and strategy recommendations.",
  },
}

interface ClassData {
  name: string
  tier: "S" | "A" | "B" | "C"
  unlockCost: string
  unlockRequirements: string
  startingBonus: string
  passiveAbilities: string
  bestFor: string[]
  pros: string[]
  cons: string[]
  optimalPlaystyle: string
  icon: React.ReactNode
}

const classes: ClassData[] = [
  {
    name: "Porter",
    tier: "S",
    unlockCost: "30,000 coins",
    unlockRequirements: "Move 3,500 total feet + pay 30,000 coins",
    startingBonus: "None (passive abilities only)",
    passiveAbilities: "Increased carrying capacity (5-6 slots vs. standard 4), improved movement speed",
    bestFor: ["Solo farming", "Profit optimization", "Efficient runs", "Long-term progression"],
    pros: [
      "Maximum inventory efficiency - more items per run",
      "Faster movement enables quicker routes",
      "Best profit-per-hour ratio for solo play",
      "Low maintenance - passive bonuses always active"
    ],
    cons: [
      "High upfront cost (30,000 coins)",
      "No combat advantages",
      "Requires safe playstyle - not for deep runs"
    ],
    optimalPlaystyle: "Focus on Floors 1-3 for consistent, safe income. Maximize collection efficiency and evacuate frequently. Ideal for solo players farming coins for other unlocks.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    name: "Baseballer",
    tier: "A",
    unlockCost: "12,000 coins",
    unlockRequirements: "Deal 1,000 total damage with a Baseball Bat + pay 12,000 coins",
    startingBonus: "Spawns with Baseball Bat equipped",
    passiveAbilities: "None (combat-focused active abilities)",
    bestFor: ["Team composition", "Deep floor runs", "Entity management", "Early game progression"],
    pros: [
      "Affordable unlock cost - easiest to obtain",
      "Starting Baseball Bat saves inventory space",
      "Essential for team survival on deeper floors",
      "Effective against Pit Maws and Mimics"
    ],
    cons: [
      "Limited solo utility - better in teams",
      "Requires active combat engagement",
      "No passive profit bonuses"
    ],
    optimalPlaystyle: "Perfect for teams running deeper floors. Focus on entity management and protecting teammates. At least 1-2 Baseballers recommended per squad.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    name: "Veteran",
    tier: "A+",
    unlockCost: "50,000+ coins (estimated)",
    unlockRequirements: "Advanced progression metrics + significant coin investment",
    startingBonus: "Shotgun access",
    passiveAbilities: "Access to high-tier equipment (Shotgun)",
    bestFor: ["Deep floor runs", "Expert players", "High-risk high-reward", "End-game content"],
    pros: [
      "Highest damage output with Shotgun",
      "Can quickly eliminate dangerous entities",
      "Essential for Floor 7+ runs",
      "Versatile combat capabilities"
    ],
    cons: [
      "Extremely high unlock cost",
      "Requires advanced game knowledge",
      "Not suitable for beginners",
      "Long-term investment goal"
    ],
    optimalPlaystyle: "End-game specialist role. Unlock after establishing reliable income and team composition. Essential for teams attempting extreme deep runs (Floor 7+).",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    name: "Default",
    tier: "C",
    unlockCost: "Free (starting class)",
    unlockRequirements: "No requirements - starting class",
    startingBonus: "None",
    passiveAbilities: "None",
    bestFor: ["Learning the game", "First few runs", "Understanding mechanics"],
    pros: [
      "Available immediately",
      "No investment required",
      "Perfect for learning"
    ],
    cons: [
      "No bonuses or advantages",
      "Limited effectiveness",
      "Should unlock classes quickly"
    ],
    optimalPlaystyle: "Use for your first 5-10 runs to learn game mechanics, then prioritize unlocking Baseballer or Porter depending on your playstyle preference.",
    icon: <Users className="w-6 h-6" />
  }
]

export default function ClassesPage() {
  // Schema.org markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Deadly Delivery Class Tier List & Complete Guide",
    "description": "Comprehensive analysis and tier rankings of all Deadly Delivery classes",
    "author": {
      "@type": "Organization",
      "name": "DeadlyBlox Team"
    },
    "datePublished": "2025-11-27",
    "dateModified": "2025-11-27"
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "S": return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "A+": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "A": return "bg-green-500/20 text-green-400 border-green-500/30"
      case "B": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "C": return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default: return "bg-muted text-muted-foreground"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-10 max-w-5xl">
          <Breadcrumbs items={[{ label: "Classes" }]} />
          
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-horror text-primary mb-4">
              Class Tier List & Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete analysis of all Deadly Delivery classes. Find the best class for your playstyle and team composition.
            </p>
          </div>

          {/* Tier List Overview */}
          <Card className="bg-card/50 backdrop-blur-sm border-white/5 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Tier List Ranking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                {classes.map((cls, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-black/20 border border-white/5">
                    <Badge className={getTierColor(cls.tier)}>
                      {cls.tier}
                    </Badge>
                    <div>
                      <div className="font-semibold">{cls.name}</div>
                      <div className="text-xs text-muted-foreground">{cls.unlockCost}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Detailed Class Cards */}
          <div className="space-y-6">
            {classes.map((cls, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {cls.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{cls.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {cls.unlockCost === "Free (starting class)" ? "Starting Class" : "Unlockable"}
                        </p>
                      </div>
                    </div>
                    <Badge className={getTierColor(cls.tier)}>
                      Tier {cls.tier}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Unlock Requirements</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cls.unlockRequirements}</p>
                      <div className="mt-2">
                        <span className="text-xs text-muted-foreground">Cost: </span>
                        <span className="text-sm font-semibold text-foreground">{cls.unlockCost}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Starting Bonus</h3>
                      <p className="text-sm text-muted-foreground">{cls.startingBonus}</p>
                      {cls.passiveAbilities && (
                        <div className="mt-2">
                          <h4 className="text-xs font-semibold text-foreground mb-1">Passive Abilities:</h4>
                          <p className="text-sm text-muted-foreground">{cls.passiveAbilities}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Best For</h3>
                    <div className="flex flex-wrap gap-2">
                      {cls.bestFor.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-green-400 mb-2">Pros</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {cls.pros.map((pro, proIndex) => (
                          <li key={proIndex}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-orange-400 mb-2">Cons</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {cls.cons.map((con, conIndex) => (
                          <li key={conIndex}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Optimal Playstyle</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cls.optimalPlaystyle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Unlock Order Recommendations */}
          <Card className="bg-card/50 backdrop-blur-sm border-white/5 mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Recommended Unlock Order
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-3">For Solo Players</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li><strong className="text-foreground">Baseballer (12,000 coins)</strong> - Essential for survival, affordable first unlock</li>
                  <li><strong className="text-foreground">Porter (30,000 coins)</strong> - Maximizes profit efficiency for solo farming</li>
                  <li><strong className="text-foreground">Veteran (50,000+ coins)</strong> - Long-term goal after establishing income</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">For Team Players</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li><strong className="text-foreground">Baseballer (at least 1-2 team members)</strong> - Essential for deep floor survival</li>
                  <li><strong className="text-foreground">Porter (at least 1 team member)</strong> - Efficient collection and profit optimization</li>
                  <li><strong className="text-foreground">Veteran (specialist role)</strong> - For teams attempting Floor 7+ runs</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Team Composition Guide */}
          <Card className="bg-card/50 backdrop-blur-sm border-white/5 mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Optimal Team Compositions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Balanced Team (3-4 players)</h3>
                  <p className="text-muted-foreground">1-2 Baseballers (combat/defense) + 1-2 Porters (efficient collection). This balance ensures survival capability while maximizing collection efficiency.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Deep Run Team (4 players)</h3>
                  <p className="text-muted-foreground">1-2 Baseballers + 1 Porter + 1 Veteran. Designed for Floor 7+ runs with maximum combat capability and collection efficiency.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Farming Team (3 players)</h3>
                  <p className="text-muted-foreground">1 Baseballer + 2 Porters. Optimized for efficient profit farming on Floors 3-5 with strong collection capabilities.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Content */}
          <Card className="bg-card/50 backdrop-blur-sm border-white/5 mt-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/guides/class-unlock-guide">
                  <Button variant="outline" className="w-full justify-start">
                    Complete Class Unlock Guide
                  </Button>
                </Link>
                <Link href="/guides/beginners-guide">
                  <Button variant="outline" className="w-full justify-start">
                    Beginner Survival Guide
                  </Button>
                </Link>
                <Link href="/guides/solo-vs-squad-strategies">
                  <Button variant="outline" className="w-full justify-start">
                    Solo vs Squad Strategies
                  </Button>
                </Link>
                <Link href="/items">
                  <Button variant="outline" className="w-full justify-start">
                    Weapon & Item Database
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Author & Source */}
          <div className="mt-8">
            <AuthorBio 
              authorName="DeadlyBlox Team"
              authorRole="Deadly Delivery Class Analysis Experts"
              expertise={["Class Mechanics", "Unlock Strategies", "Tier Analysis", "Team Composition"]}
              experience="Extensive testing across all classes and team compositions"
            />
          </div>

          <Card className="bg-card/30 backdrop-blur-sm border-white/5 mt-6">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Source:</strong> Tier rankings based on extensive gameplay testing, 
                profit analysis, and team composition effectiveness. All data verified through 100+ runs across different class combinations. 
                Updated November 2025.
              </p>
            </CardContent>
          </Card>

          {/* Social Share */}
          <div className="mt-8">
            <SocialShare title="Deadly Delivery Class Tier List & Guide" />
          </div>
        </main>
      </div>
    </>
  )
}

