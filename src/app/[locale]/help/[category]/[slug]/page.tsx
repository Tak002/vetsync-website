import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllCategories, getGuide } from "@/lib/help";
import { locales } from "@/i18n/config";
import MarkdownRenderer from "@/components/help/MarkdownRenderer";
import TableOfContents from "@/components/help/TableOfContents";
import GuideCard from "@/components/help/GuideCard";
import { ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  const categories = getAllCategories();
  return locales.flatMap((locale) =>
    categories.flatMap((cat) =>
      cat.guides.map((guide) => ({
        locale,
        category: cat.id,
        slug: guide.slug,
      }))
    )
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}) {
  const { locale, category, slug } = await params;
  const t = await getTranslations({ locale, namespace: "help" });
  const guide = getGuide(category, slug);
  if (!guide) return {};

  return {
    title: `${guide.title} - ${t("title")}`,
    description: guide.description,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}) {
  const { locale, category, slug } = await params;
  const t = await getTranslations({ locale, namespace: "help" });
  const guide = getGuide(category, slug);

  if (!guide) notFound();

  return (
    <div className="px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-1.5 text-sm text-gray-500">
          <Link href={`/${locale}/help`} className="hover:text-primary-600">
            {t("backToHelp")}
          </Link>
          <ChevronRight size={14} />
          <Link
            href={`/${locale}/help/${category}`}
            className="hover:text-primary-600"
          >
            {t(`categoryNames.${category}`)}
          </Link>
          <ChevronRight size={14} />
          <span className="font-medium text-gray-900">{guide.title}</span>
        </nav>

        <div className="flex gap-12">
          {/* Main content */}
          <article className="min-w-0 flex-1">
            <MarkdownRenderer content={guide.content} category={category} />

            {/* Related Guides */}
            {guide.relatedGuides.length > 0 && (
              <div className="mt-12 border-t border-gray-200 pt-8">
                <h2 className="mb-4 text-lg font-bold text-gray-900">
                  {t("relatedGuides")}
                </h2>
                <div className="space-y-3">
                  {guide.relatedGuides.map((related) => (
                    <GuideCard
                      key={`${related.category}/${related.slug}`}
                      category={related.category}
                      slug={related.slug}
                      title={related.title}
                      description=""
                    />
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar TOC - desktop only */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <TableOfContents headings={guide.headings} />
          </aside>
        </div>
      </div>
    </div>
  );
}
