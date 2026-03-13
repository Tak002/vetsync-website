export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-lg font-bold text-primary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
              <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
              <path d="M8 14v.5" /><path d="M16 14v.5" />
              <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
              <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" />
            </svg>
            Vet-Sync
          </div>

          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#features" className="transition-colors hover:text-foreground">주요 기능</a>
            <a href="#screenshots" className="transition-colors hover:text-foreground">스크린샷</a>
            <a href="#mobile" className="transition-colors hover:text-foreground">모바일</a>
            <a href="#contact" className="transition-colors hover:text-foreground">문의하기</a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} Vet-Sync. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
