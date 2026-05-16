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
    <section id="contact" className="f-section pb-24">
      <div className="container mx-auto px-6">
        <div className="f-card max-w-3xl mx-auto p-10 md:p-14 text-center border-futur-cyan/30 shadow-neon-cyan">
          <p className="f-eyebrow mb-3">04</p>
          <h3 className="f-title text-3xl md:text-4xl mb-4">{t("contact.title")}</h3>
          <div className="f-divider mb-8" />
          <p
            className="f-text mb-10 [&_strong]:text-futur-cyan [&_strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: introHtml }}
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="f-btn-outline w-full sm:w-auto"
            >
              {t("contact.instagram")}
            </a>
            <a
              href={DENTISTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="f-btn-primary w-full sm:w-auto"
            >
              {t("contact.dentisto")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
