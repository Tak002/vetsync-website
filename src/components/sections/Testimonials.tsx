"use client";

import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const testimonialCount = 3;

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <SectionWrapper id="testimonials" bg="gray">
      <div className="text-center">
        <Badge>{t("badge")}</Badge>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          {t("title")}
        </h2>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {Array.from({ length: testimonialCount }, (_, i) => (
          <div
            key={i}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all hover:shadow-lg"
          >
            <Quote size={28} className="text-primary-200" />
            <p className="mt-4 flex-1 leading-relaxed text-gray-600">
              &ldquo;{t(`items.${i}.quote`)}&rdquo;
            </p>
            <div className="mt-6 border-t border-gray-100 pt-4">
              <p className="font-bold text-gray-900">{t(`items.${i}.name`)}</p>
              <p className="text-sm text-gray-500">{t(`items.${i}.role`)}</p>
              <span className="mt-2 inline-block rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">
                {t(`items.${i}.metric`)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
