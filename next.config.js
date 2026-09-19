/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  devIndicators: false,
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache for ultra-fast instant reload
  },
};

module.exports = nextConfig;
