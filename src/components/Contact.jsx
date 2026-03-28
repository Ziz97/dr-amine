import React, { useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const introHtml = useMemo(() => {
    const template = t("contact.intro");
    const phone = t("contact.phone");
    if (typeof template !== "string") return "";
    return template.replace(/\{\{phone\}\}/g, phone);
  }, [t]);

  return (
    <section id="contact" className="py-16 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6">{t("contact.title")}</h3>
        <p className="mb-8 text-blue-100" dangerouslySetInnerHTML={{ __html: introHtml }} />
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder={t("contact.namePlaceholder")}
            className="w-full p-3 rounded text-gray-800"
          />
          <input
            type="email"
            placeholder={t("contact.emailPlaceholder")}
            className="w-full p-3 rounded text-gray-800"
          />
          <textarea
            placeholder={t("contact.messagePlaceholder")}
            className="w-full p-3 rounded text-gray-800 h-32"
          />
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
            {t("contact.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
