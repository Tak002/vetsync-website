"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLocale } from "next-intl";
import Link from "next/link";
import type { Components } from "react-markdown";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState, type ReactNode, isValidElement } from "react";

interface MarkdownRendererProps {
  content: string;
  category: string;
}

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function MarkdownRenderer({
  content,
  category,
}: MarkdownRendererProps) {
  const locale = useLocale();

  // Preprocess: convert relative markdown links to help page links
  const processed = content
    .replace(
      /\[([^\]]+)\]\(\.\.\/([^/]+)\/([^)]+)\.md\)/g,
      `[$1](/${locale}/help/$2/$3)`
    )
    .replace(
      /\[([^\]]+)\]\(\.\/([^)]+)\.md\)/g,
      `[$1](/${locale}/help/${category}/$2)`
    );

  // Check if React children contain an img element
  function containsImage(children: ReactNode): boolean {
    if (Array.isArray(children)) {
      return children.some(
        (child) => isValidElement(child) && child.type === "img"
      );
    }
    return isValidElement(children) && children.type === "img";
  }

  const components: Components = {
    img: ({ src, alt }) => {
      const [errored, setErrored] = useState(false);
      const imgSrc = typeof src === "string" ? src : "";

      if (!imgSrc || errored) {
        return (
          <span className="my-4 flex items-center gap-3 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-5 py-8 text-sm text-gray-400">
            <ImageIcon size={20} className="shrink-0" />
            <span>{alt || "이미지를 불러올 수 없습니다"}</span>
          </span>
        );
      }

      return (
        <span className="my-4 block overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <Image
            src={imgSrc}
            alt={alt || ""}
            width={1440}
            height={900}
            className="h-auto w-full"
            onError={() => setErrored(true)}
          />
        </span>
      );
    },
    h1: ({ children }) => (
      <h1
        id={generateId(String(children))}
        className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl"
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        id={generateId(String(children))}
        className="mb-3 mt-10 text-xl font-bold text-gray-900 md:text-2xl"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={generateId(String(children))}
        className="mb-2 mt-8 text-lg font-semibold text-gray-900"
      >
        {children}
      </h3>
    ),
    p: ({ children }) => {
      // If paragraph contains an image, render as div to avoid invalid <p><img></p> nesting
      if (containsImage(children)) {
        return <div>{children}</div>;
      }
      // Handle screenshot placeholders
      const text = String(children);
      if (text.startsWith("[스크린샷:") || text.startsWith("[Screenshot:")) {
        const label = text.replace(/^\[|\]$/g, "");
        return (
          <div className="my-4 flex items-center gap-3 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-5 py-8 text-sm text-gray-400">
            <ImageIcon size={20} className="shrink-0" />
            <span>{label}</span>
          </div>
        );
      }
      return <p className="mb-4 leading-relaxed text-gray-700">{children}</p>;
    },
    a: ({ href, children }) => {
      if (href?.startsWith("/")) {
        return (
          <Link
            href={href}
            className="font-medium text-primary-600 underline decoration-primary-200 underline-offset-2 hover:decoration-primary-400"
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary-600 underline decoration-primary-200 underline-offset-2 hover:decoration-primary-400"
        >
          {children}
        </a>
      );
    },
    ul: ({ children }) => (
      <ul className="mb-4 list-disc space-y-1.5 pl-6 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 list-decimal space-y-1.5 pl-6 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => {
      const text = String(children);
      const isTip = text.includes("팁:") || text.includes("Tip:");
      const isWarning = text.includes("주의:") || text.includes("Warning:");
      const isNote = text.includes("참고:") || text.includes("Note:");

      if (isWarning) {
        return (
          <blockquote className="my-4 rounded-lg border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {children}
          </blockquote>
        );
      }
      if (isTip) {
        return (
          <blockquote className="my-4 rounded-lg border-l-4 border-primary-400 bg-primary-50 px-4 py-3 text-sm text-primary-900">
            {children}
          </blockquote>
        );
      }
      if (isNote) {
        return (
          <blockquote className="my-4 rounded-lg border-l-4 border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-700">
            {children}
          </blockquote>
        );
      }
      return (
        <blockquote className="my-4 rounded-lg border-l-4 border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-700">
          {children}
        </blockquote>
      );
    },
    table: ({ children }) => (
      <div className="my-4 overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-50 text-left text-gray-700">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2.5 font-semibold">{children}</th>
    ),
    td: ({ children }) => (
      <td className="border-t border-gray-100 px-4 py-2.5 text-gray-600">
        {children}
      </td>
    ),
    hr: () => <hr className="my-8 border-gray-200" />,
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">
        {children}
      </code>
    ),
  };

  return (
    <div className="help-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {processed}
      </ReactMarkdown>
    </div>
  );
}
