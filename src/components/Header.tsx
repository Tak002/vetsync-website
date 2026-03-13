"use client";

import { useState } from "react";

const navLinks = [
  { href: "#features", label: "주요 기능" },
  { href: "#screenshots", label: "스크린샷" },
  { href: "#mobile", label: "모바일" },
  { href: "#contact", label: "문의하기" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-lg font-bold text-primary">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
            <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
            <path d="M8 14v.5" /><path d="M16 14v.5" />
            <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
            <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" />
          </svg>
          Vet-Sync
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            도입 문의
          </a>
        </nav>

        <button
          className="flex items-center justify-center rounded-lg p-2 text-muted md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="메뉴 열기"
        >
          {isOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-border bg-white px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setIsOpen(false)}
          >
            도입 문의
          </a>
        </nav>
      )}
    </header>
  );
}
