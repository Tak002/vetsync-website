import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/logo-192.png" alt="VetSync" width={28} height={28} />
            <div>
              <span className="font-bold text-gray-900">VetSync</span>
              <p className="text-sm text-gray-500">{t("description")}</p>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">{t("links.terms")}</a>
            <a href="#" className="hover:text-gray-700">{t("links.privacy")}</a>
            <a href="mailto:vetu12get@gmail.com" className="hover:text-gray-700">{t("links.contact")}</a>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">{t("copyright")}</p>
      </div>
    </footer>
  );
}
