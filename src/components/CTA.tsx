export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary-light/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          더 나은 입원 관리를 시작하세요
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Vet-Sync는 현재 얼리 액세스 중입니다.
          <br />
          무료로 체험하고, 우리 병원에 맞는지 직접 확인해보세요.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:contact@vetsync.com"
            className="w-full rounded-full bg-white px-8 py-3.5 text-base font-semibold text-primary shadow-lg transition-all hover:bg-primary-50 hover:shadow-xl sm:w-auto"
          >
            도입 문의하기
          </a>
          <a
            href="mailto:contact@vetsync.com"
            className="w-full rounded-full border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
          >
            데모 요청하기
          </a>
        </div>

        <p className="mt-6 text-sm text-white/60">
          contact@vetsync.com
        </p>
      </div>
    </section>
  );
}
