import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/paths";
import { invitationData } from "@/data/invitation";

export const metadata: Metadata = {
  title: pageSeo.invitation.title,
  description: pageSeo.invitation.description,
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
            초대의 말씀
          </li>
        </ol>
      </nav>
      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="mb-8 break-keep text-center text-2xl font-bold text-gray-900 md:text-3xl">
          {invitationData.title}
        </h1>
        <div className="space-y-6 text-lg leading-relaxed lg:text-xl">
          {invitationData.letter.split("\n\n").map((paragraph) => (
            <p key={paragraph} className="whitespace-pre-wrap">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 flex items-end justify-between gap-4 px-1 sm:gap-8 sm:px-8 lg:px-12">
          <Image
            src={asset("/files/sim.jpg")}
            alt="한국농림기상학회장 심교문"
            width={600}
            height={777}
            className="h-auto w-24 shrink-0 sm:w-48 lg:w-56"
          />
          <div className="min-w-0 space-y-4 text-right text-sm text-black sm:text-xl">
            <p>{invitationData.signature.date}</p>
            <p className="break-words break-keep">
              {invitationData.signature.organization}
            </p>
            <p className="font-bold text-2xl text-gray-700 sm:text-4xl">
              {invitationData.signature.name}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
