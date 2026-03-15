"use client";

import { useTranslations } from "next-intl";
import { FileX, AlertTriangle, Calculator, FileWarning } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const icons = [FileX, AlertTriangle, Calculator, FileWarning];

export default function Problem() {
  const t = useTranslations("problem");

  return (
    <SectionWrapper id="problem" bg="gray">
      <div className="text-center">
        <Badge>{t("badge")}</Badge>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 whitespace-pre-line md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-3 text-lg text-gray-500">{t("subtitle")}</p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {icons.map((Icon, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all hover:border-red-200 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500 transition-colors group-hover:bg-red-100">
              <Icon size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900">
              {t(`items.${i}.title`)}
            </h3>
            <p className="mt-2 leading-relaxed text-gray-500">
              {t(`items.${i}.description`)}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
