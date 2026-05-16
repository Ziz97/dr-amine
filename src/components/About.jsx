import React from "react";
import { useLanguage } from "../context/LanguageContext";
import aboutImage from "../assets/images/reception.png";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <img
          src={aboutImage}
          alt={t("about.imageAlt")}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h3 className="text-3xl font-bold mb-4 text-gray-800">{t("about.title")}</h3>
          <p className="text-gray-600 leading-relaxed">{t("about.body")}</p>
        </div>
      </div>
    </section>
  );
}
