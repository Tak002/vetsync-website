"use client";

import { useTranslations } from "next-intl";
import { UserPlus, ClipboardPlus, Activity } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const icons = [UserPlus, ClipboardPlus, Activity];

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <SectionWrapper id="how-it-works">
      <div className="text-center">
        <Badge>{t("badge")}</Badge>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          {t("title")}
        </h2>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {icons.map((Icon, i) => (
          <div key={i} className="relative text-center">
            {/* Step number */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white">
              {i + 1}
            </div>
            {/* Connector line */}
            {i < 2 && (
              <div className="absolute top-7 left-[calc(50%+28px)] hidden h-px w-[calc(100%-56px)] bg-primary-200 md:block" />
            )}
            <div className="mt-5">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {t(`steps.${i}.title`)}
              </h3>
              <p className="mt-2 leading-relaxed text-gray-500">
                {t(`steps.${i}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
