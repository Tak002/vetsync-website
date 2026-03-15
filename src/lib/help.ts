import { HELP_CATEGORIES, HELP_GUIDES } from "@/generated/help-data";

export interface HelpGuide {
  slug: string;
  category: string;
  title: string;
  description: string;
  content: string;
  headings: { id: string; text: string; level: number }[];
  relatedGuides: { category: string; slug: string; title: string }[];
}

export interface HelpCategoryGuide {
  slug: string;
  title: string;
  description: string;
}

export interface HelpCategory {
  id: string;
  order: number;
  icon: string;
  guideCount: number;
  guides: HelpCategoryGuide[];
}

export const POPULAR_GUIDES = [
  { category: "getting-started", slug: "first-chart" },
  { category: "mobile", slug: "quick-input" },
  { category: "calculator", slug: "drug-calculator" },
  { category: "mobile", slug: "pwa-install" },
];

export function getAllCategories(): HelpCategory[] {
  return HELP_CATEGORIES as unknown as HelpCategory[];
}

export function getCategory(categoryId: string): HelpCategory | null {
  return getAllCategories().find((c) => c.id === categoryId) || null;
}

export function getGuide(
  categoryId: string,
  slug: string
): HelpGuide | null {
  const guide = (HELP_GUIDES as unknown as HelpGuide[]).find(
    (g) => g.category === categoryId && g.slug === slug
  );
  return guide || null;
}

export function getAllGuides(): {
  category: string;
  slug: string;
  title: string;
  description: string;
}[] {
  return (HELP_GUIDES as unknown as HelpGuide[]).map((g) => ({
    category: g.category,
    slug: g.slug,
    title: g.title,
    description: g.description,
  }));
}

export function getSearchIndex() {
  return getAllGuides();
}
