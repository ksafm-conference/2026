// FILE: src/data/notices.ts
export type Notice = {
  id?: string;
  title: string;
  content?: string;
  contentHtml?: string;
  date?: string; // "YYYY-MM-DD"
  pinned?: boolean; // 상세 페이지 상단 고정
  showOnHome?: boolean; // 홈에 노출
  href?: string; // 외부/내부 링크
  external?: boolean;
  pinHome?: boolean; // ✅ 홈 목록 상단 고정
  images?: string[];
  attachments?: {
    label: string;
    href: string;
    type?: string;
    size?: string;
    external?: boolean;
    openInNewTab?: boolean;
    downloadable?: boolean;
  }[];
};

const RECENT_DAYS = 3;

/** 한 곳에서 공지 관리 */
export const NOTICES: Notice[] = [
  {
    title: "2026 하계학술대회 사이트 오픈 및 초록 제출/등록 안내",
    href: "/submission",
    content: "초록 제출/등록 방법 안내 페이지로 이동합니다.",
    date: "2026-05-08",
    showOnHome: true,
    // pinHome: true,
  },
  {
    href: "/submission/guideline",
    title: "발표 진행 안내 (발표 시간, 포스터 부착 위치 등)",
    content: "발표 시간과 포스터 부착 위치 등 진행 안내를 확인하세요.",
    date: "2026-06-16",
    showOnHome: true,
    // pinHome: true,
  },
  {
    title: "2026년 하계학술대회 초록집",
    href: "http://ksafm.org/community/data/read.php?no=46",
    external: true,
    content: "한국농림기상학회 자료실의 초록집 페이지로 이동합니다.",
    date: "2026-06-20",
    showOnHome: true,
    pinHome: true,
  },
  // {
  //   id: "notice-1",
  //   title: "2025년 동계학술대회 숙박 예약 안내",
  //   date: "2025-11-13",
  //   pinned: false,
  //   showOnHome: true,
  //   contentHtml: `
  //     <p>한국농림기상학회 회원님께</p>
  //     <p>동계학술대회 기간의 <b>숙박 예약</b>에 대해 알려드립니다.</p>
  //     <p>이번 동계학술대회가 개최되는     <a
  //             href="https://www.yeosuvenezia.com/"
  //             rel="noopener noreferrer"
  //             style="text-decoration : underline"
  //             target="_blank"
  //           >
  //           <b>여수베네치아호텔앤스위트</b>
  //           </a>에서 아래와 같이 숙박이 가능하오니, 여정에 참고하시기 바랍니다.</p>
  //     <ul style="margin:.5rem 0 0 1rem;list-style:disc">
  //       <li>숙박 장소 : 여수 베네치아호텔&스위트</li>
  //       <li>객실 예약은 예약신청서 작성 후, 호텔 메일(<span style="color:#1976d2">info@yeosuvenezia.com</span>)로 송부 <br>(호텔에서 직접 예약 확정 진행)
  //       </li>
  //     </ul>
  //      <p style="margin:.5rem 0 0 ">
  //      <img src="/notice/room.png" alt="숙박 예약 안내" style="display:block;margin:.25rem auto 0;max-width:100%;height:auto;border:1px solid #eee;border-radius:8px" />
  //     </p>
  //   `,
  //   attachments: [
  //     {
  //       label: "여수베네치아_객실예약신청서(25년 한국농림기상학회).docx",
  //       href: "/notice/여수베네치아_객실예약신청서(25년 한국농림기상학회).docx",
  //       type: "docx",
  //       size: "61.88 KB",
  //       downloadable: true, // 브라우저에서 곧바로 다운로드
  //     },
  //   ],
  // },
  // {
  //   id: "notice-2'",
  //   title: "2025년 동계학술대회 세부일정표 알림",
  //   date: "2025-12-03",
  //   pinned: true,
  //   showOnHome: true,
  //   contentHtml: `
  //     <p>한국농림기상학회 회원님께</p>
  //     <p>2025년 동계학술대회 세부일정표를 첨부하오니, 여정에 참고하시기 바랍니다.</p>
  //     <p>첨부파일을 확인부탁드립니다.</p>
  //   `,
  //   attachments: [
  //     {
  //       label: "(ksafm)2025_동계학술대회_브러슈어.pdf",
  //       href: "/notice/(ksafm)2025_동계학술대회_브러슈어.pdf",
  //       type: ".pdf",
  //       size: "7.18 MB",
  //       downloadable: true, // 브라우저에서 곧바로 다운로드
  //     },
  //   ],
  // },
  {
    id: "notice-1",
    title: "2026년 하계학술대회 세부일정표 알림",
    date: "2026-06-17",
    pinned: true,
    showOnHome: true,
    pinHome: true,
    contentHtml: `
      <p>한국농림기상학회 회원님께</p>
      <p>2026년 하계학술대회 세부일정표를 첨부하오니, 참고하시기 바랍니다.</p>
      <p>첨부파일을 확인부탁드립니다.</p>
    `,
    attachments: [
      {
        label: "(ksafm)2026_하계학술대회_상세일정표.pdf",
        href: "/notice/(ksafm)2026_하계학술대회_상세일정표.pdf",
        type: ".pdf",
        size: "5.57 MB",
        downloadable: true, // 브라우저에서 곧바로 다운로드
      },
    ],
  },

  {
    id: "notice-2",
    title: "행사장 주차 안내",
    date: "2026-06-19",
    // pinned: true,
    showOnHome: true,
    // pinHome: true,
    contentHtml: `

    <br/>
    <p>안녕하세요, 학술대회 참석자 여러분께 안내드립니다.</p>
    <br/>

    <p>
      행사장 내 주차 공간이 매우 협소하며, 행사 주차권은 기본적으로 제공되지 않습니다.</p>
    <p>
      또한 행사장 주차비가 비교적 높게 책정되어 있어, 원활한 행사 참여를 위해
      대중교통 이용을 적극 권장드립니다.
    </p>

    <p>
      부득이 차량을 이용하셔야 하는 경우, 아래 인근 공영주차장을 참고해 주시기 바랍니다.
    </p>

    <br/>
    <br/>

    <h4>🚗 인근 공영주차장 안내 (aT센터 주변)</h4>
    <br/>
    <ul>
      <li>양재시민의숲 공영주차장 (도보 약 5분)</li>
      <li>동산마을구립 공영주차장 (도보 약 7분)</li>
      <li>언남문화체육센터 공영주차장 (도보 약 10분)</li>
      <li>구룡어린이공원 공영주차장 (도보 약 10분)</li>
      <li>양재근린공원 공영주차장 (도보 약 10분)</li>
    </ul>
    <br/>
    <br/>
    <h4>🚦 이용 안내</h4>
    <br/>
    <ul>
      <li>행사장 주차비는 10분당 약 700원 수준으로 비용 부담이 큽니다.</li>
      <li>장시간 주차 시에는 인근 공영주차장을 활용하는 것이 경제적입니다.</li>
      <li>일부 공영주차장은 전기차 충전구역 및 장애인 주차구역을 갖추고 있습니다.</li>
    </ul>

    <p>
      참석자 여러분의 편의를 위한 안내이오니 많은 협조 부탁드립니다.<br />
      <br/>
      감사합니다.
    </p>
          <br/>
    <img src="/notice/공영주차장.png" alt="인근공영주차장안내" style="display:block;margin:.25rem auto 0;max-width:80%;height:auto;border:1px solid #eee;border-radius:8px" />
  `,
    // attachments: [
    //   {
    //     label: "행사장_주차_안내.hwpx",
    //     href: "/notice/행사장_주차_안내.hwpx",
    //     type: ".hwpx",
    //     size: "36 KB",
    //     downloadable: true,
    //   },
    // ],
  },

  // {
  //   id: "notice-68",
  //   title: "발표 진행 안내",
  //   date: "2025-06-10",
  //   pinned: true,
  //   showOnHome: true,
  //   contentHtml: `
  //     <p><strong style="color:#d32f2f">구두 발표</strong> 슬라이드는 행사 전 이메일(<a href="mailto:ksafm2@gmail.com">ksafm2@gmail.com</a>)로 보내주세요.</p>
  //     <ul style="margin:.5rem 0 0 1rem;list-style:disc">
  //       <li>발표 시간: 12분 발표 + 3분 질의</li>
  //       <li>포스터 부착: <span style="color:#1976d2">B동 1층 로비</span></li>
  //     </ul>
  //     <p style="margin:.75rem 0 0">자세한 위치 안내는 아래 이미지를 참고하세요.</p>
  //     <p style="margin:.5rem 0 0">
  //       <img src="/program/schedule/program_image.jpg" alt="포스터 부착 위치" style="max-width:100%;height:auto;border:1px solid #eee;border-radius:8px" />
  //     </p>
  //   `,
  // },
];

/** 홈 공지 리스트 (pinHome > pinned > 최신순) + 표시용 플래그 전달 */
export function getHomeNotices(limit = 6) {
  const sorted = [...NOTICES]
    .filter((n) => n.showOnHome ?? true)
    .sort((a, b) => {
      if (!!b.pinHome !== !!a.pinHome)
        return Number(!!b.pinHome) - Number(!!a.pinHome);
      if (!!b.pinned !== !!a.pinned)
        return Number(!!b.pinned) - Number(!!a.pinned);
      const da = a.date ? new Date(a.date).getTime() : 0;
      const db = b.date ? new Date(b.date).getTime() : 0;
      return db - da;
    });

  return sorted.slice(0, limit).map((n) => ({
    title: n.title,
    href: buildNoticeHref(n),
    external: n.external ?? isExternal(n.href),
    /** ✅ 홈에서 아이콘 표시용 */
    pin: !!n.pinHome || !!n.pinned,
    /** ✅ 최근(NEW) 표시 */
    isNew: isRecent(n.date),
  }));
}

/** id에 'notice-'가 이미 있으면 그대로, 없으면 붙여서 앵커 id로 사용 */
export function anchorIdFor(n: Notice) {
  if (!n.id) return "";
  return n.id.startsWith("notice-") ? n.id : `notice-${n.id}`;
}
/** href 우선, 없으면 /about/notice#<앵커ID> */
export function buildNoticeHref(n: Notice): string {
  if (n.href) return n.href;
  if (n.id) return `/about/notice#${anchorIdFor(n)}`;
  return "#";
}

function isExternal(href?: string) {
  return !!href && /^https?:\/\//i.test(href);
}

function isRecent(dateStr?: string, days = RECENT_DAYS) {
  if (!dateStr) return false;
  const t = new Date(dateStr).getTime();
  if (Number.isNaN(t)) return false;
  return Date.now() - t <= days * 24 * 60 * 60 * 1000;
}
