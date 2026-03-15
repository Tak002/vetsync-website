"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LanguageToggle from "@/components/ui/LanguageToggle";

const navLinks = [
  { key: "problem", href: "#problem" },
  { key: "solution", href: "#solution" },
  { key: "features", href: "#insurance" },
  { key: "market", href: "#market" },
  { key: "contact", href: "#cta" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <Image src="/images/logo-192.png" alt="VetSync" width={32} height={32} />
          <span className="text-xl font-bold text-gray-900">VetSync</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
            >
              {t(link.key)}
            </a>
          ))}
          <Link
            href={`/${locale}/help`}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
          >
            {t("help")}
          </Link>
          <LanguageToggle />
          <a
            href="#cta"
            className="rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            {t("cta")}
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-600"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-gray-600"
            >
              {t(link.key)}
            </a>
          ))}
          <Link
            href={`/${locale}/help`}
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-sm font-medium text-gray-600"
          >
            {t("help")}
          </Link>
          <a
            href="#cta"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-full bg-primary-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            {t("cta")}
          </a>
        </div>
      )}
    </nav>
  );
}
