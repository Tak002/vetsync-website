import { getTranslations } from "next-intl/server";
import { getAllCategories, getSearchIndex, POPULAR_GUIDES, getAllGuides } from "@/lib/help";
import HelpSearch from "@/components/help/HelpSearch";
import CategoryCard from "@/components/help/CategoryCard";
import GuideCard from "@/components/help/GuideCard";
import { Mail } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "help" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function HelpPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "help" });
  const categories = getAllCategories();
  const searchIndex = getSearchIndex();
  const allGuides = getAllGuides();

  const categoryNames: Record<string, string> = {};
  for (const cat of categories) {
    categoryNames[cat.id] = t(`categoryNames.${cat.id}`);
  }

  // Resolve popular guides
  const popularGuides = POPULAR_GUIDES.map((pg) => {
    const guide = allGuides.find(
      (g) => g.category === pg.category && g.slug === pg.slug
    );
    return guide
      ? { ...guide }
      : { category: pg.category, slug: pg.slug, title: "", description: "" };
  }).filter((g) => g.title);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white px-6 pb-16 pt-20 md:px-8 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{t("subtitle")}</p>
          <div className="mt-8">
            <HelpSearch items={searchIndex} categoryNames={categoryNames} />
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            {t("popularGuides")}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {popularGuides.map((guide) => (
              <GuideCard
                key={`${guide.category}/${guide.slug}`}
                category={guide.category}
                slug={guide.slug}
                title={guide.title}
                description={guide.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            {t("categories")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((cat, index) => (
              <CategoryCard
                key={cat.id}
                id={cat.id}
                icon={cat.icon}
                name={t(`categoryNames.${cat.id}`)}
                description={t(`categoryDescriptions.${cat.id}`)}
                guideCount={cat.guideCount}
                guidesCountLabel={t("guidesCount", { count: cat.guideCount })}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900">{t("contact")}</h2>
          <p className="mt-2 text-gray-600">{t("contactSub")}</p>
          <a
            href="mailto:vetu12get@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            <Mail size={16} />
            {t("contactButton")}
          </a>
        </div>
      </section>
    </div>
  );
}
