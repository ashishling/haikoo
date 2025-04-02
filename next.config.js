/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['swiper'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'swiper/css': require.resolve('swiper/css'),
      'swiper/css/effect-creative': require.resolve('swiper/css/effect-creative'),
    }
    return config
  },
}

module.exports = nextConfig
