"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function HelpNavbar() {
  const t = useTranslations("help");
  const locale = useLocale();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <div className="flex items-center gap-4">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image
              src="/images/logo-192.png"
              alt="VetSync"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold text-gray-900">VetSync</span>
          </Link>
          <span className="text-gray-300">/</span>
          <Link
            href={`/${locale}/help`}
            className="text-sm font-medium text-gray-600 hover:text-primary-600"
          >
            {t("backToHelp")}
          </Link>
        </div>
        <LanguageToggle />
      </div>
    </nav>
  );
}
