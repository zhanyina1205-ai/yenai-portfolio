import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vinext prerender currently skips non-root routes when slash redirects are enabled.
  trailingSlash: process.env.GITHUB_PAGES !== "1",
  ...(process.env.GITHUB_PAGES === "1"
    ? { output: "export" }
    : {}),
};

export default nextConfig;
