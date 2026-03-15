"use client";

import { useTranslations } from "next-intl";
import { Cloud, ShieldCheck, Calculator, Zap } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const icons = [Cloud, ShieldCheck, Calculator, Zap];
const colors = [
  { bg: "bg-blue-50", text: "text-blue-600", hover: "hover:border-blue-200" },
  { bg: "bg-emerald-50", text: "text-emerald-600", hover: "hover:border-emerald-200" },
  { bg: "bg-purple-50", text: "text-purple-600", hover: "hover:border-purple-200" },
  { bg: "bg-amber-50", text: "text-amber-600", hover: "hover:border-amber-200" },
];

export default function Solution() {
  const t = useTranslations("solution");

  return (
    <SectionWrapper id="solution">
      <div className="text-center">
        <Badge>{t("badge")}</Badge>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 whitespace-pre-line md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-3 text-lg text-gray-500">{t("subtitle")}</p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {icons.map((Icon, i) => (
          <div
            key={i}
            className={`rounded-2xl border border-gray-200 p-7 transition-all hover:shadow-lg ${colors[i].hover}`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors[i].bg} ${colors[i].text}`}
            >
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
