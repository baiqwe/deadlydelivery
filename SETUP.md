# Quick Setup Guide

## Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   The script will check if port 3000 is available. If it's in use, Next.js will automatically use the next available port (3001, 3002, etc.). Check the terminal output after "Local:" to see the actual port.

3. **Open in Browser**
   Navigate to the URL shown in terminal (usually http://localhost:3000, but may be 3001, 3002, etc. if ports are occupied)
   
   💡 **Tip:** Check port availability manually:
   ```bash
   npm run check-port
   ```

## Managing Codes

### Add a New Code
```bash
npm run add-code "CODE" "REWARD"
```

Example:
```bash
npm run add-code "FREEGEMS" "50 Gems"
```

### Mark Code as Expired
```bash
npm run expire-code "CODE"
```

Example:
```bash
npm run expire-code "OLDSCHOOL"
```

## Building for Production

```bash
npm run build
```

This generates a static export in the `out/` directory, ready for deployment.

## Deployment to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Vercel will auto-detect Next.js and build the static site

## Features Implemented

✅ One-click copy codes with confetti effect
✅ Active/Expired codes separation
✅ Toast notifications
✅ Dynamic SEO metadata
✅ Schema.org markup (FAQPage, VideoGame)
✅ Dark horror theme (Black, Grey, Neon Green)
✅ Mobile-first responsive design
✅ Admin script for easy code management
✅ Update banner showing current date
✅ Guide/Wiki page structure

## Project Structure

- `app/` - Next.js pages (App Router)
- `components/` - React components
- `data/codes.json` - Codes database
- `scripts/update-codes.js` - Admin CLI tool
- `types/` - TypeScript definitions

