// FILE: next.config.ts
import type { NextConfig } from "next";
const isGH = process.env.GITHUB_PAGES === "true";
const repo = "2026"; // ← 리포 이름
const buildId = String(Date.now()); // ← 빌드마다 바뀌어 정적 파일 캐시를 무효화시킴

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGH ? `/${repo}` : undefined,
  assetPrefix: isGH ? `/${repo}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGH ? `/${repo}` : "", // ← 클라이언트에서 씀
    NEXT_PUBLIC_BUILD_ID: buildId,
  },
};

export default nextConfig;
