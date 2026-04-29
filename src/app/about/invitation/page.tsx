import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import Link from "next/link";
import { asset } from "@/lib/paths";
import AutoSplitLetter from "@/components/AutoSplitLetter";
import ComingSoon from "@/components/ComingSoon";
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
      {true ? (
        <ComingSoon />
      ) : (
        <section className="rounded-2xl border bg-white p-6 shadow-sm">
          <AutoSplitLetter text={invitationData.letter} imageSrc={asset("/files/sim.jpg")} />

          <div className="mt-8 space-y-3 text-right text-black text-lg">
            <p>{invitationData.signature.organization}</p>
            <p className="whitespace-pre-wrap font-bold text-3xl text-gray-700">
              {invitationData.signature.name}
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
