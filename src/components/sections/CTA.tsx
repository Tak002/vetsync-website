"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Mail } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <SectionWrapper id="cta" bg="primary">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-primary-200">
          {t("subtitle")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-primary-700 shadow-lg transition-all hover:bg-primary-50"
          >
            {t("primary")}
            <ArrowRight size={18} />
          </a>
          <a
            href="mailto:contact@vetsync.co.kr"
            className="inline-flex items-center gap-2 rounded-full border border-primary-400 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-800"
          >
            <Mail size={18} />
            {t("secondary")}
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
