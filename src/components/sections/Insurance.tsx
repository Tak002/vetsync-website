"use client";

import { useTranslations } from "next-intl";
import { QrCode, BookOpen, Tags } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const icons = [QrCode, BookOpen, Tags];

export default function Insurance() {
  const t = useTranslations("insurance");

  return (
    <SectionWrapper id="insurance" bg="gray">
      <div className="text-center">
        <Badge>{t("badge")}</Badge>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 whitespace-pre-line md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-3 text-lg text-gray-500">{t("subtitle")}</p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {icons.map((Icon, i) => (
          <div key={i} className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
              <Icon size={28} />
            </div>
            <h3 className="mt-5 text-lg font-bold text-gray-900">
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
