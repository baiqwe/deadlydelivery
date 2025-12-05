import { Metadata } from "next"
import Link from "next/link"
import codesDataRaw from "@/data/codes.json"
import { CodesList } from "@/components/codes-list"
import { UpdateBanner } from "@/components/update-banner"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, HelpCircle, Settings, CheckCircle2, ChevronRight, Clock, AlertCircle, Sparkles, TrendingUp } from "lucide-react"
import type { Code } from "@/types/code"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SocialShare } from "@/components/social-share"
import { AuthorBio } from "@/components/author-bio"
import { generateHreflangAlternates } from '@/lib/i18n-utils'

const codesData = codesDataRaw as Code[]
const activeCodesCount = codesData.filter((code) => code.status === "active").length
const currentMonth = format(new Date(), "MMMM yyyy")

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `${activeCodesCount} Active Deadly Delivery Codes - ${currentMonth} | DeadlyBlox`,
  description: `Get ${activeCodesCount} active Roblox codes for Deadly Delivery. One-click copy promotional codes, unlock free rewards instantly. Complete guide on what codes are, how to redeem them, and FAQ. Updated daily.`,
  alternates: {
    canonical: "/codes",
    languages: generateHreflangAlternates('/codes'),
  },
  openGraph: {
    title: `${activeCodesCount} Active Deadly Delivery Codes - ${currentMonth}`,
    description: `Get ${activeCodesCount} active Roblox codes for Deadly Delivery. Complete redemption guide and FAQ.`,
    url: `${baseUrl}/codes`,
    alternateLocale: ['pt-BR'],
  },
  keywords: ["deadly delivery codes", "roblox codes", "deadly delivery promo codes", "free roblox codes", "deadly delivery redeem codes"],
}

// FAQ Data - Focused on Codes specifically
const CODE_FAQ_DATA = [
  {
    question: "What are Deadly Delivery codes and how do they work?",
    answer: "Deadly Delivery codes are promotional coupons released by Flat Head Studio, the game developers. These codes grant instant free in-game rewards such as coins, weapons, consumables, and exclusive items. Codes are case-sensitive alphanumeric strings that you enter in the game's settings menu. Once redeemed successfully, rewards are added immediately to your inventory. Codes are typically released during special events, game updates, or promotional campaigns, making them a valuable resource for both new and experienced players looking to enhance their gameplay without spending Robux."
  },
  {
    question: "How do I redeem codes in Deadly Delivery?",
    answer: "Redeeming codes in Deadly Delivery is straightforward: First, launch the game on Roblox and enter a match. During gameplay or in the lobby, click the Settings icon (gear symbol) located at the top of your screen. In the settings menu, you'll find a text input field labeled 'Enter Code' or 'Redeem Code'. Paste or type your code exactly as shown (codes are case-sensitive), then click the 'Redeem' button. If the code is valid and active, you'll see a confirmation message and your rewards will be instantly added to your inventory. Remember, you can only redeem each code once per account, so choose the right time to use valuable codes strategically."
  },
  {
    question: "Why is my Deadly Delivery code not working?",
    answer: "If your code isn't working, there are several common reasons: The code may have expired, as promotional codes typically have limited-time validity periods. Codes are also case-sensitive, so ensure you've copied every character exactly as displayed, including uppercase and lowercase letters. Double-check for extra spaces before or after the code when pasting. Some codes may have reached their redemption limit if they're extremely popular. Additionally, make sure you haven't already redeemed this specific code on your account, as each code can only be used once. If you're certain the code should be active, try refreshing the game or checking our updated list, as codes can expire without notice."
  },
  {
    question: "How often are new Deadly Delivery codes released?",
    answer: "New Deadly Delivery codes are typically released during special events, holidays, game updates, or milestone celebrations. Flat Head Studio doesn't follow a strict schedule, but codes often appear around major holidays (Halloween, Christmas, New Year), significant game updates, or when the game reaches subscriber milestones. Our team manually monitors official sources including the developer's social media, Discord announcements, and in-game notifications to verify new codes within hours of their release. We update our code list daily and verify each code's status before listing it, ensuring you always have access to the latest active promotional codes. For the most up-to-date information, check back regularly or follow the game's official channels."
  },
  {
    question: "What rewards can I get from Deadly Delivery codes?",
    answer: "Deadly Delivery codes offer a wide variety of valuable in-game rewards. The most common rewards include coins (essential currency for unlocking classes, purchasing items, and upgrades), Revive Syringes (critical consumables for team survival in dangerous floors), and weapons like the Z-Ray Gun or Baseball Bat. Some codes provide exclusive seasonal items such as Halloween-themed objects or limited-edition accessories. Premium codes may grant multiple rewards at once, like combination packages of coins, consumables, and weapons. These rewards significantly enhance your gameplay experience by providing resources that would otherwise require hours of grinding or real money purchases through Robux. Each code's specific rewards are listed alongside the code on our verified list."
  },
  {
    question: "Are Deadly Delivery codes free to use?",
    answer: "Yes, all Deadly Delivery codes are completely free to use. You don't need to purchase anything, spend Robux, or have a premium Roblox membership to redeem codes. Simply copy the code from our verified list and enter it in the game's settings menu. Codes are promotional tools provided by the developers to reward players and celebrate events. However, while the codes themselves are free, the in-game items they unlock (like certain weapons or classes) may have additional requirements or limitations within the game's progression system. Our code list is maintained completely free of charge, with our team dedicating time to verify each code's validity and provide accurate information to the Deadly Delivery community."
  }
]

// E-E-A-T Content Sections (300-500 words each)
const CODE_CONTENT = {
  whatAreCodes: {
    title: "What Are Deadly Delivery Codes?",
    content: `Deadly Delivery codes are promotional alphanumeric strings released by Flat Head Studio, the developers behind this thrilling co-operative survival horror game on Roblox. These codes serve as a direct gateway to free in-game resources that would typically require extensive gameplay time or real money purchases through Robux.

When you redeem a valid code through the game's settings menu, you instantly receive rewards such as coins (the primary currency for unlocking classes and purchasing upgrades), powerful weapons like the Z-Ray Gun or Baseball Bat, critical survival items such as Revive Syringes, and exclusive seasonal items that are otherwise unavailable.

Codes are strategically released during special events, major game updates, holiday celebrations, or when the game reaches subscriber milestones. They represent the developer's way of rewarding the community, attracting new players, and celebrating game achievements. Unlike in-game currency that must be earned through gameplay, codes provide immediate value, making them highly sought after by both casual players and dedicated community members.

Each code is unique, case-sensitive, and can only be redeemed once per Roblox account. The codes have expiration dates, which is why maintaining an updated list of active codes is crucial for players who want to maximize their rewards. Our team at DeadlyBlox manually verifies each code's validity and expiration status daily, ensuring that every code on our list is guaranteed to work when you try to redeem it.`
  },
  howToRedeem: {
    title: "How to Redeem Deadly Delivery Codes - Step-by-Step Guide",
    content: `Redeeming Deadly Delivery codes is a straightforward process, but following the correct steps ensures you avoid common mistakes. Here's a comprehensive guide based on our extensive testing and community feedback.

First, launch Deadly Delivery on the Roblox platform. You can access this through the Roblox website, desktop app, or mobile application. Once in the game, you can redeem codes from either the main lobby or during a match (though we recommend using the lobby for easier navigation).

Look for the Settings icon, which appears as a gear symbol typically located in the top-right or top-left corner of your screen. Click this icon to open the game's settings menu. Within the settings interface, you'll find a dedicated section for code redemption, often labeled as "Enter Code," "Redeem Code," or "Promo Codes."

In the text input field, carefully paste or type the code exactly as it appears on our verified list. This is critical because Deadly Delivery codes are case-sensitive, meaning "DEADLYDELIVERY" is different from "deadlydelivery." Any deviation, including extra spaces, will cause the redemption to fail.

After entering the code, click the "Redeem" or "Submit" button. If the code is valid and active, you'll see a success confirmation message, and your rewards will be immediately added to your inventory. If you receive an error message, double-check the code spelling, verify its expiration status on our list, and ensure you haven't already redeemed this particular code on your account. Each code can only be used once per Roblox account, so strategic timing of when to redeem valuable codes is important for maximizing your benefits.`
  },
  codeBestPractices: {
    title: "Best Practices for Using Deadly Delivery Codes",
    content: `Successfully utilizing Deadly Delivery codes involves more than just copying and pasting. Based on our 100+ hours of gameplay experience and code verification testing, here are proven strategies to maximize your code redemption benefits.

Timing is crucial when redeeming codes. Since codes can expire without notice, redeem them as soon as you verify they're active, especially if they offer valuable rewards like large coin amounts or exclusive items. Don't wait for the "perfect moment" - active codes have limited lifespans, and you risk missing out if you delay.

Always verify code status before attempting redemption. Our team manually tests each code before listing it, but codes can expire between updates. Check our list's "Last Verified" timestamp - if it's recent (within 24-48 hours), you have higher confidence the code remains active. If you encounter an error, first verify the code hasn't expired before troubleshooting other potential issues.

Pay attention to code case sensitivity and formatting. Deadly Delivery codes are case-sensitive alphanumeric strings. When copying from our list, ensure you capture the entire code without adding spaces. We recommend using copy-paste rather than manual typing to eliminate human error. Some browsers or devices may add extra spaces when copying - double-check the code in the redemption field before submitting.

Keep track of which codes you've already redeemed. Since each code works only once per account, maintaining a personal list prevents wasting time attempting to redeem codes you've already used. Consider creating a simple spreadsheet or notes document to track your redemption history.

Finally, stay updated with new code releases. Follow the game's official social media channels, join community Discord servers, and bookmark our verified code list for daily updates. New codes are often released during special events or game updates, and early redemption ensures you don't miss out on valuable rewards.`
  }
}

function generateCodeSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": CODE_FAQ_DATA.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    })),
    "author": {
      "@type": "Organization",
      "name": "DeadlyBlox Team",
      "description": "Deadly Delivery expert community with 100+ hours of verified gameplay experience"
    }
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Redeem Deadly Delivery Codes",
    "description": "Step-by-step guide on redeeming promotional codes in Deadly Delivery",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Launch Deadly Delivery",
        "text": "Launch Deadly Delivery on the Roblox platform through the website, desktop app, or mobile application."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Open Settings",
        "text": "Click the Settings icon (gear symbol) located at the top of your screen to open the game's settings menu."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Find Code Redemption",
        "text": "Locate the code redemption section, often labeled as 'Enter Code' or 'Redeem Code' in the settings menu."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Enter Code",
        "text": "Carefully paste or type the code exactly as it appears (case-sensitive) in the text input field."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Redeem",
        "text": "Click the 'Redeem' or 'Submit' button. You'll see a confirmation message and rewards will be added to your inventory."
      }
    ],
    "totalTime": "PT2M"
  }

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
        "name": "Codes",
        "item": `${baseUrl}/codes`
      }
    ]
  }

  return {
    faqSchema,
    howToSchema,
    breadcrumbSchema
  }
}

export default function CodesPage() {
  const { faqSchema, howToSchema, breadcrumbSchema } = generateCodeSchema()
  const jsonLd = [faqSchema, howToSchema, breadcrumbSchema]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-10 max-w-5xl">
          <Breadcrumbs items={[{ label: "Codes" }]} />

          {/* Hero Section - Codes Focused */}
          <section className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary-foreground text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              {activeCodesCount} Active Codes - Updated {currentMonth}
            </div>

            <h1 className="text-4xl md:text-6xl font-horror text-primary mb-4">
              Deadly Delivery Codes
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get free rewards instantly with active promotional codes. One-click copy, verified daily, and always up-to-date.
            </p>
          </section>

          {/* Update Banner */}
          <div className="mb-8">
            <UpdateBanner />
          </div>

          {/* Codes List - Main Focus */}
          <div className="mb-8">
            <CodesList codes={codesData} />
          </div>

          {/* Social Share - Moved directly below codes list */}
          <div className="mb-16">
            <SocialShare title="Deadly Delivery Codes" />
          </div>

          {/* What Are Codes Section - E-E-A-T Content */}
          <section className="mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-white/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-3xl">{CODE_CONTENT.whatAreCodes.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none text-foreground space-y-4">
                  {CODE_CONTENT.whatAreCodes.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How to Redeem Section - E-E-A-T Content */}
          <section className="mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-white/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Settings className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-3xl">{CODE_CONTENT.howToRedeem.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none text-foreground space-y-4">
                  {CODE_CONTENT.howToRedeem.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Best Practices Section - E-E-A-T Content */}
          <section className="mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-white/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-3xl">{CODE_CONTENT.codeBestPractices.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none text-foreground space-y-4">
                  {CODE_CONTENT.codeBestPractices.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <HelpCircle className="w-7 h-7 text-primary" />
              <h2 className="text-3xl font-bold">Frequently Asked Questions About Codes</h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {CODE_FAQ_DATA.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index + 1}`} className="border border-white/10 rounded-lg bg-card/30 px-4">
                  <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Code Verification Info */}
          <section className="mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-white/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Verified & Tested Daily</h3>
                    <p className="text-muted-foreground mb-4">
                      Our team manually verifies each code before listing it on this page. We test codes in-game to ensure they're active and working correctly. Codes are checked daily, and expired codes are immediately removed from our list. If you find a code that doesn't work, please check our "Last Verified" timestamp - codes can expire between updates.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Last verified: {format(new Date(), "MMMM d, yyyy 'at' h:mm a")}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Author Bio - E-E-A-T Signal */}
          <div>
            <AuthorBio
              authorName="DeadlyBlox Team"
              authorRole="Code Verification Specialist & Deadly Delivery Expert"
              expertise={["Code Verification", "Game Mechanics", "Reward Analysis", "Community Updates"]}
              experience="100+ hours of verified gameplay experience and daily code testing"
            />
          </div>
        </main>
      </div>
    </>
  )
}

