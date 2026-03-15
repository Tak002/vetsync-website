"use client";

import { useTranslations } from "next-intl";
import { X, Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const rowCount = 6;

export default function Comparison() {
  const t = useTranslations("comparison");

  return (
    <SectionWrapper id="comparison" bg="gray">
      <div className="text-center">
        <Badge>{t("badge")}</Badge>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          {t("title")}
        </h2>
      </div>

      <div className="mt-14 overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                {t("headers.feature")}
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-500">
                {t("headers.paper")}
              </th>
              <th className="px-6 py-4 text-sm font-semibold text-primary-600">
                {t("headers.vetsync")}
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rowCount }, (_, i) => (
              <tr
                key={i}
                className={`border-b border-gray-50 ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {t(`rows.${i}.feature`)}
                </td>
                <td className="px-6 py-4 text-gray-400">
                  <span className="flex items-center gap-2">
                    <X size={16} className="text-red-400" />
                    {t(`rows.${i}.paper`)}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700">
                  <span className="flex items-center gap-2">
                    <Check size={16} className="text-emerald-500" />
                    {t(`rows.${i}.vetsync`)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
}
