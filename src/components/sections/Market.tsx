"use client";

import { useTranslations } from "next-intl";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const statCount = 3;

export default function Market() {
  const t = useTranslations("market");

  return (
    <SectionWrapper id="market">
      <div className="text-center">
        <Badge>{t("badge")}</Badge>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          {t("title")}
        </h2>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {Array.from({ length: statCount }, (_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-primary-50/30 p-8 text-center transition-all hover:shadow-lg"
          >
            <p className="text-4xl font-extrabold text-primary-600 md:text-5xl">
              {t(`stats.${i}.value`)}
            </p>
            <p className="mt-2 text-lg font-bold text-gray-900">
              {t(`stats.${i}.label`)}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              {t(`stats.${i}.description`)}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
