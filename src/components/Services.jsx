import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const items = t("services.items");

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">{t("services.title")}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.isArray(items) &&
            items.map((s, i) => (
              <div key={i} className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-2 text-blue-600">{s.title}</h4>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
