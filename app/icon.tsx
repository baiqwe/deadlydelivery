import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Generate multiple sizes for different use cases
export const size = {
  width: 512,
  height: 512,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 200,
          background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Horror-themed "DD" logo with glow effect */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 280,
              fontWeight: 'bold',
              color: '#22c55e',
              textShadow: '0 0 40px rgba(34, 197, 94, 0.8), 0 0 80px rgba(34, 197, 94, 0.4)',
              fontFamily: 'system-ui, sans-serif',
              letterSpacing: '-10px',
            }}
          >
            DD
          </div>
        </div>
        {/* Subtle border */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: '8px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '20%',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

