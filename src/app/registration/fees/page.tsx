import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { ICON_IMAGE } from "@/data/source_path";
import { registrationFees, paymentMethods, refundPolicy } from "@/data/fees";

export const metadata: Metadata = {
  title: pageSeo.fees.title,
  description: pageSeo.fees.description,
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
            참가 등록
          </li>
        </ol>
      </nav>

      <section className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          등록비
        </SectionTitle>
        <div className="overflow-hidden rounded-xl border">
          <table className="w-full text-center text-sm ">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2">구분</th>
                <th className="px-4 py-2">금액</th>
                <th className="px-4 py-2">비고</th>
              </tr>
            </thead>
            <tbody>
              {registrationFees.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    표 데이터를 채워주세요.
                  </td>
                </tr>
              ) : (
                registrationFees.map((r) => (
                  <tr key={r.type} className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-2">{r.type}</td>
                    <td className="px-4 py-2">{r.amount}</td>
                    <td className="px-4 py-2">{r.note}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* 결제방법 */}
      <section className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          결제 방법{" "}
        </SectionTitle>
        <ul className="list-none pl-0 space-y-2 text-lg text-gray-900">
          {paymentMethods.map((method, index) => (
            <li key={index} className="relative pl-4 before:absolute before:left-0 before:content-['-']">
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
            <li key={index} className="relative pl-4 before:absolute before:left-0 before:content-['-']">
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
