import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isProjectPage = true; // set to false if using username.github.io root
const repo = "NASIT2026";
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  assetPrefix: isProd && isProjectPage ? `/${repo}/` : "",
  basePath: isProd && isProjectPage ? `/${repo}` : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  
};

export default nextConfig;
