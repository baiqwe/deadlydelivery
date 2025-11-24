"use client"

import { Share2, Twitter, MessageCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface SocialShareProps {
  title?: string
  url?: string
  code?: string
}

export function SocialShare({ 
  title = "Deadly Delivery Codes", 
  url = typeof window !== "undefined" ? window.location.href : "https://www.deadlyblox.com",
  code 
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const shareText = code 
    ? `Check out this Deadly Delivery code: ${code} 🎮\n\nGet more codes at ${url}`
    : `Check out the latest Deadly Delivery codes! 🎮\n\n${url}`

  const shareUrl = encodeURIComponent(url)
  const shareTitle = encodeURIComponent(title)
  const shareTextEncoded = encodeURIComponent(shareText)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${shareTextEncoded}&url=${shareUrl}`,
    reddit: `https://reddit.com/submit?url=${shareUrl}&title=${shareTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
  }

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 rounded-lg bg-black/20 border border-white/10">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Share2 className="w-4 h-4" />
        <span className="font-medium">Share this page:</span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(shareLinks.twitter, "_blank", "noopener,noreferrer")}
          className="hover:bg-blue-500/20 hover:border-blue-500/50"
        >
          <Twitter className="w-4 h-4 mr-2" />
          Twitter
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(shareLinks.reddit, "_blank", "noopener,noreferrer")}
          className="hover:bg-orange-500/20 hover:border-orange-500/50"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Reddit
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(shareLinks.facebook, "_blank", "noopener,noreferrer")}
          className="hover:bg-blue-600/20 hover:border-blue-600/50"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Facebook
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="hover:bg-secondary/20 hover:border-secondary/50"
        >
          {copied ? (
            <>
              <span className="mr-2">✓</span>
              Copied!
            </>
          ) : (
            <>
              <MessageCircle className="w-4 h-4 mr-2" />
              Copy Link
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

