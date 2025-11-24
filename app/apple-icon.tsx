import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
        }}
      >
        <div
          style={{
            fontSize: 160,
            fontWeight: 'bold',
            color: '#22c55e',
            textShadow: '0 0 30px rgba(34, 197, 94, 0.8)',
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: '-5px',
          }}
        >
          DD
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

