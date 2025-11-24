"use client"

/**
 * 极简匿名评论系统 - 使用 localStorage 存储（仅用于演示）
 * 
 * 注意：这是最简单的方案，评论只存储在浏览器本地
 * 如果需要真正的持久化，建议使用 Waline 或其他服务
 */

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Send } from "lucide-react"
import { format } from "date-fns"

interface Comment {
  id: string
  name: string
  content: string
  timestamp: number
  page: string
}

interface CommentsProps {
  term?: string
}

export function Comments({ term = "deadly-delivery-codes" }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const pagePath = typeof window !== "undefined" ? window.location.pathname : "/"

  useEffect(() => {
    // Load comments from localStorage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`comments-${pagePath}`)
      if (saved) {
        try {
          setComments(JSON.parse(saved))
        } catch (e) {
          console.error("Failed to load comments:", e)
        }
      }
    }
  }, [pagePath])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    setSubmitting(true)

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim() || "Anonymous",
      content: content.trim(),
      timestamp: Date.now(),
      page: pagePath,
    }

    const updated = [newComment, ...comments]
    setComments(updated)

    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem(`comments-${pagePath}`, JSON.stringify(updated))
    }

    // Reset form
    setName("")
    setContent("")
    setSubmitting(false)

    // Optional: Send to analytics or backend
    // You could send to Google Analytics as an event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "comment_submitted", {
        page_path: pagePath,
      })
    }
  }

  return (
    <div className="mt-16 border-t border-white/10 pt-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-primary" />
        Community Discussion
      </h2>
      <p className="text-muted-foreground mb-6">
        Share your experience, report expired codes, or ask for help. You can comment anonymously - no login required!
      </p>

      {/* Comment Form */}
      <Card className="bg-black/40 backdrop-blur-md border-white/10 mb-8">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your name (optional, leave empty for anonymous)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <textarea
                placeholder="Write your comment here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
            </div>
            <Button 
              type="submit" 
              disabled={submitting || !content.trim()}
              className="w-full sm:w-auto"
            >
              <Send className="w-4 h-4 mr-2" />
              {submitting ? "Posting..." : "Post Comment"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          comments.map((comment) => (
            <Card key={comment.id} className="bg-black/40 backdrop-blur-md border-white/10">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-foreground">
                      {comment.name || "Anonymous"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(comment.timestamp), "MMM d, yyyy 'at' h:mm a")}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground whitespace-pre-wrap">{comment.content}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <p className="text-xs text-muted-foreground/60 mt-6 text-center">
        💡 <strong>Note:</strong> Comments are stored locally in your browser. For persistent comments across devices, we recommend using a dedicated comment service.
      </p>
    </div>
  )
}

