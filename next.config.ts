import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/orly-landing',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
