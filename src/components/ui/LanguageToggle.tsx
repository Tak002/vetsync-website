"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "ko" ? "en" : "ko";
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.push(segments.join("/"));
  };

  return (
    <button
      onClick={toggleLocale}
      className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:border-primary-300 hover:text-primary-600"
    >
      {locale === "ko" ? "EN" : "KO"}
    </button>
  );
}
