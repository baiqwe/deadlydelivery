# SEO Setup Guide

## ✅ Completed SEO Features

### 1. Sitemap.xml
- ✅ Created `app/sitemap.ts` - Automatically generates sitemap.xml
- ✅ Includes all pages with priorities and update frequencies
- ✅ Accessible at: `https://your-domain.com/sitemap.xml`

### 2. Robots.txt
- ✅ Created `app/robots.ts` - Automatically generates robots.txt
- ✅ Allows all crawlers to index the site
- ✅ Blocks `/api/` routes
- ✅ Accessible at: `https://your-domain.com/robots.txt`

### 3. Canonical Tags
- ✅ Added `metadataBase` to root layout and all pages
- ✅ Added `alternates.canonical` to prevent duplicate content
- ✅ Each page has its own canonical URL

### 4. Web App Manifest
- ✅ Created `public/manifest.json` for PWA support
- ✅ Includes app icons and theme colors
- ✅ Makes the site installable as a PWA

### 5. Favicon
- ✅ Created `app/icon.tsx` for dynamic favicon generation
- ⚠️ **Action Required**: Add static PNG icons to `public/`:
  - `icon-192.png` (192x192 pixels)
  - `icon-512.png` (512x512 pixels)

### 6. Google Analytics
- ✅ Integrated Google Analytics (G-4ST6SB4EGB)
- ✅ Uses Next.js Script component with `afterInteractive` strategy
- ✅ Properly loaded for optimal performance

## 🔧 Required Configuration

### Environment Variable Setup

**Important**: The domain is now set to `https://www.deadlyblox.com` as the default.

**Optional**: You can override it with an environment variable in Vercel if needed:

```
NEXT_PUBLIC_SITE_URL=https://www.deadlyblox.com
```

**Steps (if you want to use environment variable):**
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variable:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://www.deadlyblox.com`
   - **Environment**: Production, Preview, Development
3. Redeploy the project (optional - default is already set)

This ensures:
- Correct canonical URLs in metadata
- Proper sitemap URLs
- Correct Open Graph URLs

## 📊 SEO Checklist

- ✅ Sitemap.xml generated
- ✅ Robots.txt configured
- ✅ Canonical tags on all pages
- ✅ MetadataBase configured
- ✅ Open Graph tags
- ✅ Schema.org structured data (FAQPage, VideoGame)
- ✅ Web App Manifest
- ✅ Google Analytics integration
- ⚠️ Static favicon icons (manual step required)

## 🎯 Next Steps

1. **Add Favicon Icons**: Create and add `icon-192.png` and `icon-512.png` to `public/`
2. **Set Environment Variable**: Configure `NEXT_PUBLIC_SITE_URL` in Vercel
3. **Submit to Google Search Console**: 
   - Add your site property
   - Submit sitemap: `https://your-domain.com/sitemap.xml`
4. **Verify**: Check that sitemap and robots.txt are accessible

## 🔍 Testing

After deployment, verify:
- `https://your-domain.com/sitemap.xml` - Should show XML sitemap
- `https://your-domain.com/robots.txt` - Should show robots rules
- View page source - Should see canonical tags in `<head>`
- Google Tag Assistant - Should detect Google Analytics

