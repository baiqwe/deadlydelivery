# Giscus Comments Setup Guide

## Overview

Giscus is a comments system powered by GitHub Discussions. It requires minimal setup and provides free, user-generated content that improves SEO.

## Setup Steps

### 1. Enable GitHub Discussions

1. Go to your GitHub repository: `https://github.com/baiqwe/deadlydelivery`
2. Click **Settings** → **General**
3. Scroll down to **Features** section
4. Check **Discussions** checkbox
5. Click **Set up discussions**

### 2. Install Giscus App

1. Go to: https://github.com/apps/giscus
2. Click **Install** or **Configure**
3. Select your repository: `baiqwe/deadlydelivery`
4. Choose **Only select repositories**
5. Click **Install**

### 3. Configure Giscus

1. Go to: https://giscus.app
2. Follow the configuration wizard:
   - **Repository**: `baiqwe/deadlydelivery`
   - **Repository ID**: Will be auto-detected (looks like `R_kgDOLhXXXXX`)
   - **Category**: Create a new category called "Announcements" in GitHub Discussions
   - **Category ID**: Will be auto-detected (looks like `DIC_kwDOLhXXXXX`)
   - **Mapping**: Choose "pathname"
   - **Theme**: "Dark" (matches your site)
   - **Input position**: "Bottom"
   - **Enable reactions**: Yes

### 4. Update Code

Update `components/comments.tsx` with your actual IDs:

```typescript
script.setAttribute("data-repo-id", "YOUR_REPO_ID") // Replace with actual ID
script.setAttribute("data-category-id", "YOUR_CATEGORY_ID") // Replace with actual ID
```

### 5. Test

After deployment, comments should appear at the bottom of pages. Users need a GitHub account to comment.

## Benefits for SEO

- **User-Generated Content (UGC)**: Free, unique content
- **Long-tail Keywords**: Natural language in comments
- **Fresh Content**: New comments signal active site
- **Social Signals**: Engagement metrics improve rankings
- **Lower Bounce Rate**: Comments keep users on page longer

## Alternative: Disqus

If you prefer Disqus instead:
1. Sign up at https://disqus.com
2. Get your Disqus shortname
3. Replace Giscus component with Disqus script

But Giscus is recommended because:
- ✅ Free and open source
- ✅ No ads
- ✅ Privacy-friendly
- ✅ Integrated with GitHub

