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
    <section id="contact" className="ds-section ds-section--purple pb-24">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <p className="ds-eyebrow mb-3 text-brand-gold-light">{t("nav.contact")}</p>
        <h3 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
          {t("contact.title")}
        </h3>
        <div className="ds-divider ds-divider--center mb-8" />
        <p
          className="ds-text mb-10 text-white/85 [&_strong]:text-brand-gold-light [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: introHtml }}
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ds-btn-ghost w-full sm:w-auto"
          >
            {t("contact.instagram")}
          </a>
          <a
            href={DENTISTO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ds-btn-primary w-full sm:w-auto"
          >
            {t("contact.dentisto")}
          </a>
        </div>
      </div>
    </section>
  );
}
