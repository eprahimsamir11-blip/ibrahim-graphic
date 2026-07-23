/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'api.example.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
