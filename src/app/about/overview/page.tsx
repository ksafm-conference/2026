import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { ICON_IMAGE } from "@/data/source_path";
import { overviewData } from "@/data/overview";

export const metadata: Metadata = {
  title: pageSeo.overview.title,
  description: pageSeo.overview.description,
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
          <li>
            <span className="text-gray-700">학술대회 안내</span>
          </li>
          <li className="text-gray-400">/</li>
          <li aria-current="page" className="font-medium text-indigo-500">
            학술대회 개요
          </li>
        </ol>
      </nav>

      {/* 주최/주관 */}
      <section className="mb-8 rounded-2xl border bg-white p-5 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          {overviewData.organizer.title}
        </SectionTitle>
        <p className="text-gray-800 text-lg">- {overviewData.organizer.content}</p>
      </section>

      {/* 행사 장소 */}
      <section className="mb-8 rounded-2xl border bg-white p-5 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          {overviewData.location.title}
        </SectionTitle>
        <ul className="list-none space-y-2 text-lg text-gray-800">
          {overviewData.location.items.map((item, index) => (
            <li key={index} className="relative pl-4 before:absolute before:left-0 before:content-['-']">
              {item}
            </li>
          ))}
          <li className="relative pl-4 before:absolute before:left-0 before:content-['-']">
            웹사이트:{" "}
            <a
              href={overviewData.location.website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline underline-offset-2"
            >
              {overviewData.location.website.label}
            </a>
          </li>
        </ul>
      </section>

      {/* 주제 */}
      <section className="mb-8 rounded-2xl border bg-white p-5 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          {overviewData.theme.title}
        </SectionTitle>
        <p className="text-gray-800 text-lg">{overviewData.theme.content}</p>
      </section>

      {/* 주요 일정 */}
      <section className="rounded-2xl border bg-white p-5 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          {overviewData.schedule.title}
        </SectionTitle>
        <ul className="list-none space-y-2 text-lg text-gray-800">
          {overviewData.schedule.items.map((item, index) => (
            <li key={index} className="relative pl-4 before:absolute before:left-0 before:content-['-']">
              {item.label}: {item.date}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
