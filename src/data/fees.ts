export const registrationFees = [
  {
    group: "필수",
    type: "참가 등록비",
    amount: "KRW 150,000",
    tone: "required",
  },
  {
    group: "선택",
    type: "초록 제출 (1편)",
    amount: "KRW 20,000",
    tone: "optional",
  },
  {
    group: "선택",
    type: "초록 제출 (2편)",
    amount: "KRW 40,000",
    tone: "optional",
  },
  {
    group: "선택",
    type: "초록 제출 (3편 이상)",
    amount: "KRW 60,000",
    tone: "optional",
  },
] as const;

export const registrationFeeNotes = [
  "초록을 제출하지 않고 학술대회 참가만 할 경우, 참가등록비 150,000원 결제",
  "학술대회 참가 및 초록 1편 제출시, 참가등록비 150,000 + 20,000 = 170,000원 결제",
  "학술대회 참가 및 초록 2편 제출시, 참가등록비 150,000 + 40,000 = 190,000원 결제",
  "학술대회 참가 및 초록 3편 이상 제출시, 참가등록비 150,000 + 60,000 = 210,000원 결제",
] as const;

export const paymentMethods = [
  "학술대회 참가비에는 초록제출비가 포함되어 있지 않습니다.",
  "온라인 결제는 곧 추가될 예정입니다.",
  "학술대회 당일 오프라인 현장결제 가능합니다.",
];

export const refundPolicy = {
  contactEmail: "ksafm1@gmail.com",
  policies: [
    "등록 취소 및 환불은 이메일로 문의주시기 바랍니다.",
    "환불은 행사 종료 후에 처리됩니다.",
    "등록 취소 및 환불기간은 아래의 내용 참고 부탁드립니다.",
  ],
  dates: [
    { label: "2026년 6월 22일 이전", content: "전액 환불" },
    { label: "2026년 6월 22일 이후", content: "문의 요망" },
  ],
};
