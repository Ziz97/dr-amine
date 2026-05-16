import React, { useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";

const INSTAGRAM_URL = "https://www.instagram.com/duosmile.dentalcenter/";
const DENTISTO_URL =
  "https://dentisto.ma/index.php/rendez-vous/docteurs/mohammed-amine-elghorfi-2621";

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
        <p className="mb-10 text-blue-100" dangerouslySetInnerHTML={{ __html: introHtml }} />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            {t("contact.instagram")}
          </a>
          <a
            href={DENTISTO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition border border-blue-400"
          >
            {t("contact.dentisto")}
          </a>
        </div>
      </div>
    </section>
  );
}
