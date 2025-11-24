"use client"

import { useEffect, useRef } from "react"

interface CommentsProps {
  term?: string
}

export function Comments({ term = "deadly-delivery-codes" }: CommentsProps) {
  const commentsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only load Giscus on client side
    if (typeof window !== "undefined" && commentsRef.current) {
      const script = document.createElement("script")
      script.src = "https://giscus.app/client.js"
      script.setAttribute("data-repo", "baiqwe/deadlydelivery")
      script.setAttribute("data-repo-id", "R_kgDOLhXXXXX") // You'll need to get this from GitHub
      script.setAttribute("data-category", "Announcements")
      script.setAttribute("data-category-id", "DIC_kwDOLhXXXXX") // You'll need to get this from GitHub
      script.setAttribute("data-mapping", "pathname")
      script.setAttribute("data-strict", "0")
      script.setAttribute("data-reactions-enabled", "1")
      script.setAttribute("data-emit-metadata", "0")
      script.setAttribute("data-input-position", "bottom")
      script.setAttribute("data-theme", "dark")
      script.setAttribute("data-lang", "en")
      script.setAttribute("crossorigin", "anonymous")
      script.async = true

      // Clear existing content and append script
      commentsRef.current.innerHTML = ""
      commentsRef.current.appendChild(script)

      return () => {
        // Cleanup
        const currentRef = commentsRef.current
        if (currentRef) {
          currentRef.innerHTML = ""
        }
      }
    }
  }, [term])

  return (
    <div className="mt-16 border-t border-white/10 pt-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span>💬</span>
        Community Discussion
      </h2>
      <p className="text-muted-foreground mb-6">
        Share your experience, report expired codes, or ask for help. All comments are powered by GitHub Discussions.
      </p>
      <div ref={commentsRef} className="min-h-[200px]" />
      <p className="text-xs text-muted-foreground/60 mt-4">
        💡 <strong>Tip:</strong> You need a GitHub account to comment. Comments help other players find working codes!
      </p>
    </div>
  )
}

