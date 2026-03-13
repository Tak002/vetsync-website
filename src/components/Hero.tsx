import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white pt-32 pb-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            동물병원 입원 환자 관리 시스템
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            진료에만 집중하세요.
            <br />
            <span className="text-primary">입원 관리</span>는 Vet-Sync가 합니다.
          </h1>

          <p className="animate-fade-in-up animate-delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            입원 차트 작성, 업무 배분, 약물 용량 계산까지.
            <br className="hidden sm:block" />
            복잡한 입원 환자 관리를 하나의 플랫폼에서 깔끔하게 해결합니다.
          </p>

          <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
            >
              무료 체험 시작하기
            </a>
            <a
              href="#features"
              className="rounded-full border border-border bg-white px-8 py-3.5 text-base font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-primary-50"
            >
              기능 둘러보기
            </a>
          </div>

          {/* Hero Screenshot */}
          <div className="animate-fade-in-up animate-delay-500 mt-16 w-full max-w-5xl">
            <div className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-2xl shadow-primary/10">
              <div className="flex items-center gap-2 border-b border-border/60 bg-surface px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-4 text-xs text-muted">app.vetsync.com</span>
              </div>
              <Image
                src="/screenshots/hero-dashboard.png"
                alt="Vet-Sync 대시보드 - 입원 환자 차트 목록"
                width={1920}
                height={1080}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
