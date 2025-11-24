"use client"

import { ThumbsUp, ThumbsDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface CodeVoteProps {
  code: string
}

export function CodeVote({ code }: CodeVoteProps) {
  const [vote, setVote] = useState<"up" | "down" | null>(null)
  const [hasVoted, setHasVoted] = useState(false)

  // Check localStorage for existing vote
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedVote = localStorage.getItem(`vote-${code}`)
      if (savedVote === "up" || savedVote === "down") {
        setVote(savedVote as "up" | "down")
        setHasVoted(true)
      }
    }
  }, [code])

  const handleVote = async (type: "up" | "down") => {
    if (hasVoted) return

    try {
      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem(`vote-${code}`, type)
        
        // Optional: Send to analytics or backend
        // await fetch('/api/vote', { method: 'POST', body: JSON.stringify({ code, vote: type }) })
      }

      setVote(type)
      setHasVoted(true)
    } catch (err) {
      console.error("Failed to save vote:", err)
    }
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground mr-2">Working?</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleVote("up")}
        disabled={hasVoted}
        className={cn(
          "h-8 px-3",
          vote === "up" && "bg-green-500/20 text-green-400 border border-green-500/30",
          hasVoted && vote !== "up" && "opacity-50"
        )}
      >
        <ThumbsUp className={cn("w-4 h-4 mr-1", vote === "up" && "fill-green-400")} />
        {hasVoted && vote === "up" ? "Yes!" : "Yes"}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleVote("down")}
        disabled={hasVoted}
        className={cn(
          "h-8 px-3",
          vote === "down" && "bg-red-500/20 text-red-400 border border-red-500/30",
          hasVoted && vote !== "down" && "opacity-50"
        )}
      >
        <ThumbsDown className={cn("w-4 h-4 mr-1", vote === "down" && "fill-red-400")} />
        {hasVoted && vote === "down" ? "No" : "No"}
      </Button>
      {hasVoted && (
        <span className="text-xs text-muted-foreground flex items-center gap-1 ml-2">
          <Check className="w-3 h-3" />
          Thanks!
        </span>
      )}
    </div>
  )
}

