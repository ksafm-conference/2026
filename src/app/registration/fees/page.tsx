import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { ICON_IMAGE } from "@/data/source_path";
import {
  registrationFeeNotes,
  registrationFees,
  paymentMethods,
  refundPolicy,
} from "@/data/fees";

export const metadata: Metadata = {
  title: pageSeo.fees.title,
  description: pageSeo.fees.description,
};

const registrationNoteHighlights = ["초록 1편", "초록 2편", "초록 3편 이상"];

function renderRegistrationFeeNote(note: string) {
  const highlight = registrationNoteHighlights.find((phrase) =>
    note.includes(phrase),
  );

  if (!highlight) return note;

  const [before, after] = note.split(highlight);

  return (
    <>
      {before}
      <span className="text-blue-600">{highlight}</span>
      {after}
    </>
  );
}

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
            참가 등록
          </li>
        </ol>
      </nav>

      <section className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          등록비
        </SectionTitle>
        <div className="overflow-hidden rounded-xl border border-gray-400">
          <table className="w-full table-fixed border-collapse text-center text-base md:text-lg">
            <colgroup>
              <col className="w-[18.18%]" />
              <col className="w-[45.45%]" />
              <col className="w-[36.37%]" />
            </colgroup>
            <thead>
              <tr className="bg-[#a6a6a6] text-gray-950">
                <th
                  colSpan={2}
                  className="border border-gray-500 px-4 py-4 text-lg font-semibold md:text-2xl"
                >
                  구분
                </th>
                <th className="border border-gray-500 px-4 py-4 text-lg font-semibold md:text-2xl">
                  금액
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#e2f0d9]">
                <td className="border border-gray-400 px-2 py-5 text-base font-semibold md:text-xl">
                  {registrationFees[0].group}
                </td>
                <td className="border border-gray-400 px-4 py-5 text-base font-semibold md:text-xl">
                  {registrationFees[0].type}
                </td>
                <td className="border border-gray-400 px-4 py-5 text-base font-medium md:text-xl">
                  {registrationFees[0].amount}
                </td>
              </tr>
              {registrationFees.slice(1).map((fee, index) => (
                <tr key={fee.type} className="bg-[#ddebf7]">
                  {index === 0 && (
                    <td
                      rowSpan={3}
                      className="border border-gray-400 px-2 py-5 text-base font-semibold md:text-xl"
                    >
                      {fee.group}
                    </td>
                  )}
                  <td className="border border-gray-400 px-4 py-5 text-base font-semibold md:text-xl">
                    {fee.type}
                  </td>
                  <td className="border border-gray-400 px-4 py-5 text-base font-medium md:text-xl">
                    {fee.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-5 space-y-1 text-base font-semibold leading-relaxed text-gray-950 md:text-lg">
          {registrationFeeNotes.map((note) => (
            <li key={note}>※ {renderRegistrationFeeNote(note)}</li>
          ))}
        </ul>
      </section>

      {/* 결제방법 */}
      <section className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          결제 방법{" "}
        </SectionTitle>
        <ul className="list-none pl-0 space-y-2 text-lg text-gray-900">
          {paymentMethods.map((method, index) => (
            <li
              key={index}
              className="relative pl-4 before:absolute before:left-0 before:content-['-']"
            >
              {method}
            </li>
          ))}
        </ul>
      </section>

      {/* 취소 및 환불정책 */}
      <section className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          취소 및 환불정책
        </SectionTitle>
        <ul className="list-none pl-0 space-y-2 text-lg text-gray-900">
          {refundPolicy.policies.map((policy, index) => (
            <li
              key={index}
              className="relative pl-4 before:absolute before:left-0 before:content-['-']"
            >
              {policy.includes("이메일") ? (
                <>
                  {policy.split("이메일")[0]}이메일
                  <a
                    href={`mailto:${refundPolicy.contactEmail}`}
                    className="underline underline-offset-2 text-blue-600 hover:text-blue-700"
                  >
                    ({refundPolicy.contactEmail})
                  </a>
                  {policy.split("이메일")[1]}
                </>
              ) : (
                policy
              )}
            </li>
          ))}
          {refundPolicy.dates.map((date, index) => (
            <li key={index} className="relative pl-10">
              {date.label}: {date.content}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
