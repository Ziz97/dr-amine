import React from "react";
import { useLanguage } from "../context/LanguageContext";
import aboutImage from "../assets/images/reception.png";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="ds-section bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="ds-eyebrow mb-3">{t("nav.about")}</p>
          <h3 className="ds-title text-3xl md:text-4xl">{t("about.title")}</h3>
          <div className="ds-divider ds-divider--center mt-5" />
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <img
            src={aboutImage}
            alt={t("about.imageAlt")}
            className="ds-img w-full object-cover"
          />
          <p className="ds-text text-start">{t("about.body")}</p>
        </div>
      </div>
    </section>
  );
}
