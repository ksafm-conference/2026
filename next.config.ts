// FILE: next.config.ts
import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
const isGH = process.env.GITHUB_PAGES === "true";
const repo = "2026"; // ← 리포 이름
const buildId = String(Date.now()); // ← 빌드마다 바뀌어 정적 파일 캐시를 무효화시킴

const nextConfig = (phase: string): NextConfig => ({
  // 개발 서버와 빌드가 서로의 CSS 캐시를 덮어쓰지 않도록 분리합니다.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGH ? `/${repo}` : undefined,
  assetPrefix: isGH ? `/${repo}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGH ? `/${repo}` : "", // ← 클라이언트에서 씀
    NEXT_PUBLIC_BUILD_ID: buildId,
  },
});

export default nextConfig;
