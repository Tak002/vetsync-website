import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllCategories, getCategory } from "@/lib/help";
import { locales } from "@/i18n/config";
import GuideCard from "@/components/help/GuideCard";
import { ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  const categories = getAllCategories();
  return locales.flatMap((locale) =>
    categories.map((cat) => ({ locale, category: cat.id }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category: categoryId } = await params;
  const t = await getTranslations({ locale, namespace: "help" });
  const category = getCategory(categoryId);
  if (!category) return {};

  return {
    title: `${t(`categoryNames.${categoryId}`)} - ${t("title")}`,
    description: t(`categoryDescriptions.${categoryId}`),
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category: categoryId } = await params;
  const t = await getTranslations({ locale, namespace: "help" });
  const category = getCategory(categoryId);

  if (!category) notFound();

  return (
    <div className="px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-1.5 text-sm text-gray-500">
          <Link
            href={`/${locale}/help`}
            className="hover:text-primary-600"
          >
            {t("backToHelp")}
          </Link>
          <ChevronRight size={14} />
          <span className="font-medium text-gray-900">
            {t(`categoryNames.${categoryId}`)}
          </span>
        </nav>

        {/* Header */}
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
          {t(`categoryNames.${categoryId}`)}
        </h1>
        <p className="mt-2 text-gray-600">
          {t(`categoryDescriptions.${categoryId}`)}
        </p>

        {/* Guide List */}
        <div className="mt-8 space-y-3">
          {category.guides.map((guide) => (
            <GuideCard
              key={guide.slug}
              category={categoryId}
              slug={guide.slug}
              title={guide.title}
              description={guide.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
