import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://www.cabinetdentairelb.com/wp-content/uploads/salle-de-soins.jpg"
          alt={t("about.imageAlt")}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h3 className="text-3xl font-bold mb-4 text-gray-800">{t("about.title")}</h3>
          <p className="text-gray-600 mb-4">{t("about.p1")}</p>
          <p className="text-gray-600">{t("about.p2")}</p>
        </div>
      </div>
    </section>
  );
}
