"use client"

import { useState, useEffect } from "react"
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import Confetti from "react-confetti"
import type { Code } from "@/types/code"

interface CodesListProps {
  codes: Code[]
}

export function CodesList({ codes }: CodesListProps) {
  const { toast } = useToast()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [showExpired, setShowExpired] = useState(false)
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

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setShowConfetti(true)
      
      toast({
        title: "Code Copied!",
        description: `${code} has been copied to your clipboard.`,
      })

      setTimeout(() => {
        setCopiedCode(null)
        setShowConfetti(false)
      }, 2000)
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      
      <div className="space-y-6">
        {/* Active Codes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Active Codes ({activeCodes.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {activeCodes.map((item) => (
                <div
                  key={item.code}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="font-mono text-lg font-bold text-primary mb-1">
                      {item.code}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.reward}
                    </div>
                  </div>
                  <Button
                    onClick={() => handleCopy(item.code)}
                    className="sm:w-auto w-full"
                    size="sm"
                  >
                    {copiedCode === item.code ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        COPIED!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        COPY
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Expired Codes */}
        {expiredCodes.length > 0 && (
          <Card className="opacity-70">
            <CardHeader>
              <button
                onClick={() => setShowExpired(!showExpired)}
                className="flex items-center justify-between w-full text-left"
              >
                <CardTitle className="text-xl font-semibold text-muted-foreground">
                  Expired Codes ({expiredCodes.length})
                </CardTitle>
                {showExpired ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
            </CardHeader>
            {showExpired && (
              <CardContent>
                <div className="space-y-3">
                  {expiredCodes.map((item) => (
                    <div
                      key={item.code}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-lg border bg-muted/30 opacity-60"
                    >
                      <div className="flex-1">
                        <div className="font-mono text-lg font-bold text-muted-foreground mb-1 line-through">
                          {item.code}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {item.reward}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        disabled
                        className="sm:w-auto w-full"
                        size="sm"
                      >
                        EXPIRED
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        )}
      </div>
    </>
  )
}

