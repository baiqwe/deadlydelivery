# Deadly Delivery Codes & Wiki

A high-performance, SEO-focused static website for Deadly Delivery game codes and guides.

## Features

- 🎮 One-click copy promotional codes
- 🎉 Confetti celebration on code copy
- 📱 Fully responsive mobile-first design
- 🔍 SEO optimized with Schema.org markup
- 🌙 Dark horror-themed UI
- 📝 Simple admin script for code updates

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **Icons:** Lucide React
- **Deployment:** Vercel (Static Export)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The dev script will automatically check if port 3000 is available before starting. If port 3000 is in use, Next.js will automatically use the next available port (3001, 3002, etc.). Check the terminal output for the actual port number.

You can also check port availability manually:
```bash
npm run check-port
```

Or use direct Next.js command (no port check):
```bash
npm run dev:direct
```

### Building for Production

```bash
npm run build
```

This will generate a static export in the `out/` directory.

## Managing Codes

### Adding a New Code

```bash
npm run add-code "CODE" "REWARD"
```

Example:
```bash
npm run add-code "FREEGEMS" "50 Gems"
```

### Expiring a Code

```bash
npm run expire-code "CODE"
```

Example:
```bash
npm run expire-code "OLDSCHOOL"
```

The script will:
- Add/update the code in `data/codes.json`
- Update the `lastChecked` date for all active codes
- Automatically set the status to "active" for new codes

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main codes page
│   ├── guide/             # Wiki/guide pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── codes-list.tsx    # Codes display component
│   └── update-banner.tsx # Update banner component
├── data/
│   └── codes.json        # Codes data (CMS)
├── scripts/
│   └── update-codes.js   # Admin script for code management
└── types/
    └── code.ts           # TypeScript types
```

## SEO Features

- Dynamic metadata based on active codes count
- Schema.org FAQPage markup
- Schema.org VideoGame markup
- Open Graph tags
- Mobile-optimized performance

## Deployment

This project is configured for static export and can be deployed to Vercel, Netlify, or any static hosting service.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and build the static site

## License

Private project - All rights reserved

