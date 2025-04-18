/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/paSocial',
  assetPrefix: '/paSocial/',
}

module.exports = nextConfig 