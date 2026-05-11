import type { Metadata } from "next";
import Link from "next/link";
import { Download, Mail, Phone } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { pageSeo } from "@/data/seo";
import { ICON_IMAGE } from "@/data/source_path";
import { sponsorshipData } from "@/data/sponsorship";
import { asset } from "@/lib/paths";

export const metadata: Metadata = {
  title: pageSeo.sponsorship.title,
  description: pageSeo.sponsorship.description,
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
            <span className="text-gray-700">
              {sponsorshipData.breadcrumb.parent}
            </span>
          </li>
          <li className="text-gray-400">/</li>
          <li aria-current="page" className="font-medium text-indigo-500">
            {sponsorshipData.breadcrumb.current}
          </li>
        </ol>
      </nav>

      <section className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          {sponsorshipData.schedule.title}
        </SectionTitle>
        <ul className="list-none space-y-3 pl-0 text-sm leading-relaxed text-gray-900 md:text-lg">
          {sponsorshipData.schedule.items.map((item) => (
            <li
              key={item.label}
              className="relative pl-4 before:absolute before:left-0 before:content-['-']"
            >
              <span className="font-semibold">{item.label}: </span>
              {item.content}
              {item.note && (
                <p className="mt-1 text-sm text-gray-700 md:text-base">
                  ※{item.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          {sponsorshipData.benefits.title}
        </SectionTitle>
        <ol className="space-y-4 pl-5 text-sm leading-relaxed text-gray-900 md:text-lg">
          {sponsorshipData.benefits.items.map((benefit) => (
            <li key={benefit.title} className="list-decimal">
              <p className="font-semibold">{benefit.title}</p>
              <p className="mt-1 text-gray-800">- {benefit.content}</p>
              {benefit.note && (
                <p className="mt-1 text-gray-700">({benefit.note})</p>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          {sponsorshipData.application.title}
        </SectionTitle>
        <p className="mb-4 text-sm leading-relaxed text-gray-900 md:text-lg">
          {sponsorshipData.application.description}
        </p>
        <a
          href={asset(sponsorshipData.application.documentPath)}
          download
          className="inline-flex items-center gap-2 rounded-xl border border-indigo-600/20 bg-gradient-to-b from-indigo-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:from-indigo-500 hover:to-indigo-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50 active:scale-95"
          rel="noopener noreferrer"
        >
          <Download className="h-4 w-4" />
          {sponsorshipData.application.buttonLabel}
        </a>
      </section>

      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          {sponsorshipData.contact.title}
        </SectionTitle>
        <div className="space-y-2 text-sm text-gray-800 md:text-lg">
          <p className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4" /> {sponsorshipData.contact.email}
          </p>
          <br />
          <p className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4" /> {sponsorshipData.contact.phone}
          </p>
        </div>
      </section>
    </main>
  );
}
