const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      </svg>
    ),
    title: "실시간 입원 차트",
    description:
      "시간대별 바이탈, 투약, 수액, 검사 기록을 한눈에. 여러 스태프가 동시에 기록하고 확인할 수 있습니다.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
    title: "스마트 업무 관리",
    description:
      "투약, 처치, 모니터링 등 입원 환자 업무를 자동 생성. 지연/현재/예정/완료 상태로 한눈에 파악합니다.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 12 2 2 4-4" />
        <path d="M12 3c1.816 1.857 2.855 4.352 2.93 7a9.957 9.957 0 0 1-2.93 7 9.957 9.957 0 0 1-2.93-7c.075-2.648 1.114-5.143 2.93-7Z" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "약물 용량 계산기",
    description:
      "체중 입력만으로 자동 용량 계산. 세팔로틴, 세레니아 등 자주 쓰는 약물을 등록하고 빠르게 계산합니다.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "모바일 빠른입력",
    description:
      "케이지 앞에서 바로 바이탈 측정 & 기록. 탭으로 심박수 측정, 호흡수 카운트 등 현장 맞춤 UI를 제공합니다.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "환자 & 보호자 관리",
    description:
      "종/품종, 보호자 정보를 체계적으로 관리. 차트 검색으로 과거 진료 이력을 빠르게 조회합니다.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "원내 게시판",
    description:
      "당직 변경, 약품 재고, 교육 일정 등 원내 소통을 한 곳에서. 중요 공지를 놓치지 않습니다.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            입원 관리에 필요한 모든 것
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            수의사와 테크니션이 함께 만든 실무 중심 기능들로,
            <br className="hidden sm:block" />
            입원 환자 관리 워크플로우를 혁신합니다.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border/60 bg-white p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="inline-flex rounded-xl bg-primary-50 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
