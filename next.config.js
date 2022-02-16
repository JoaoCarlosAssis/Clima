/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.weatherapi.com"],
    imageSizes: [64, 128],
  },
}

module.exports = nextConfig
