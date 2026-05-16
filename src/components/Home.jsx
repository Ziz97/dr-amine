import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section id="home" className="bg-blue-50 pt-24 pb-20 text-center">
      <h2 className="md:text-2xl font-bold text-gray-800 mb-6">{t("home.title")}</h2>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        {t("home.cta")}
      </a>
    </section>
  );
}
