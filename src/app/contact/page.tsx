import type { Metadata } from "next";
import { pageSeo } from "@/data/seo";
import LocationMap from "@/app/contact/LocationMap";
import SectionTitle from "@/components/SectionTitle";
import { ICON_IMAGE } from "@/data/source_path";
import Access from "./Access";
import { MapPinHouse, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
};

export default function Page() {
  // 문의 정보 (필요하면 바꿔 넣기)
  const ORG = {
    email: "ksafm1@gmail.com",
    phone: "070-4417-7125",
    address: "(08826) 서울특별시 관악구 관악로 1 서울대학교 36동 108호",
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <SectionTitle icon={ICON_IMAGE} as="h1" className="text-2xl">
        행사장소
      </SectionTitle>
      <section className="space-y-5">
        <div className="space-y-2">
          <p className="text-lg md:flex gap-1 items-center">
            <span className="flex gap-1">
              <MapPinHouse />
              주소 : 서울특별시 서초구 강남대로 27 (양재동 232
            </span>
            <a
              href="https://www.at.or.kr/contents/acko331400/view.action"
              className="underline underline-offset-2 ml-16 md:ml-0 text-indigo-600"
              rel="noopener noreferrer"
              target="_blank"
            >
              aT센터
            </a>{" "}
            ), 1층
          </p>
          <p className="text-lg flex gap-1 items-center">
            <Phone />
            <a href="tel:0263001114"> 전화 : 02-6300-1114</a>
          </p>
        </div>

        {/* 지도 */}
        <LocationMap
          title="양재 aT센터"
          point={{ lat: 37.4682787075426, lng: 127.039136433366 }}
          initLevel={3}
          bigView={{
            srcid: 17023403,
            itemId: 17023403,
            q: "aT센터",
            urlX: 508680.0000000024,
            urlY: 1102413.0000000005,

            mapType: "TYPE_MAP",
          }}
        />
      </section>

      {/* 오시는 길 (How to go there) */}

      <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h2" className="text-2xl">
          오시는 길
        </SectionTitle>
        <Access embedded />
      </section>

      {/* 문의 (Inquiry) */}
      <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h2" className="text-2xl">
          문의
        </SectionTitle>
        <div className="grid gap-2 text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <span className="inline-block w-16 shrink-0 text-gray-600">
              이메일
            </span>
            <a
              href="mailto:ksafm1@gmail.com"
              className="underline underline-offset-2"
            >
              {ORG.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-16 shrink-0 text-gray-600">
              전화
            </span>
            <a href="tel:07044177125" className="underline underline-offset-2">
              {ORG.phone}
            </a>
          </div>
          <div className="flex items-start gap-2">
            <span className="inline-block w-16 shrink-0 pt-0.5 text-gray-600">
              주소
            </span>
            <span>{ORG.address}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
