import Image from "next/image";

export default function MobileSection() {
  return (
    <section id="mobile" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">
              Mobile
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              케이지 앞에서 바로 기록
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              모바일 최적화 UI로 라운딩 중에도 빠르게 바이탈을 입력하세요.
              탭으로 심박수를 측정하고, 체온과 호흡수를 즉시 기록할 수 있습니다.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  title: "빠른입력 모드",
                  desc: "체온, 심박수(BPM 탭), 호흡수, 혈압을 한 화면에서 빠르게 입력",
                },
                {
                  title: "모바일 차트 뷰",
                  desc: "입원 차트를 모바일에서도 동일한 시간대별 레이아웃으로 확인",
                },
                {
                  title: "PWA 지원",
                  desc: "앱 설치 없이 홈 화면에 추가하여 네이티브 앱처럼 사용",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile screenshots */}
          <div className="flex flex-1 items-end justify-center gap-6">
            <div className="animate-float w-48 overflow-hidden rounded-3xl border-2 border-border/60 bg-white shadow-2xl sm:w-56">
              <Image
                src="/screenshots/quick-input.png"
                alt="모바일 빠른입력 화면"
                width={390}
                height={844}
                className="w-full"
              />
            </div>
            <div className="animate-float animate-delay-300 w-48 overflow-hidden rounded-3xl border-2 border-border/60 bg-white shadow-2xl sm:w-56" style={{ marginBottom: "2rem" }}>
              <Image
                src="/screenshots/chart-detail-mobile.png"
                alt="모바일 차트 상세 화면"
                width={390}
                height={844}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
