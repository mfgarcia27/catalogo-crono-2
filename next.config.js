/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cronofoodexpert.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
