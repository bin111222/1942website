module.exports = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ['1942studio.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return []
  },
  async rewrites() {
    return []
  }
} 