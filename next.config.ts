import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable image optimization for better compatibility with static hosting
  },
  // Uncomment if deploying to a subdirectory
  // basePath: '/your-subdirectory',

  // Uncomment for static export
  // output: 'export',
};

export default nextConfig;
