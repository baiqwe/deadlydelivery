/**
 * Favicon Generator Script
 * 
 * This script generates all required favicon sizes from the SVG source.
 * 
 * Prerequisites:
 * npm install sharp
 * 
 * Usage:
 * node scripts/generate-favicons.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
  { size: 16, name: 'icon-16.png' },
  { size: 32, name: 'icon-32.png' },
  { size: 96, name: 'icon-96.png' },
  { size: 144, name: 'icon-144.png' },
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
  { size: 180, name: 'apple-icon.png' }, // Apple Touch Icon
];

const svgPath = path.join(__dirname, '../public/icon.svg');
const publicDir = path.join(__dirname, '../public');

async function generateFavicons() {
  console.log('🎨 开始生成 Favicon 图标...\n');

  // Check if SVG exists
  if (!fs.existsSync(svgPath)) {
    console.error('❌ 错误: icon.svg 文件不存在！');
    console.error(`   请确保文件存在于: ${svgPath}`);
    process.exit(1);
  }

  try {
    // Read SVG
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Generate all sizes
    for (const { size, name } of sizes) {
      const outputPath = path.join(publicDir, name);
      
      await sharp(svgBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 10, g: 14, b: 39, alpha: 1 } // #0a0e27
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✓ 生成 ${name} (${size}x${size})`);
    }

    // Generate favicon.ico (16x16, 32x32, 48x48 multi-size ICO)
    // Note: sharp doesn't support ICO directly, so we'll use 32x32 PNG as fallback
    // For true ICO, use online converter or ImageMagick
    const faviconPath = path.join(publicDir, 'favicon.ico');
    await sharp(svgBuffer)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 10, g: 14, b: 39, alpha: 1 }
      })
      .png()
      .toFile(faviconPath.replace('.ico', '-32.png'));
    
    console.log(`✓ 生成 favicon-32.png (将作为 favicon.ico 的占位符)`);
    console.log(`\n⚠️  注意: 真正的 .ico 文件需要在线转换工具或 ImageMagick`);
    console.log(`   推荐: https://favicon.io/favicon-converter/`);
    console.log(`   上传 icon-32.png 或 icon-512.png 即可生成 favicon.ico\n`);

    console.log('✅ 所有 Favicon 图标生成完成！');
    console.log(`\n📁 文件位置: ${publicDir}`);
    
  } catch (error) {
    console.error('❌ 生成图标时出错:', error.message);
    if (error.message.includes('sharp')) {
      console.error('\n💡 提示: 请先安装 sharp:');
      console.error('   npm install sharp');
    }
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  generateFavicons();
}

module.exports = { generateFavicons };

