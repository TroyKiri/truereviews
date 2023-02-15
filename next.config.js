/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  basePath: isProd ? 'https://troykiri.github.io/truereviews/' : '',
  assetPrefix: isProd ? 'https://troykiri.github.io/truereviews/' : '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
