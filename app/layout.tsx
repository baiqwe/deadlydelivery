import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.deadlyblox.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Deadly Delivery Codes & Wiki",
  description: "Get the latest active Roblox codes for Deadly Delivery. One-click copy promotional codes and unlock rewards instantly.",
  keywords: ["deadly delivery codes", "roblox codes", "deadly delivery", "roblox", "promo codes"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Deadly Delivery Codes & Wiki",
    description: "Get the latest active Roblox codes for Deadly Delivery",
    type: "website",
    url: baseUrl,
    siteName: "DeadlyBlox",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4ST6SB4EGB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4ST6SB4EGB');
          `}
        </Script>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

