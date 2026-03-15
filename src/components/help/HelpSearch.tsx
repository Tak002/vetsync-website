"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Search, X } from "lucide-react";
import Fuse from "fuse.js";
import Link from "next/link";

interface SearchItem {
  category: string;
  slug: string;
  title: string;
  description: string;
}

interface HelpSearchProps {
  items: SearchItem[];
  categoryNames: Record<string, string>;
}

export default function HelpSearch({ items, categoryNames }: HelpSearchProps) {
  const t = useTranslations("help");
  const locale = useLocale();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const fuse = useMemo(
    () =>
      new Fuse(items, {
        keys: [
          { name: "title", weight: 2 },
          { name: "description", weight: 1 },
        ],
        threshold: 0.4,
        includeScore: true,
      }),
    [items]
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).slice(0, 8);
  }, [fuse, query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showResults = isFocused && query.trim().length > 0;

  return (
    <div ref={wrapperRef} className="relative mx-auto w-full max-w-2xl">
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={t("searchPlaceholder")}
          className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-10 text-base text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {showResults && (
        <div className="absolute top-full z-50 mt-2 w-full rounded-xl border border-gray-200 bg-white py-2 shadow-lg">
          {results.length > 0 ? (
            results.map(({ item }) => (
              <Link
                key={`${item.category}/${item.slug}`}
                href={`/${locale}/help/${item.category}/${item.slug}`}
                onClick={() => {
                  setIsFocused(false);
                  setQuery("");
                }}
                className="block px-4 py-3 transition-colors hover:bg-gray-50"
              >
                <p className="text-sm font-medium text-gray-900">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs text-gray-500">
                  {categoryNames[item.category]}
                </p>
              </Link>
            ))
          ) : (
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-gray-500">{t("noResults")}</p>
              <p className="mt-1 text-xs text-gray-400">{t("noResultsSub")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
