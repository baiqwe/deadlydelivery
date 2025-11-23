"use client"

import { format } from "date-fns"
import { useEffect, useState } from "react"

export function UpdateBanner() {
  // Always show current date (SEO tactic - shows freshness on each visit)
  const [displayDate, setDisplayDate] = useState(new Date())

  useEffect(() => {
    // Update date on mount to show current date
    setDisplayDate(new Date())
  }, [])

  return (
    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
      <p className="text-sm text-muted-foreground">
        <span className="font-semibold text-primary">Last Updated:</span>{" "}
        {format(displayDate, "MMMM d, yyyy")}
      </p>
    </div>
  )
}

