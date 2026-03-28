import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="bg-blue-50 pt-24 pb-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t("hero.title")}</h2>
      <p className="text-lg text-gray-600 mb-8">{t("hero.subtitle")}</p>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        {t("hero.cta")}
      </a>
    </section>
  );
}
