import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Privacy Policy | DeadlyBlox",
  description: "Privacy Policy for DeadlyBlox - Learn how we collect, use, and protect your information when you use our Deadly Delivery codes website.",
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-horror text-primary drop-shadow-md">DeadlyBlox</span>
            </div>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
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
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Welcome to DeadlyBlox (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <strong className="text-foreground">www.deadlyblox.com</strong>.
              </p>
              <p>
                By using our website, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Date and time of access</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Google Analytics</h3>
                <p>
                  We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies and similar technologies to collect and analyze information about your use of our website. This data is anonymized and aggregated for statistical purposes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>To provide and maintain our website services</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To detect and prevent technical issues</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and the security of our website</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle>Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files that are placed on your device when you visit a website.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices of these third-party services. We encourage you to review the privacy policies of any third-party services you access.
              </p>
              <p>
                We use Google Analytics, which is a web analytics service provided by Google. For more information about how Google uses data, please visit <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google&apos;s Privacy Policy</a>.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle>Children&apos;s Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                If you have any questions about this Privacy Policy, please contact us through our <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
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
          <Link href="/terms">
            <Button variant="outline">
              View Terms of Service
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

