import React from "react";
import { useLanguage } from "../context/LanguageContext";
import aboutImage from "../assets/images/reception.png";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="f-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="f-eyebrow mb-3">01</p>
          <h3 className="f-title text-3xl md:text-4xl">{t("about.title")}</h3>
          <div className="f-divider mt-4" />
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <img
            src={aboutImage}
            alt={t("about.imageAlt")}
            className="f-img-frame w-full object-cover"
          />
          <p className="f-text text-start leading-relaxed">{t("about.body")}</p>
        </div>
      </div>
    </section>
  );
}
