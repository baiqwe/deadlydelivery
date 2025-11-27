/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Exclude mudel directories from build
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

module.exports = nextConfig

