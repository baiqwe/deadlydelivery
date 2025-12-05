"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface YouTubeLiteProps {
    videoId: string
    title: string
}

/**
 * Lightweight YouTube embed component using Facade pattern
 * Only loads iframe when user clicks, saving ~1MB on initial load
 */
export function YouTubeLite({ videoId, title }: YouTubeLiteProps) {
    const [activated, setActivated] = useState(false)

    if (!activated) {
        return (
            <div
                className="relative cursor-pointer aspect-video bg-black rounded-lg overflow-hidden group"
                onClick={() => setActivated(true)}
                role="button"
                tabIndex={0}
                aria-label={`Play video: ${title}`}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setActivated(true)
                    }
                }}
            >
                {/* YouTube thumbnail - automatically served by YouTube */}
                <img
                    src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                    alt={title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                </div>

                {/* Loading hint */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-sm bg-black/60 backdrop-blur-sm px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to load video
                </div>
            </div>
        )
    }

    // User clicked - load actual YouTube iframe
    return (
        <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        />
    )
}
