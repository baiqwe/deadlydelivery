import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Deadly Delivery Codes & Wiki",
  description: "Get the latest active Roblox codes for Deadly Delivery. One-click copy promotional codes and unlock rewards instantly.",
  keywords: ["deadly delivery codes", "roblox codes", "deadly delivery", "roblox", "promo codes"],
  openGraph: {
    title: "Deadly Delivery Codes & Wiki",
    description: "Get the latest active Roblox codes for Deadly Delivery",
    type: "website",
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
        {children}
        <Toaster />
      </body>
    </html>
  )
}

