/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['localhost'], // Add any external image domains here
  },
  // ... other config options
}

module.exports = nextConfig
