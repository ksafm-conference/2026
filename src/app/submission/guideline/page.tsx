import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { ICON_IMAGE } from "@/data/source_path";
import ComingSoon from "@/components/ComingSoon";
import { guidelineData } from "@/data/guidelines";

export const metadata: Metadata = {
  title: pageSeo.guideline.title,
  description: pageSeo.guideline.description,
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600" aria-label="breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:underline">
              홈
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li aria-current="page" className="font-medium text-indigo-500">
            발표/포스터 안내
          </li>
        </ol>
      </nav>

      {/* <h1 className='mb-6 text-2xl font-bold md:text-3xl'>발표/포스터 안내 (Guideline)</h1> */}
      {true ? (
        <ComingSoon />
      ) : (
        <>
          {/* 구두 발표 */}
          <section className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
              {guidelineData.oral.title}
            </SectionTitle>
            <ul className="list-none pl-0 space-y-2 text-lg text-gray-900">
              {guidelineData.oral.items.map((item, index) => (
                <li key={index} className="relative pl-4 before:absolute before:left-0 before:content-['-']">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-10 list-none pl-0 space-y-2 text-lg text-gray-900">
              {guidelineData.oral.notices.map((notice, index) => (
                <li key={index} className="relative pl-6 before:absolute before:left-0 before:content-['※']">
                  {notice.includes("ksafm2@gmail.com") ? (
                    <>
                      {notice.split("(ksafm2@gmail.com)")[0]}
                      <a
                        href="mailto:ksafm2@gmail.com"
                        className="underline underline-offset-2 text-blue-600 hover:text-blue-700"
                      >
                        (ksafm2@gmail.com)
                      </a>
                      {notice.split("(ksafm2@gmail.com)")[1]}
                    </>
                  ) : (
                    notice
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* 포스터 */}
          <section className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
            <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
              {guidelineData.poster.title}
            </SectionTitle>
            <ul className="list-none pl-0 space-y-2 text-lg text-gray-900">
              {guidelineData.poster.items.map((item, index) => (
                <li key={index} className="relative pl-4 before:absolute before:left-0 before:content-['-']">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </main>
  );
}
