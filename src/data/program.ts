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
    name: "박태원",
    title: "교수",
    affiliation: "전남대학교",
    presentation_title:
      "한국 기후위기 평가보고서 2025: 한반도 기후위기의 과학적 근거",
    // email: 'hong@af.ac.kr',
    photo: "/speakers/pack.jpg",
    // field: "농업분야", // 단일 분야
  },
  {
    name: "김광수",
    title: "교수",
    affiliation: "서울대학교",
    presentation_title:
      "한국 기후위기 평가보고서 2025: 농업부문의 영향 분석과 적응 전략",
    // email: 'hong@af.ac.kr',
    photo: "/speakers/kim.jpg",
    // field: "산림분야", // 단일 분야
  },
  {
    name: "서창완",
    title: "기후생태연구실장",
    affiliation: "국립생태원",
    presentation_title: "기후위기의 생태계 영향 및 대응을 위한 적응 방안",
    photo: "/speakers/seo.jpg",
    // fields: ["농업분야", "기상분야"],
  },
];
