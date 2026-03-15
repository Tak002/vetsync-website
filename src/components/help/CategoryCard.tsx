"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  Rocket,
  ClipboardList,
  ListChecks,
  Calculator,
  PawPrint,
  Settings,
  Smartphone,
  MessageSquare,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Rocket,
  ClipboardList,
  ListChecks,
  Calculator,
  PawPrint,
  Settings,
  Smartphone,
  MessageSquare,
};

const colorMap: Record<string, { bg: string; icon: string }> = {
  "getting-started": { bg: "bg-blue-50", icon: "text-blue-600" },
  chart: { bg: "bg-emerald-50", icon: "text-emerald-600" },
  tasks: { bg: "bg-amber-50", icon: "text-amber-600" },
  calculator: { bg: "bg-purple-50", icon: "text-purple-600" },
  patient: { bg: "bg-rose-50", icon: "text-rose-600" },
  settings: { bg: "bg-gray-100", icon: "text-gray-600" },
  mobile: { bg: "bg-cyan-50", icon: "text-cyan-600" },
  board: { bg: "bg-indigo-50", icon: "text-indigo-600" },
};

interface CategoryCardProps {
  id: string;
  icon: string;
  name: string;
  description: string;
  guideCount: number;
  guidesCountLabel: string;
  index: number;
}

export default function CategoryCard({
  id,
  icon,
  name,
  description,
  guideCount,
  guidesCountLabel,
  index,
}: CategoryCardProps) {
  const locale = useLocale();
  const IconComponent = iconMap[icon];
  const colors = colorMap[id] || { bg: "bg-gray-50", icon: "text-gray-600" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={`/${locale}/help/${id}`}
        className="group block rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-gray-200 hover:shadow-md"
      >
        <div
          className={`mb-4 inline-flex rounded-xl ${colors.bg} p-3`}
        >
          {IconComponent && (
            <IconComponent size={24} className={colors.icon} />
          )}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600">
          {name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-500">
          {description}
        </p>
        <p className="mt-3 text-xs font-medium text-gray-400">
          {guidesCountLabel}
        </p>
      </Link>
    </motion.div>
  );
}
