"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ChevronRight } from "lucide-react";

interface GuideCardProps {
  category: string;
  slug: string;
  title: string;
  description: string;
}

export default function GuideCard({
  category,
  slug,
  title,
  description,
}: GuideCardProps) {
  const locale = useLocale();

  return (
    <Link
      href={`/${locale}/help/${category}/${slug}`}
      className="group flex items-center justify-between rounded-xl border border-gray-100 bg-white px-5 py-4 transition-all hover:border-gray-200 hover:shadow-sm"
    >
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-medium text-gray-900 group-hover:text-primary-600">
          {title}
        </h3>
        <p className="mt-0.5 truncate text-sm text-gray-500">{description}</p>
      </div>
      <ChevronRight
        size={18}
        className="ml-3 shrink-0 text-gray-300 transition-colors group-hover:text-primary-500"
      />
    </Link>
  );
}
