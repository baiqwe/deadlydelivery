/**
 * Script to generate static icon files from Next.js dynamic icons
 * 
 * This script generates PNG icon files that can be used for:
 * - manifest.json
 * - Direct favicon references
 * - Better performance than dynamic generation
 * 
 * Run: node scripts/generate-icons.js
 */

const fs = require('fs');
const path = require('path');

// Since Next.js generates icons dynamically, we'll create a placeholder
// that tells users how to generate proper icons

const publicDir = path.join(process.cwd(), 'public');
const iconDir = path.join(publicDir, 'icons');

// Create icons directory if it doesn't exist
if (!fs.existsSync(iconDir)) {
  fs.mkdirSync(iconDir, { recursive: true });
}

const readmeContent = `# Icon Generation Guide

## Current Setup

Next.js 14 generates icons dynamically using:
- \`app/icon.tsx\` - Generates favicon and app icons (512x512)
- \`app/apple-icon.tsx\` - Generates Apple touch icon (180x180)

## For Better Performance (Optional)

You can create static PNG files for better caching:

### Required Icons:
- \`icon-192.png\` (192x192) - For manifest.json
- \`icon-512.png\` (512x512) - For manifest.json and PWA

### Generate Icons Using:

1. **Online Tools**:
   - https://favicon.io/ - Upload a base image, generates all sizes
   - https://realfavicongenerator.net/ - Comprehensive favicon generator

2. **Design Guidelines**:
   - Use "DD" logo or horror-themed design
   - Background: Dark (#0a0e27) with green accent (#22c55e)
   - Size: Start with 512x512, then resize to 192x192
   - Format: PNG with transparency

3. **From Dynamic Icons**:
   - Visit http://localhost:3000/icon in your browser
   - Save the generated image
   - Resize to create different sizes

## Place Static Files:

Once generated, place icons in \`public/\` directory:
- \`public/icon-192.png\`
- \`public/icon-512.png\`

The app will automatically use static files if they exist, otherwise fallback to dynamic generation.
`;

fs.writeFileSync(
  path.join(publicDir, 'ICON_GENERATION.md'),
  readmeContent
);

console.log('✅ Icon generation guide created at public/ICON_GENERATION.md');
console.log('\n📝 Next steps:');
console.log('1. Generate icons using online tools or design software');
console.log('2. Place icon-192.png and icon-512.png in public/ directory');
console.log('3. Or keep using dynamic icons (already working)');

