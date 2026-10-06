"use client";

import { useState, type ReactNode } from "react";
import clsx from "clsx";

type AccessProps = { embedded?: boolean; className?: string };
type Tab = "car" | "subway" | "train" | "air" | "etc";
const officialUrl =
  "https://www.hanwharesort.co.kr/irsweb/resort3/resort/rs_contact.do?bp_cd=0801";
const destination = "한화리조트/해운대";
const carRows = [
  [
    "서울",
    "서울 → 경부고속도로 → 동대구JCT → 부산대구민자고속도로 → 대동JCT → 남양산 → 경부고속도로(부산방면) → 부산톨게이트 → 도시고속도로 → 수영만요트경기장 → 홈플러스 → 한화리조트/해운대",
    "5시간 30분",
    destination,
  ],
  [
    "서울",
    "서울 → 신갈 → 호법 → 여주 → 중부내륙고속도로 → 충주 → 낙동 → 김천 → 경부고속도로 → 부산톨게이트 → 도시고속도로 → 수영만 요트 경기장 → 홈플러스 → 한화리조트/해운대",
    "5시간 30분",
    destination,
  ],
  [
    "서울",
    "서울 → 경부고속도로 → 부산톨게이트 → 도시고속도로 → 광안대교 → 광안리 해변 → 수영만요트경기장 → 홈플러스 → 한화리조트/해운대",
    "5시간 30분",
    destination,
  ],
  [
    "서울",
    "서울 → 동서울 톨게이트 → 중부고속도로 → 경부고속도로 → 부산톨게이트 → 도시고속도로(해운대 방면) → 원동IC → 수비교차로 → 수영만요트경기장 → 홈플러스 → 한화리조트/해운대",
    "6시간",
    destination,
  ],
  [
    "서울",
    "서울 → 경부고속도로 → 천안 → 대전 → 통영대전고속도로(중부고속도로) → 진주 → 마산 → 서부산 톨게이트 → 동서고가 → 황령터널 → 광안대교 → 수영만 요트경기장 → 홈플러스 → 한화리조트/해운대",
    "5시간 30분",
    destination,
  ],
  [
    "서울",
    "서울 → 안양 → 오산 → 평택 → 천안 → 조치원 → 대전 → 영동 → 김천 → 대구 → 경북달성군 → 창녕 → 밀양 → 진영 → 김해 → 동래 → 반송 → 기장 → 송정 → 해운대 해수욕장 → 한화리조트/해운대",
    "7시간 30분",
    destination,
  ],
  [
    "경주",
    "한화리조트/경주 → 보문로 → 서라벌대로 → 경주I.C → 부산(경부고속도로 이용) → 부산톨게이트 → 도시고속도로 → 벡스코 → 요트경기장 → 한화리조트/해운대",
    "1시간 30분",
    destination,
  ],
  [
    "지리산",
    "한화리조트/지리산 → 화엄사 입구 → 동순천I.C → 남해고속도로 → 서부산톨게이트 → 동서고가도로 → 황령터널 → 광안대교 → 요트경기장 → 한화리조트/해운대",
    "3시간 30분",
    destination,
  ],
  [
    "수안보",
    "한화리조트/수안보 → 수안보 → 괴산 → 증평 → 증평I.C → 중부고속도로 → 대전 → 대구 → 부산톨게이트 → 도시고속도로 → 벡스코 → 요트경기장 → 한화리조트/해운대",
    "4시간",
    destination,
  ],
  [
    "용인",
    "한화리조트/용인 → 송전방향 → 오산공설운동장 사거리 → 오산I.C → 대전 → 대구 → 부산톨게이트 → 도시고속도로 → 벡스코 → 요트경기장 → 한화리조트/해운대",
    "4시간 30분",
    destination,
  ],
  [
    "양평",
    "한화리조트/양평 → 청평방향 → 옥천 → 아신 → 양수리 → 팔당대교 → 서울(올림픽대로) → 중부고속도로 이용 → 대전 → 대구 → 부산톨게이트 → 도시고속도로 → 벡스코 → 요트경기장 → 한화리조트/해운대",
    "6시간",
    destination,
  ],
  [
    "대천",
    "한화리조트/대천 → 대천해수욕장 → 보령 → 청양 → 공주 → 대전 → 대구 → 부산톨게이트 → 도시고속도로 → 백스코 → 요트경기장 → 한화리조트/해운대",
    "6시간",
    destination,
  ],
  [
    "산정호수",
    "한화리조트/산정호수 → 문암사거리 → 운천 → 포천 → 의정부 → 동부간선도로 → 서울 → 대전 → 대구 → 부산톨게이트 → 도시고속도로 → 벡스코 → 요트경기장 → 한화리조트/해운대",
    "6시간 30분",
    destination,
  ],
  [
    "설악",
    "한화리조트/설악 → 속초 → 강릉 → 동해 → 삼척 → 울진 → 평해 → 영덕 → 포항 → 김포 → 울산 → 기장 → 송정 → 송정터널 → 해운대 신시가지 → 벡스코 → 한화리조트/해운대",
    "6시간",
    destination,
  ],
  [
    "설악",
    "한화리조트/설악 → 속초 → 강릉 → 영동고속도로 이용 → 신갈I.C → 대전 → 대구 → 부산톨게이트 → 도시고속도로 → 벡스코 → 요트경기장 → 한화리조트/해운대",
    "7시간",
    destination,
  ],
];

export default function Access({ embedded = false, className }: AccessProps) {
  const [tab, setTab] = useState<Tab>("car");
  const tabs: { key: Tab; label: string }[] = [
    { key: "car", label: "자동차편" },
    // { key: "subway", label: "지하철편" },
    { key: "train", label: "기차편" },
    { key: "air", label: "항공편" },
    { key: "etc", label: "버스편" },
  ];
  const content = (
    <>
      <Parking />
      <ul className="my-5 flex flex-wrap gap-2 md:gap-3">
        {tabs.map(({ key, label }) => (
          <li key={key}>
            <button
              type="button"
              onClick={() => setTab(key)}
              aria-pressed={tab === key}
              aria-controls="access-panel"
              className={clsx(
                "inline-flex items-center rounded-full border px-4 py-2 md:px-5 md:py-2.5 text-md md:text-lg font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300",
                tab === key
                  ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                  : "bg-blue-50 text-blue-500 border-blue-100 hover:bg-blue-200",
              )}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
      <div id="access-panel" className="min-w-0 space-y-6">
        {tab === "car" && (
          <GuideTable
            title="자동차로 오시는 길"
            headers={["출발지", "경로", "소요시간", "도착지"]}
            rows={carRows}
            wide
          />
        )}
        {tab === "subway" && (
          <div className="rounded-lg border bg-gray-50 p-4 text-sm leading-relaxed md:text-base">
            <h3 className="mb-2 text-lg font-semibold">지하철로 오시는 길</h3>
            <p>부산 도시철도 2호선 동백역 하차 후 도보 약 15분</p>
            <p className="mt-2">
              노포역 → 1호선 → 서면역에서 2호선 환승 → 동백역 → 한화리조트
              해운대
            </p>
          </div>
        )}
        {tab === "train" && <TrainPanel />}
        {tab === "air" && <AirPanel />}
        {tab === "etc" && <BusPanel />}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <ExternalLink href={officialUrl}>
          한화리조트 해운대 공식 오시는 길
        </ExternalLink>
      </div>
    </>
  );
  return embedded ? (
    <div className={clsx("min-w-0", className)}>{content}</div>
  ) : (
    <section
      className={clsx(
        "min-w-0 rounded-2xl border bg-white p-5 shadow-sm",
        className,
      )}
    >
      {content}
    </section>
  );
}

function Parking() {
  return (
    <section className="rounded-lg border bg-gray-50 p-4 text-sm leading-relaxed text-gray-800 md:text-base">
      <h3 className="mb-2 text-lg font-semibold">주차장 이용안내</h3>
      <p>
        주차장 내 혼잡방지와 도시교통정비지역 교통량 감소(도시교통정비 촉진법)를
        위해 주차장 유료화를 실시합니다.
      </p>
      <p className="my-3 font-semibold">
        [요금] 최초 1시간 6,000원 ｜ 추가 30분 3,000원 ｜ 1일 주차 40,000원
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          투숙객은 프런트에서 차량등록 하시기 바라며, 전체 차량번호를 숙지하여
          주시기 바랍니다. (예: 01가 1234)
        </li>
        <li>
          식음 및 테마업장 이용고객은 해당 카운터에 문의해 주시기 바랍니다.
        </li>
      </ul>
    </section>
  );
}

function GuideTable({
  title,
  headers,
  rows,
  wide = false,
}: {
  title: string;
  headers: string[];
  rows: ReactNode[][];
  wide?: boolean;
}) {
  return (
    <section className="min-w-0">
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <div
        className="max-w-full overflow-x-auto rounded-lg border"
        tabIndex={0}
        role="region"
        aria-label={title}
      >
        <table
          className={clsx(
            "w-full text-left text-sm leading-relaxed text-gray-800",
            wide ? "min-w-[760px]" : "min-w-[600px]",
          )}
        >
          <caption className="sr-only">{title}</caption>
          <thead className="bg-blue-50 text-blue-900">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="whitespace-nowrap border-b px-4 py-3 font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b last:border-b-0 even:bg-gray-50"
              >
                {row.map((cell, columnIndex) => (
                  <td
                    key={columnIndex}
                    className={clsx(
                      "px-4 py-3 align-top",
                      wide && columnIndex === 1
                        ? "min-w-[400px]"
                        : "whitespace-nowrap",
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function BusPanel() {
  const headers = ["출발지", "첫차", "막차", "배차간격", "소요시간", "비고"];
  return (
    <>
      <GuideTable
        title="고속버스"
        headers={headers}
        rows={[
          ["강남 → 부산", "06:00", "02:00", "15분", "5시간 20분", "—"],
          [
            "부산 → 강남",
            "06:00",
            "24:00",
            "15분",
            "5시간 20분",
            "터미널 지하철 이용(노포동역) → 서면환승 → 동백역하차(도보 15분 소요)",
          ],
        ]}
      />
      <GuideTable
        title="시외버스"
        headers={headers}
        rows={[
          [
            "동서울 → 해운대",
            "09:20",
            "24:00",
            "2시간 20분",
            "5시간 20분",
            "—",
          ],
          [
            "해운대 → 동서울",
            "07:30",
            "23:10",
            "2시간 20분",
            "5시간 20분",
            "—",
          ],
        ]}
      />
      <GuideTable
        title="시내버스"
        headers={headers}
        rows={[
          ["부산역 → 해운대", "06:00", "24:10", "30분", "40분", "—"],
          [
            "해운대 → 부산역",
            "—",
            "—",
            "—",
            "—",
            <>
              부산역 광장 정면 1003번 좌석버스 이용
              <br />
              (대우마리나아파트 하차)
            </>,
          ],
        ]}
      />
      <p className="text-sm leading-relaxed text-gray-700">
        리조트로 오실 때는 부산역 광장 앞 1003번 좌석버스를 이용해
        대우마리나아파트에서 하차한 뒤 도보로 이동해 주세요.
      </p>
      <GroundContacts />
    </>
  );
}

function TrainPanel() {
  return (
    <>
      <GuideTable
        title="철도"
        headers={[
          "구분",
          "정보",
          "서울역 → 부산역",
          "서울역 → 해운대역",
          "부산역 → 서울역",
          "해운대역 → 부산역",
        ]}
        rows={[
          ["KTX", "첫차", "05:30", "—", "05:05", "—"],
          ["KTX", "막차", "22:00", "—", "21:30", "—"],
          ["KTX", "소요시간", "2시간 40분", "—", "2시간 40분", "—"],
          ["새마을", "첫차", "07:20", "07:20", "04:45", "16:05"],
          ["새마을", "막차", "23:00", "—", "23:00", "—"],
          ["새마을", "소요시간", "4시간 30분", "—", "4시간 30분", "—"],
          ["무궁화", "첫차", "06:20", "11:50", "05:30", "11:50"],
          ["무궁화", "막차", "22:20", "22:40", "22:25", "20:18"],
          ["무궁화", "소요시간", "6시간", "6시간", "6시간", "—"],
        ]}
      />
      <p className="rounded-lg border bg-gray-50 p-4 text-sm leading-relaxed md:text-base">
        부산역 광장 앞 1003번 좌석버스 → 대우마리나아파트 하차 → 한화리조트
        해운대까지 도보 이동
      </p>
      <GroundContacts />
    </>
  );
}

function GroundContacts() {
  return (
    <GuideTable
      title="문의 및 예약확인"
      headers={["기관", "전화", "홈페이지"]}
      rows={[
        [
          "한국철도공사",
          "1544-7788",
          <ExternalLink
            key="korail"
            href="https://info.korail.com/mbs/www/index.jsp"
          >
            홈페이지
          </ExternalLink>,
        ],
        ["서울역", "02-392-7788", "—"],
        ["강남고속터미널", "02-535-4151", "—"],
        [
          "동서울 종합터미널",
          "02-446-8000",
          <ExternalLink key="ti21" href="https://www.ti21.co.kr/">
            홈페이지
          </ExternalLink>,
        ],
        ["해운대 시외버스 터미널", "051-743-0086", "—"],
        [
          "부산고속버스 터미널",
          "051-508-9955",
          <ExternalLink key="bxt" href="https://www.bxt.co.kr/">
            홈페이지
          </ExternalLink>,
        ],
      ]}
    />
  );
}

function AirPanel() {
  return (
    <>
      <GuideTable
        title="항공"
        headers={["이용편", "노선", "첫차", "막차"]}
        rows={[
          ["대한항공", "김포 → 부산", "07:00", "20:20"],
          ["아시아나항공", "김포 → 부산", "07:50", "20:30"],
        ]}
      />
      <GuideTable
        title="공항 리무진 버스"
        headers={["구분", "안내"]}
        rows={[
          [
            <>
              출발 시각
              <br />
              (한화리조트 → 김해공항)
            </>,
            <>
              05:24 / 06:34 / 07:34 / 08:34 / 09:34 / 10:34 / 11:34 / 12:34
              <br />
              13:34 / 14:34 / 15:34 / 16:34 / 17:34 / 18:34 / 19:34
            </>,
          ],
          [
            "노선 안내",
            <>
              김해공항 → 더비치푸르지오써밋(남천동) → 신세계센텀시티 → 벡스코 →
              요트경기장
              <br />
              파크하얏트부산 → 한화리조트 해운대 → 동백섬입구 →
              해운대해수욕장입구
              <br />
              해운대온천사거리 → 장산역 → 아난티코브 → 반얀트리해운대부산
            </>,
          ],
          [
            "승차권 예매",
            <>
              ‘버스타고’ 앱 또는 홈페이지에서 온라인 예매
              <br />
              <ExternalLink href="https://www.bustago.or.kr/">
                버스타고 홈페이지
              </ExternalLink>
            </>,
          ],
          [
            "승차권 가격",
            <>
              일반 9,500원 / 청소년 7,600원 / 어린이 4,800원
              <br />※ 현금 지불 불가능
            </>,
          ],
        ]}
      />
      <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700">
        <li>
          버스운행 시각 및 운임은 버스 운영사의 사정에 의해 예고없이 변경될 수
          있습니다.
        </li>
        <li>
          항공권 예매 및 공항 이용 전 반드시 버스 운영사에 확인하시기 바랍니다.
        </li>
        <li>
          버스 운영사: 경남고속뉴부산관광{" "}
          <a className="underline underline-offset-2" href="tel:07046202727">
            070-4620-2727
          </a>
        </li>
      </ul>
      <GuideTable
        title="문의 및 예약확인"
        headers={["기관", "전화", "홈페이지"]}
        rows={[
          [
            "대한항공",
            "1588-2001",
            <ExternalLink key="korean" href="https://kr.koreanair.com/">
              홈페이지
            </ExternalLink>,
          ],
          [
            "아시아나항공",
            "1588-8000",
            <ExternalLink key="asiana" href="https://flyasiana.com/main.asp">
              홈페이지
            </ExternalLink>,
          ],
          ["공항리무진버스", "051-927-7747", "—"],
          ["태영공항리무진", "070-7606-4490", "—"],
        ]}
      />
    </>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
    >
      {children}
    </a>
  );
}
