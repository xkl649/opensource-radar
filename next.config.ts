import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages serves the pre-rendered HTML in out/; the Next image
  // optimizer is a Node server, so it cannot run on a static host.
  output: "export",
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
