import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "unsplash.com" },
      { protocol: "https", hostname: "www.pexels.com" },
      { protocol: "https", hostname: "pixabay.com" },
      { protocol: "https", hostname: "www.publicdomainpictures.net" },
      { protocol: "https", hostname: "www.freepik.com" }
    ]
  }
};

export default nextConfig;
