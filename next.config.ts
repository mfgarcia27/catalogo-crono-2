import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cronofoodexpert.com",
      },
    ],
  },
};

export default nextConfig;
