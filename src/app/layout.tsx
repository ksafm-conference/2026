import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import { FAVICON_IMAGE } from "@/data/source_path";

import { seoConfig } from "@/data/seo";

export const metadata: Metadata = {
  title: {
    template: `%s | ${seoConfig.siteName}`,
    default: seoConfig.siteName,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: "KSAFM" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: FAVICON_IMAGE,
  },
  openGraph: {
    title: seoConfig.siteName,
    description: seoConfig.description,
    url: seoConfig.url,
    siteName: seoConfig.siteName,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900">
        {/* 스크롤 튀는 현상 방지: 브라우저 기본 복원 기능 끄기 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.history.scrollRestoration = 'manual';
                window.scrollTo(0, 0);
              }
            `,
          }}
        />
        {/* Sticky Footer 구조: flex flex-col min-h-screen */}
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
