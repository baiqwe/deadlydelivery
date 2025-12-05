"use client"

import { useState, useEffect, lazy, Suspense } from "react"
import { Copy, Check, Sparkles, Clock, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { differenceInDays } from "date-fns"
import type { Code } from "@/types/code"
import { cn } from "@/lib/utils"
import { CodeVote } from "./code-vote"

// Lazy load Confetti - only loads when user copies a code (~80KB saved on initial load)
const Confetti = lazy(() => import("react-confetti"))

interface CodesListProps {
  codes: Code[]
}

export function CodesList({ codes }: CodesListProps) {
  const { toast } = useToast()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const activeCodes = codes.filter((code) => code.status === "active")
  const expiredCodes = codes.filter((code) => code.status === "expired")

  const isNewCode = (code: Code) => {
    const lastCheckedDate = new Date(code.lastChecked)
    const daysSinceChecked = differenceInDays(new Date(), lastCheckedDate)
    return daysSinceChecked <= 7
  }

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setShowConfetti(true)

      toast({
        title: "Success!",
        description: (
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-primary">{code}</span>
            <span>copied to clipboard</span>
          </div>
        ),
        duration: 3000,
      })

      setTimeout(() => {
        setCopiedCode(null)
        setShowConfetti(false)
      }, 2500)
    } catch (err) {
      toast({
        title: "Failed",
        description: "Could not copy code.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="relative">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <Suspense fallback={null}>
            <Confetti
              width={windowSize.width}
              height={windowSize.height}
              recycle={false}
              numberOfPieces={300}
              gravity={0.2}
            />
          </Suspense>
        </div>
      )}

      <div className="space-y-8">
        {/* Active Codes Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <Sparkles className="w-6 h-6 text-primary" />
              Working Codes
            </h2>
            <span className="text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/5">
              {activeCodes.length} available
            </span>
          </div>

          <div className="grid gap-4">
            {activeCodes.map((item) => (
              <div
                key={item.code}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/50 p-1 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)]"
              >
                {/* 这种布局让代码看起来像一张票据 */}
                <div className="flex flex-col sm:flex-row items-stretch gap-4 bg-black/40 rounded-lg p-4 backdrop-blur-xl">

                  {/* Code Display Area */}
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <code className="text-xl sm:text-2xl font-mono font-black text-primary tracking-wide truncate">
                        {item.code}
                      </code>
                      {isNewCode(item) && (
                        <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-secondary text-white rounded shadow-[0_0_10px_rgba(168,85,247,0.5)] animate-pulse">
                          New
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <Gift className="w-4 h-4 text-gray-500" />
                      <span className="truncate font-medium">{item.reward}</span>
                    </div>
                    <CodeVote code={item.code} />
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-end sm:border-l sm:border-white/10 sm:pl-4">
                    <Button
                      onClick={() => handleCopy(item.code)}
                      className={cn(
                        "w-full sm:w-32 font-bold transition-all duration-300",
                        copiedCode === item.code
                          ? "bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/50"
                          : "bg-primary hover:bg-primary/90 text-black hover:scale-105"
                      )}
                      size="lg"
                    >
                      {copiedCode === item.code ? (
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5" />
                          <span>COPIED</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Copy className="w-4 h-4" />
                          <span>COPY</span>
                        </div>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expired Codes Section */}
        {expiredCodes.length > 0 && (
          <div className="pt-8 border-t border-white/5">
            <h3 className="text-xl font-semibold text-muted-foreground flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5" />
              Recently Expired
            </h3>
            <div className="grid gap-2 opacity-60 hover:opacity-80 transition-opacity">
              {expiredCodes.map((item) => (
                <div
                  key={item.code}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-white/5"
                >
                  <span className="font-mono font-medium line-through text-muted-foreground">{item.code}</span>
                  <span className="text-sm text-muted-foreground/60">{item.reward}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
