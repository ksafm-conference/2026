import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import Link from "next/link";
import { ExternalLink, Download, Info } from "lucide-react";
import { externalLinks } from "@/data/nav";
import SectionTitle from "@/components/SectionTitle";
import { ICON_IMAGE, TEMPLATE_DOC } from "@/data/source_path";
import { asset } from "@/lib/paths";
import { submissionData } from "@/data/submission";

export const metadata: Metadata = {
  title: pageSeo.submission.title,
  description: pageSeo.submission.description,
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
            초록 제출
          </li>
        </ol>
      </nav>

      {/* 초록 제출*/}
      <section className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          {submissionData.generalInfo.title}
        </SectionTitle>

        <ul className="list-none pl-0 space-y-2 text-sm md:text-lg text-gray-900">
          {submissionData.generalInfo.items.map((item, index) => (
            <li key={index} className="relative pl-4 before:absolute before:left-0 before:content-['-']">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 발표 분야 안내*/}
      <section className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          {submissionData.fields.title}
        </SectionTitle>
        <ul className="list-none pl-0 space-y-2 text-sm md:text-lg text-gray-900">
          {submissionData.fields.items.map((item, index) => (
            <li key={index} className="relative pl-4 before:absolute before:left-0 before:content-['-']">
              {item.label}: {item.content}
            </li>
          ))}
        </ul>
      </section>

      {/* 제출 절차 */}
      <section className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          {submissionData.procedure.title}
        </SectionTitle>
        <ul className="list-none pl-0 space-y-2 text-sm md:text-lg text-gray-900">
          {submissionData.procedure.items.map((item, index) => (
            <li key={index} className="relative pl-4 before:absolute before:left-0 before:content-['-']">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 액션 버튼: 양식 다운로드 / 제출 바로가기 */}
      <section className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          {submissionData.format.title}
        </SectionTitle>
        <div className="flex flex-wrap gap-2">
          {submissionData.format.content}
          {/* 양식 다운로드 (hwp) */}
          {/*           
          <a
            href={asset(TEMPLATE_DOC)}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-600/20 bg-gradient-to-b from-indigo-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:from-indigo-500 hover:to-indigo-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50 active:scale-95"
            rel="noopener noreferrer"
          >
            <Download className="h-4 w-4" />
            초록 양식 다운로드
          </a> */}
          {/* 제출 페이지 이동 */}
          {/* 
          <a
            href={externalLinks.submission}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/20 bg-gradient-to-b from-emerald-500 to-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:from-emerald-500 hover:to-emerald-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/50 active:scale-95"
          >
            초록 제출
            <ExternalLink className="h-4 w-4" />
          </a> */}
        </div>

        {/* 안내 박스 */}
        {/* <div className='mt-4 flex items-start gap-2 rounded-lg bg-indigo-50/70 p-3 text-[13px] text-indigo-900'>
          <Info className='mt-0.5 h-4 w-4 shrink-0' />
          <p>
            템플릿에 맞춰 작성 후 <strong>HWP</strong> 파일로 업로드하세요. 파일명 예:{' '}
            <code className='rounded bg-white/70 px-1'>KSAFM_2025_홍길동.hwp</code>
          </p>
        </div> */}
      </section>
    </main>
  );
}
