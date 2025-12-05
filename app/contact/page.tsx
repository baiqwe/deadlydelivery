import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mail, MessageCircle, HelpCircle, Bug, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Contact Us | DeadlyBlox",
  description: "Contact DeadlyBlox - Get help with Deadly Delivery codes, report issues, or provide feedback about our website.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Contact Us</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Have a question, found a bug, or want to report an expired code? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                General Inquiries
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                For general questions about Deadly Delivery codes, website features, or how to use our services.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm">
                  Please check our <Link href="/" className="text-primary hover:underline">FAQ section</Link> on the homepage or contact us via email.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bug className="w-5 h-5 text-primary" />
                Report Issues
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Found a bug, expired code, or technical issue? Let us know and we&apos;ll fix it as soon as possible.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm font-medium text-foreground">
                  Common Issues:
                </p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Codes not working</li>
                  <li>• Website errors</li>
                  <li>• Broken links</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                Code Submission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Found a new Deadly Delivery code? Share it with us and help the community!
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm">
                  Include the code, reward, and where you found it when submitting.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Feedback & Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Have an idea to improve DeadlyBlox? We welcome your feedback and suggestions!
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm">
                  Your input helps us make the website better for everyone.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-white/5 mb-12">
          <CardHeader>
            <CardTitle>How to Reach Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Us:</h3>
                    <p className="text-sm mb-3">
                      For general inquiries, code submissions, bug reports, or feedback, please contact us at:
                    </p>
                    <a 
                      href="mailto:developwebfordeadly@2925.com" 
                      className="text-primary hover:underline font-medium text-lg"
                    >
                      developwebfordeadly@2925.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/20 border border-white/5 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">For Code Issues:</h3>
                  <p className="text-sm">
                    If you find an expired code or want to report that a code isn&apos;t working, please email us or note it in the code voting section on the homepage. We regularly monitor and update our code database.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">For Website Issues:</h3>
                  <p className="text-sm">
                    If you encounter any technical problems with the website, please email us or try refreshing the page or clearing your browser cache. Most issues are resolved this way.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Community Support:</h3>
                  <p className="text-sm">
                    Check our <Link href="/" className="text-primary hover:underline">FAQ section</Link> on the homepage for answers to common questions. You can also visit our <Link href="/guide" className="text-primary hover:underline">Guide page</Link> for detailed information about the game and code redemption.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-white/5">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Why isn&apos;t my code working?</h3>
              <p className="text-sm">
                Codes may expire quickly. Make sure you&apos;re typing the code exactly as shown, including capital letters. If a code doesn&apos;t work, it may have expired - check our expired codes section.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">How do I redeem codes?</h3>
              <p className="text-sm">
                Launch Deadly Delivery on Roblox, tap the Settings (Gear icon), find the code redemption box, paste the code, and click Redeem. See our <Link href="/guide" className="text-primary hover:underline">complete guide</Link> for step-by-step instructions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Are you affiliated with Roblox or Deadly Delivery?</h3>
              <p className="text-sm">
                No, DeadlyBlox is an independent fan website. We are not affiliated with, endorsed by, or sponsored by Roblox Corporation or Flat Head Studio (the developers of Deadly Delivery).
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 flex gap-4">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/guide">
            <Button variant="outline">
              View Guide
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

