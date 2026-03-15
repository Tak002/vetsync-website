import fs from "fs";
import path from "path";

const HELP_DIR = path.join(process.cwd(), "docs/help");

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

const CATEGORY_META: Record<string, { order: number; icon: string }> = {
  "getting-started": { order: 1, icon: "Rocket" },
  chart: { order: 2, icon: "ClipboardList" },
  tasks: { order: 3, icon: "ListChecks" },
  calculator: { order: 4, icon: "Calculator" },
  patient: { order: 5, icon: "PawPrint" },
  settings: { order: 6, icon: "Settings" },
  mobile: { order: 7, icon: "Smartphone" },
  board: { order: 8, icon: "MessageSquare" },
};

export const POPULAR_GUIDES = [
  { category: "getting-started", slug: "first-chart" },
  { category: "mobile", slug: "quick-input" },
  { category: "calculator", slug: "drug-calculator" },
  { category: "mobile", slug: "pwa-install" },
];

function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1] : "Untitled";
}

function extractDescription(content: string): string {
  const lines = content.split("\n");
  let foundTitle = false;
  for (const line of lines) {
    if (line.startsWith("# ")) {
      foundTitle = true;
      continue;
    }
    if (foundTitle && line.trim() !== "" && !line.startsWith("---")) {
      return line.trim();
    }
  }
  return "";
}

function extractHeadings(
  content: string
): { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ id, text, level });
  }
  return headings;
}

function extractRelatedGuides(
  content: string,
  currentCategory: string
): { category: string; slug: string; title: string }[] {
  const linkRegex =
    /\[([^\]]+)\]\((?:\.\.\/([^/]+)\/([^)]+)\.md|\.\/([^)]+)\.md)\)/g;
  const guides: { category: string; slug: string; title: string }[] = [];
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const title = match[1];
    if (match[2] && match[3]) {
      guides.push({ category: match[2], slug: match[3], title });
    } else if (match[4]) {
      guides.push({ category: currentCategory, slug: match[4], title });
    }
  }
  return guides;
}

export function getAllCategories(): HelpCategory[] {
  const categories: HelpCategory[] = [];

  for (const [id, meta] of Object.entries(CATEGORY_META)) {
    const categoryDir = path.join(HELP_DIR, id);
    if (!fs.existsSync(categoryDir)) continue;

    const files = fs
      .readdirSync(categoryDir)
      .filter((f) => f.endsWith(".md"));
    const guides = files.map((file) => {
      const slug = file.replace(".md", "");
      const content = fs.readFileSync(path.join(categoryDir, file), "utf-8");
      return {
        slug,
        title: extractTitle(content),
        description: extractDescription(content),
      };
    });

    categories.push({
      id,
      order: meta.order,
      icon: meta.icon,
      guideCount: guides.length,
      guides,
    });
  }

  return categories.sort((a, b) => a.order - b.order);
}

export function getCategory(categoryId: string): HelpCategory | null {
  return getAllCategories().find((c) => c.id === categoryId) || null;
}

export function getGuide(
  categoryId: string,
  slug: string
): HelpGuide | null {
  const filePath = path.join(HELP_DIR, categoryId, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const content = fs.readFileSync(filePath, "utf-8");

  return {
    slug,
    category: categoryId,
    title: extractTitle(content),
    description: extractDescription(content),
    content,
    headings: extractHeadings(content),
    relatedGuides: extractRelatedGuides(content, categoryId),
  };
}

export function getAllGuides(): { category: string; slug: string; title: string; description: string }[] {
  const categories = getAllCategories();
  const guides: { category: string; slug: string; title: string; description: string }[] = [];

  for (const category of categories) {
    for (const guide of category.guides) {
      guides.push({
        category: category.id,
        slug: guide.slug,
        title: guide.title,
        description: guide.description,
      });
    }
  }

  return guides;
}

export function getSearchIndex() {
  const categories = getAllCategories();
  const index: {
    category: string;
    slug: string;
    title: string;
    description: string;
  }[] = [];

  for (const category of categories) {
    for (const guide of category.guides) {
      index.push({
        category: category.id,
        slug: guide.slug,
        title: guide.title,
        description: guide.description,
      });
    }
  }

  return index;
}
