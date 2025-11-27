import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Terms of Service | DeadlyBlox",
  description: "Terms of Service for DeadlyBlox - Read our terms and conditions for using the Deadly Delivery codes website.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                By accessing or using DeadlyBlox (&quot;the Website&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, then you may not access the Website.
              </p>
              <p>
                We reserve the right to update, change, or replace any part of these Terms by posting updates and changes to our website. It is your responsibility to check this page periodically for changes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Use License
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Permission is granted to temporarily access the materials on DeadlyBlox for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the Website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or mirror the materials on any other server</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle>Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The materials on DeadlyBlox are provided on an &apos;as is&apos; basis. DeadlyBlox makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Further, DeadlyBlox does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                In no event shall DeadlyBlox or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DeadlyBlox, even if DeadlyBlox or a DeadlyBlox authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle>Accuracy of Materials</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The materials appearing on DeadlyBlox could include technical, typographical, or photographic errors. DeadlyBlox does not warrant that any of the materials on its website are accurate, complete, or current. DeadlyBlox may make changes to the materials contained on its website at any time without notice.
              </p>
              <p>
                We strive to provide accurate and up-to-date code information, but we cannot guarantee that all codes will work or remain valid. Game codes may expire without notice, and we are not responsible for expired or invalid codes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle>Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                DeadlyBlox has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by DeadlyBlox of the site. Use of any such linked website is at the user&apos;s own risk.
              </p>
              <p>
                This website is not affiliated with, endorsed, or sponsored by Roblox Corporation. Deadly Delivery is a game developed by Flat Head Studio and published on the Roblox platform.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle>Modifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                DeadlyBlox may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                These terms and conditions are governed by and construed in accordance with applicable laws. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts in which we operate.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                If you have any questions about these Terms of Service, please contact us through our <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
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
          <Link href="/privacy">
            <Button variant="outline">
              View Privacy Policy
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

