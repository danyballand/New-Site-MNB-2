import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: false,
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopifycdn.net",
      },
      {
        protocol: "https",
        hostname: "mynicebracelet.com",
      },
    ],
  },
};

export default nextConfig;
