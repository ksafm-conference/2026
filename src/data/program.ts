export type Speaker = {
  name: string;
  title?: string; // 직함
  affiliation?: string; // 소속
  presentation_title: string; //발표제목
  email?: string;
  photo?: string;
  field?: string;
  fields?: string[];
};

// 👉 이미지는 /public/speakers 폴더에 넣고, photo 경로에 파일명을 지정하세요.
export const SPEAKERS: Speaker[] = [
  {
    name: "이양원",
    title: "교수",
    affiliation: "(국립부경대학교 위성정보융합공학전공)",
    presentation_title: " AI 원격탐사 기반 농림 모니터링",
    // email: 'hong@af.ac.kr',
    // photo: "/speakers/pack.jpg",
    // field: "농업분야", // 단일 분야
  },
  {
    name: "임영일",
    title: "과장",
    affiliation: "(국가데이터처 사회통계국 농어업통계과)",
    presentation_title: "원탐,AI를 활용한 농업통계 작성 현황과 향후 계획",
    // email: 'hong@af.ac.kr',
    // photo: "/speakers/kim.jpg",
    // field: "산림분야", // 단일 분야
  },
  {
    name: "박고은",
    title: "박사",
    affiliation: "(국립산림과학원 산림생태연구과)",
    presentation_title: "",
    // photo: "/speakers/seo.jpg",
    // fields: ["농업분야", "기상분야"],
  },
];
