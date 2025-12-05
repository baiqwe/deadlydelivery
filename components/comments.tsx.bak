"use client"

import { useEffect, useRef } from "react"

interface CommentsProps {
  term?: string
}

export function Comments({ term = "deadly-delivery-codes" }: CommentsProps) {
  const commentsRef = useRef<HTMLDivElement>(null)
  const walineRef = useRef<any>(null)

  useEffect(() => {
    // Only load Waline on client side
    if (typeof window !== "undefined" && commentsRef.current) {
      // Dynamically import Waline to avoid SSR issues
      import('@waline/client').then((Waline) => {
        // Clean up previous instance
        if (walineRef.current) {
          walineRef.current.destroy()
        }

        // Get server URL from environment or use official demo
        const serverURL = process.env.NEXT_PUBLIC_WALINE_SERVER_URL || 'https://waline.js.org'

        // Initialize Waline
        walineRef.current = Waline.init({
          el: commentsRef.current,
          serverURL: serverURL,
          path: window.location.pathname,
          dark: 'body.dark',
          locale: {
            placeholder: 'Share your thoughts, report expired codes, or ask for help... (You can comment anonymously!)'
          },
          requiredMeta: [], // Allow completely anonymous comments (no required fields)
          login: 'enable', // Optional: allow users to login with GitHub/Twitter for better identity
          pageSize: 10,
          lang: 'en',
          emoji: [
            'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.1.0/weibo',
            'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.1.0/bilibili',
          ],
          reaction: true, // Enable reactions
        })
      }).catch((error) => {
        console.error('Failed to load Waline:', error)
        if (commentsRef.current) {
          commentsRef.current.innerHTML = `
            <div class="text-center py-8 text-muted-foreground">
              <p>Comments are loading... If this persists, please refresh the page.</p>
            </div>
          `
        }
      })

      return () => {
        // Cleanup
        if (walineRef.current) {
          walineRef.current.destroy()
          walineRef.current = null
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
        Share your experience, report expired codes, or ask for help. <strong className="text-foreground">You can comment anonymously - no login required!</strong> Or optionally login with GitHub/Twitter for better identity recognition.
      </p>
      <div ref={commentsRef} className="min-h-[200px]" />
      <p className="text-xs text-muted-foreground/60 mt-4">
        💡 <strong>Tip:</strong> Comments are saved permanently. You can comment anonymously or login for a verified identity!
      </p>
    </div>
  )
}

