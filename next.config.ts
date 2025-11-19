import type { NextConfig } from "next";

const isProjectPage = true; // set to false if using username.github.io root
const repo = "NASIT2026";
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  assetPrefix: isProjectPage ? `/${repo}/` : "",
  basePath: isProjectPage ? `/${repo}` : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  
  env: {
    NEXT_PUBLIC_BASE_PATH: isProjectPage ? `/${repo}` : "",
  },
  
};

export default nextConfig;
